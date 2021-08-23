import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";

import { Input, useToast, FormControl } from "native-base";
import { Button } from "react-native-elements";
import StepIndicator from "react-native-step-indicator";
import { useForm, Controller } from "react-hook-form";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import Footer from "../../partials/footer/footer";

//redux
import { useDispatch, useSelector } from "react-redux";
import { trackParcel } from "../../../redux/user/dispatch/dispatchActions";

const TrackDispatch = (props) => {
  const [current_position, set_current_position] = useState(null);
  const [loading, toggle_loading] = useState(false);
  const [parcel, set_parcel] = useState({});

  const labels = [
    "Bid Pending",
    "Bid Accepted",
    "Rider Assigned",
    "Picked up",
    "In Transit",
    "Delivered",
  ];
  const stepIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: colors.lemon,
    separatorFinishedColor: colors.navy_blue,
    separatorUnFinishedColor: colors.text_ash,
    stepIndicatorFinishedColor: colors.navy_blue,
    stepIndicatorUnFinishedColor: colors.text_ash,
    stepIndicatorCurrentColor: colors.lemon,
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: colors.white,
    stepIndicatorLabelFinishedColor: colors.white,
    stepIndicatorLabelUnFinishedColor: colors.white,
    labelColor: colors.navy_blue,
    // labelUnFinishedColor: colors.text_ash,
    labelSize: 14,
    currentStepLabelColor: colors.lemon,
    unFinishedStepLabelColor: colors.lemon,
    labelAlign: "flex-start",
  };

  const dispatch = useDispatch();
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const MyInput = ({ name, placeholder, required }) => {
    return (
      <>
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
          <Text style={style.error_text}>order number is required.</Text>
        )}
      </>
    );
  };

  const onSubmit = (data) => {
    toggle_loading(true);
    dispatch(trackParcel(data.order_number))
      .then((data) => {
        if (data) {
          set_parcel(data);

          const status =
            data.status == "pending"
              ? 0
              : data.status == "bid_accepted"
              ? 1
              : data.status == "rider_assigned"
              ? 2
              : data.status == "picked_up"
              ? 3
              : data.status == "in_transit"
              ? 4
              : 5;

          console.log(status);

          set_current_position(status);
        }

        toggle_loading(false);
      })
      .catch((e) => {
        toast.show({
          title: e
            ? e.toLowerCase()
            : "something went wrong, please check your internet connection and try again",
          status: "error",
          placement: "top",
        });
        toggle_loading(false);
      });
  };

  console.log(parcel);

  return (
    <View style={style.body}>
      <Header title={"Track Parcel"} />
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../assets/images/bike_man.png")}
            style={{ width: 186, height: 186, marginTop: 20 }}
          />
        </View>

        <Text style={style.form_label}>Order Number</Text>

        <MyInput
          name="order_number"
          placeholder="please enter"
          required={true}
        />
        <Button
          block
          title="Track Now"
          buttonStyle={[style.btn_success, { marginTop: 35 }]}
          titleStyle={style.btn_text}
          loading={loading}
          disabled={loading}
          disabledStyle={[
            style.btn_success_disabled,
            { marginTop: 35, opacity: 0.8 },
          ]}
          onPress={handleSubmit(onSubmit)}
        />

        {current_position && (
          <>
            <View style={{ height: 400, color: colors.text_ash }}>
              <StepIndicator
                customStyles={stepIndicatorStyles}
                currentPosition={current_position}
                labels={labels}
                stepCount={6}
                direction="vertical"
              />
            </View>
          </>
        )}

        {/* uncomment this when integrating */}
        {current_position == 5 && (
          <>
            <Button
              block
              title="Submit Feedback"
              buttonStyle={[
                style.btn_success,
                { backgroundColor: colors.navy_blue, marginTop: 35 },
              ]}
              titleStyle={style.btn_text}
              onPress={() => props.navigation.navigate("deliverySuccess")}
            />
          </>
        )}
      </ScrollView>

      <Footer location={"track"} navigation={props.navigation} />
    </View>
  );
};

export default TrackDispatch;
