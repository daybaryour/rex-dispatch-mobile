import React, { useState, useRef } from "react";
import { View, Text } from "react-native";

import Modal from "react-native-modal";
import { Button } from "react-native-elements";
import { FormControl, Input, useToast } from "native-base";
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

const DepositModal = (props) => {
  const [loading, toggleLoading] = useState(false);

  const user = store.getState().settings.user;
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);

  const dispatch = useDispatch();
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const onSubmit = (data) => {
      toggleLoading(true);
      // data.phone = data.phone.substring(1);
      console.log("here");
      let init_data = {
        parcel_id: data.parcel_id,
        reference: reference
      };
      dispatch(initializeTransaction(init_data, "customer"))
        .then((resp) => {
          console.log("here1");
          console.log(resp.data.reference);
          toggleLoading(false);
          setRefNumber(resp.data.reference);
          paystackWebViewRef.current.startTransaction()
        })
        .catch((e) => {
          toast.show({
            title: e
              ? e.toLowerCase()
              : "something went wrong, please check your internet connection and try again",
            status: "error",
            placement: "top",
          });
          toggleLoading(false);
        });
    };

  return (
    <View style={style.modal_container}>
     

      {/* Proceed to Payment modal  */}
      <Modal
        isVisible={props.showModal}
        animationIn={"slideInLeft"}
        animationOut={"slideOutRight"}
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
              Amount
            </Text>
           
            <Controller
          control={control}
          rules={{
            required: required,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormControl isInvalid={errors[name] ? true : false}>
              <Input
                {...style.form_control}
                _focus={colors.border_black}
                placeholder={placeholder}
                onChangeText={(val) => onChange(val)}
                value={value}
              />
            </FormControl>
          )}
          name={name}
          defaultValue=""
        />
        {errors[name] && (
          <Text style={style.error_text}>{error_name} is required.</Text>
        )}

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

export default DepositModal;
