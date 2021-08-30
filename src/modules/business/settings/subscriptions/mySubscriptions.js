import React, { useState, useEffect } from "react";
import { Button } from "react-native-elements";
import { Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Spinner from "react-native-spinkit";
import { useToast } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

//styles
import style from "../../../../assets/styles/general/style";
import colors from "../../../../helpers/color";

//partials
import Header from "../../../partials/header";

//redux
import { useDispatch } from "react-redux";
import { getSubscription } from "../../../../redux/business/subscriptions/subscriptionActions";

const MySubscriptions = (props) => {
  const [pageLoading, setPageLoading] = useState(true);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    dispatch(getSubscription())
      .then((res) => {
        setData(res);
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
          title={"Manage Subscription"}
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
        ) : !data.length ? (
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
                No Subscription
              </Text>
              <Button
                block
                title="Subscribe Now!"
                buttonStyle={[
                  style.btn_success,
                  {
                    width: "100%",
                    marginTop: 34,
                    marginBottom: 14,
                    paddingVertical: 13,
                  },
                ]}
                titleStyle={style.btn_text}
                onPress={() => props.navigation.navigate("subscriptions")}
              />
            </View>
          </View>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps={"handled"}
            style={style.container}
          >
            <View
              style={{
                marginTop: 50,
                paddingVertical: 15,
                paddingHorizontal: 23,
                backgroundColor: colors.ash_bg,
                borderRadius: 5,
                borderLeftWidth: 1,
                borderColor: colors.ash,
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
                  {data[0].plan} Plan
                </Text>
                <Text style={[style.text, { marginLeft: "auto" }]}>
                  ₦ {new Intl.NumberFormat().format(data[0].amount)}
                  <Text style={{ color: colors.text_ash }}>/ month</Text>{" "}
                </Text>
              </View>
              <Text
                style={[
                  style.text,
                  { marginTop: 15, marginBottom: 8, fontWeight: "normal" },
                ]}
              >
                <Icon
                  style={{
                    color: colors.lemon,
                    fontSize: 14,
                  }}
                  name={"checkmark"}
                />
                {"  "}1 - {data[0].dispatch_rides} dispatch rides
              </Text>
              <Text style={[style.text, { fontWeight: "normal" }]}>
                <Icon
                  style={{
                    color: colors.lemon,
                    fontSize: 14,
                  }}
                  name={"checkmark"}
                />
                {"  "}Max of {data[0].features} deliveries monthly
              </Text>
              <Button
                block
                title="Upgrade"
                buttonStyle={[
                  style.btn_success,
                  {
                    backgroundColor: colors.text_red,
                    marginTop: 34,
                    marginBottom: 14,
                    paddingVertical: 13,
                  },
                ]}
                titleStyle={style.btn_text}
                onPress={() => props.navigation.navigate("subscriptions")}
              />
              <Text style={[style.text, { textAlign: "center" }]}>Cancel</Text>
            </View>
          </ScrollView>
        )}
      </View>
    </>
  );
};

export default MySubscriptions;
