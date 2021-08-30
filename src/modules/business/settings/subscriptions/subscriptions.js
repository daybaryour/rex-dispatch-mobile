import React, { useState, useEffect, useRef } from "react";
import { Button } from "react-native-elements";
import { Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useToast } from "native-base";
import Spinner from "react-native-spinkit";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import { CommonActions } from "@react-navigation/native";

import constants from "../../../../helpers/constants";

//styles
import style from "../../../../assets/styles/general/style";
import colors from "../../../../helpers/color";

//partials
import Header from "../../../partials/header";

//redux
import { useDispatch } from "react-redux";
import {
  getAllSubscriptions,
  subscribe,
} from "../../../../redux/business/subscriptions/subscriptionActions";
import store from "../../../../redux/store";

const Subscriptions = (props) => {
  const [pageLoading, setPageLoading] = useState(true);
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, toggleLoading] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({});

  const dispatch = useDispatch();
  const toast = useToast();

  const user = store.getState().settings.user;
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);

  useEffect(() => {
    dispatch(getAllSubscriptions())
      .then((res) => {
        setSubscriptions(res);
        setPageLoading(false);
      })
      .catch((e) => {
        toast.show({
          title: e
            ? e.toLowerCase()
            : "something went wrong, please check your internet connection and restart the app",
          status: "error",
          placement: "top",
        });
        setPageLoading(false);
      });
  }, []);

  return (
    <>
      <View style={style.body}>
        <Header
          icon={"back"}
          title={"Subscriptions"}
          navigation={props.navigation}
        />
        {pageLoading ? (
          <View
            style={{
              // display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Spinner
                isVisible={true}
                size={60}
                type="ThreeBounce"
                color={colors.navy_blue}
              />
            </View>
          </View>
        ) : !subscriptions.length ? (
          <View
            style={{
              // display: "flex",
              flex: 0.8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <MaterialIcons
                style={{
                  color: colors.navy_blue,
                  fontSize: 100,
                  textAlign: "center",
                }}
                name={"payments"}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  marginTop: 10,
                  color: colors.navy_blue,
                }}
              >
                No Subscriptions
              </Text>
            </View>
          </View>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps={"handled"}
            style={style.container}
          >
            <Text
              style={{
                color: colors.text_black,
                marginTop: 20,
                marginBottom: 30,
                textAlign: "center",
                fontSize: 14,
              }}
            >
              Subscribe to your preferred plan{" "}
            </Text>
            {subscriptions.map((data) => {
              return (
                <>
                  <View
                    style={{
                      paddingVertical: 15,
                      paddingHorizontal: 23,
                      backgroundColor: colors.ash_bg,
                      borderRadius: 5,
                      borderLeftWidth: 1,
                      borderColor: colors.ash,
                      marginBottom: 25,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={style.text}
                        style={{ textTransform: "capitalize" }}
                      >
                        {data.plan} Plan
                      </Text>
                      <Text style={[style.text, { marginLeft: "auto" }]}>
                        ₦ {new Intl.NumberFormat().format(data.amount)}
                        <Text style={{ color: colors.text_ash }}>
                          / month
                        </Text>{" "}
                      </Text>
                    </View>
                    <Text
                      style={[
                        style.text,
                        {
                          marginTop: 15,
                          marginBottom: 8,
                          fontWeight: "normal",
                        },
                      ]}
                    >
                      <Icon
                        style={{
                          color: colors.lemon,
                          fontSize: 14,
                        }}
                        name={"checkmark"}
                      />
                      {"  "}1 - {data.dispatch_rides} dispatch rides
                    </Text>
                    <Text style={[style.text, { fontWeight: "normal" }]}>
                      <Icon
                        style={{
                          color: colors.lemon,
                          fontSize: 14,
                        }}
                        name={"checkmark"}
                      />
                      {"  "}Max of {data.features} deliveries monthly
                    </Text>
                    <Button
                      block
                      title="Proceed"
                      buttonStyle={[
                        style.btn_success,
                        { marginTop: 34, marginBottom: 0, paddingVertical: 13 },
                      ]}
                      titleStyle={style.btn_text}
                      loading={loading}
                      disabled={loading}
                      disabledStyle={[
                        style.btn_success,
                        {
                          opacity: 0.8,
                          marginTop: 34,
                          marginBottom: 0,
                          paddingVertical: 13,
                        },
                      ]}
                      onPress={async () => {
                        let new_data = {
                          _id: data._id,
                          amount: data.amount,
                        };

                        setPaymentDetails(new_data);
                        paystackWebViewRef.current.startTransaction();
                      }}
                    />
                  </View>
                  {/* paystack */}
                  <Paystack
                    paystackKey={`${constants.PAYSTACK_PK}`}
                    amount={paymentDetails.amount}
                    billingEmail={"iwatannayevictor@gmail.com"} // change to user.email
                    activityIndicatorColor="green"
                    onCancel={(e) => {
                      // handle response here
                    }}
                    onSuccess={(res) => {
                      toggleLoading(true);
                      let init_data = {
                        subscription_type_id: paymentDetails._id,
                        payment_ref: res.data.transactionRef.reference,
                        payment_channel: "paystack",
                        gateway_response: "remove",
                      };
                      dispatch(subscribe(init_data))
                        .then((res) => {
                          console.log(res);
                          toggleLoading(false);
                          props.navigation.dispatch(
                            CommonActions.reset({
                              index: 1,
                              routes: [
                                {
                                  name: "mySubscriptions",
                                },
                              ],
                            })
                          );
                        })
                        .catch((e) => {
                          toggleLoading(false);
                          toast.show({
                            title: e
                              ? e.toLowerCase()
                              : "something went wrong, please check your internet connection and try again",
                            status: "error",
                            placement: "top",
                          });
                        });
                    }}
                    // autoStart={true}
                    ref={paystackWebViewRef}
                  />
                </>
              );
            })}
          </ScrollView>
        )}
      </View>
    </>
  );
};

export default Subscriptions;
