import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";

import { Input } from "native-base";
import { Button } from "react-native-elements";
import StepIndicator from "react-native-step-indicator";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import Footer from "../../partials/footer/footer";
import color from "../../../helpers/color";

const TrackDispatch = (props) => {
  const [currentPosition, setCurrentPosition] = useState(3);
  const labels = [
    "Job Pending",
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
        <View>
          <Text style={style.form_label}>Order Number</Text>
          <Input
            {...style.form_control}
            _focus={colors.border_black}
            placeholder="Please enter"
          />
          <Button
            block
            title="Track Now"
            buttonStyle={[style.btn_success, { marginTop: 35 }]}
            titleStyle={style.btn_text}
          />
          <View style={{ height: 400, color: colors.text_ash }}>
            <StepIndicator
              customStyles={stepIndicatorStyles}
              currentPosition={currentPosition}
              labels={labels}
              stepCount={7}
              direction="vertical"
            />
          </View>
          {/* uncomment this when integrating */}
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
        </View>
      </ScrollView>

      <Footer location={"track"} navigation={props.navigation} />
    </View>
  );
};

export default TrackDispatch;
