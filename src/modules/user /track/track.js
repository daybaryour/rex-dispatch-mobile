import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

import { Input } from "native-base";
import { Button } from "react-native-elements";

//styles
import style from "../../../assets/styles/general/style";
import tabStyle from "../../../assets/styles/general/tabStyle";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import Footer from "../../partials/footer/footer";
import color from "../../../helpers/color";

const TrackDispatch = (props) => {
  return (
    <View style={style.body}>
      <Header title={"Track Parcel"} />
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../assets/images/bike_man.png")}
            style={{ width: 186, height: 186, marginVertical: "7%" }}
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
            buttonStyle={[style.btn_success, { marginTop: "10%" }]}
            titleStyle={style.btn_text}
          />
          {/* uncomment this when integrating */}
          {/* <Button
            block
            title="Submit Feedback"
            buttonStyle={[
              style.btn_success,
              { backgroundColor: colors.navy_blue, marginTop: "10%" },
            ]}
            titleStyle={style.btn_text}
          /> */}
        </View>
      </ScrollView>

      <Footer location={"track"} navigation={props.navigation} />
    </View>
  );
};

export default TrackDispatch;
