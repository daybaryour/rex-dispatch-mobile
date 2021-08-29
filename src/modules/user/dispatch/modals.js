import React, { useState, useRef } from "react";
import { View, Text } from "react-native";

import Modal from "react-native-modal";
import { Button } from "react-native-elements";
import { Radio, Image, Divider, useToast } from "native-base";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import { CommonActions } from "@react-navigation/native";
import constants from "../../../helpers/constants";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//redux
import store from "../../../redux/store";
import { parcelPayment } from "../../../redux/user/dispatch/dispatchActions";
import { useDispatch } from "react-redux";

const Modals = (props) => {
  const [paymentChannel, setPaymentChannel] = useState("wallet");
  const [refNumber, setRefNumber] = useState();
  const [loading, toggleLoading] = useState(false);

  const data = props.bid;
  const parcel_details = props.parcel_details;

  const user = store.getState().settings.user;
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);

  const dispatch = useDispatch();
  const toast = useToast();

  //   const paystackPay = () => {
  //     console.log("here31");
  //     return (

  //     );
  //   };

  //   const onSubmit = () => {
  //     toggleLoading(true);
  //     // data.phone = data.phone.substring(1);
  //     console.log("here");
  //     let init_data = {
  //       parcel_id: data.parcel_id,
  //       reference: reference
  //     };
  //     dispatch(initializeTransaction(init_data, "customer"))
  //       .then((resp) => {
  //         console.log("here1");
  //         console.log(resp.data.reference);
  //         toggleLoading(false);
  //         setRefNumber(resp.data.reference);
  //         paystackWebViewRef.current.startTransaction()
  //       })
  //       .catch((e) => {
  //         toast.show({
  //           title: e
  //             ? e.toLowerCase()
  //             : "something went wrong, please check your internet connection and try again",
  //           status: "error",
  //           placement: "top",
  //         });
  //         toggleLoading(false);
  //       });
  //   };

  return (
    <View style={style.modal_container}>
      {/* business details modal */}
      <Modal
        isVisible={props.showModal == "business_details"}
        animationIn={"slideInLeft"}
        animationOut={"slideOutRight"}
        onBackdropPress={() => props.toggle_showModal(null)}
      >
        <View style={[style.modalContent, { borderRadius: 3 }]}>
          <View style={style.container}>
            <Image
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "7%",
                borderRadius: 5,
              }}
              source={{
                uri: data.logo,
              }}
              alt="Alternate Text"
              size={"sm"}
            />
            <View style={{ marginBottom: "5%" }}>
              <Text
                style={[
                  style.text_12,
                  { color: colors.pure_ash, marginBottom: "3%" },
                ]}
              >
                Business Name
              </Text>
              <Text style={[style.text, { marginBottom: "3%" }]}>
                {data.business_name}
              </Text>
              <Divider />
            </View>
            <View style={{ marginBottom: "5%" }}>
              <Text
                style={[
                  style.text_12,
                  { color: colors.pure_ash, marginBottom: "3%" },
                ]}
              >
                Email Address
              </Text>
              <Text style={[style.text, { marginBottom: "4%" }]}>
                {data.email}
              </Text>
              <Divider />
            </View>
            <View style={{ marginBottom: "5%" }}>
              <Text
                style={[
                  style.text_12,
                  { color: colors.pure_ash, marginBottom: "3%" },
                ]}
              >
                Location
              </Text>
              <Text style={[style.text, { marginBottom: "4%" }]}>
                {data.location}
              </Text>
              <Divider />
            </View>
            <View style={{ marginBottom: "5%" }}>
              <Text
                style={[
                  style.text_12,
                  { color: colors.pure_ash, marginBottom: "3%" },
                ]}
              >
                Phone Number
              </Text>
              <Text style={[style.text, { marginBottom: "4%" }]}>
                {data.phone}
              </Text>
              <Divider />
            </View>
            <View style={{ marginBottom: "5%" }}>
              <Text
                style={[
                  style.text_12,
                  { color: colors.pure_ash, marginBottom: "3%" },
                ]}
              >
                Address
              </Text>
              <Text style={[style.text, { marginBottom: "4%" }]}>
                {data.address}
              </Text>
              <Divider />
            </View>
            <View style={{ marginBottom: "5%" }}>
              <Text
                style={[
                  style.text_12,
                  { color: colors.pure_ash, marginBottom: "3%" },
                ]}
              >
                Name of Contact Person
              </Text>
              <Text style={[style.text, { marginBottom: "4%" }]}>
                {data.contact_person}
              </Text>
            </View>
          </View>
        </View>
      </Modal>

      {/* Proceed to Payment modal  */}
      <Modal
        isVisible={props.showModal == "proceed_payment"}
        style={style.bottomModal}
        onBackdropPress={() => props.toggle_showModal(null)}
      >
        <View
          style={[
            style.modalContent,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <View style={style.container}>
            <Text style={[style.text_16, { marginBottom: 20 }]}>
              Hi {parcel_details.senders_name},
            </Text>
            <Text style={[style.text_16_normal, { marginBottom: "7%" }]}>
              you have selected{" "}
              <Text style={[style.text_16]}>{data.business_name}</Text> to
              deliver your package to
              <Text style={[style.text_16]}>
                {" "}
                {parcel_details.recipient_name}
              </Text>{" "}
              at {parcel_details.delivery_address}
              <Text style={[style.text_16]}>
                {" "}
                ₦{new Intl.NumberFormat().format(data.price)}{" "}
              </Text>
            </Text>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="please select payment"
              value={paymentChannel}
              onChange={(nextValue) => {
                setPaymentChannel(nextValue);
              }}
            >
              <Radio aria-label="t2" value="wallet" colorScheme="green" my={1}>
                Pay with wallet
              </Radio>
              <Radio
                aria-label="t2"
                value="paystack"
                colorScheme="green"
                my={1}
              >
                Pay with Paystack
              </Radio>
              {/* <Radio aria-label="t2" value="three" colorScheme="green" my={1}>
                Pay on delivery
              </Radio> */}
            </Radio.Group>

            <Button
              block
              title="Make Payment"
              buttonStyle={[style.btn_success, { marginTop: "7%" }]}
              titleStyle={style.btn_text}
              loading={loading}
              disabled={loading}
              disabledStyle={[style.btn_success, { opacity: 0.8 }]}
              onPress={() => {
                toggleLoading(true);
                paymentChannel == "paystack"
                  ? paystackWebViewRef.current.startTransaction()
                  : props.navigation.navigate("orderSuccess");
              }}
            >
              <Text style={style.btn_text}>Add Card</Text>
            </Button>

            <Text
              style={[
                style.text_16,
                { color: colors.red, textAlign: "center" },
              ]}
              onPress={() => {
                props.toggle_showModal(null);
                props.navigation.navigate("dispatch", {
                  screen: "cancelRequest",
                  params: { id: parcel_details._id },
                });
              }}
            >
              Cancel Request
            </Text>

            <Paystack
              paystackKey={`${constants.PAYSTACK_PK}`}
              amount={data.price}
              billingEmail={user.email}
              activityIndicatorColor="green"
              onCancel={(e) => {
                // handle response here
              }}
              onSuccess={(res) => {
                let init_data = {
                  parcel_id: parcel_details._id,
                  bid_id: data.mongo_id,
                  payment_ref: res.data.transactionRef.reference,
                  payment_channel: paymentChannel,
                };
                dispatch(parcelPayment(init_data))
                  .then((res) => {
                    console.log(res, res.order_number);
                    toggleLoading(false);
                    props.toggle_showModal(null);
                    props.navigation.dispatch(
                      CommonActions.reset({
                        index: 1,
                        routes: [
                          {
                            name: "orderSuccess",
                            params: res.order_number,
                          },
                        ],
                      })
                    );
                  })
                  .catch((e) => {
                    toggleLoading(false);
                    props.toggle_showModal(null);
                    toast.show({
                      title: e
                        ? e.toLowerCase()
                        : "something went wrong, please check your internet connection and try again",
                      status: "error",
                      placement: "top",
                    });
                  });
              }}
              //   autoStart={true}
              ref={paystackWebViewRef}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Modals;
