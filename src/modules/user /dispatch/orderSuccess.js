import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";

//styles
import style from "../../../assets/styles/general/style";
import tabStyle from "../../../assets/styles/general/tabStyle";
import colors from "../../../helpers/color";

const OrderSuccess = () => {
  return (
    <View style={style.body}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <View style={{ alignItems: "center" }}>
          <View style={{ marginTop: "25%" }}>
            <Image
              source={require("../../../assets/images/bulb_man.png")}
              style={{ width: 210, height: 210, marginVertical: "5%" }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={[style.text_20]}>
              Your order was placed successfully
            </Text>

            <Text
              style={[
                style.text,
                {
                  fontWeight: "400",
                  textAlign: "center",
                  marginTop: "10%",
                  marginBottom: "7%",
                },
              ]}
            >
              Your payment receipt and dispatch details has been sent to your
              email.
            </Text>
            <Text style={[style.text, { fontWeight: "400" }]}>
              Your order number is 03345
            </Text>
          </View>
        </View>
        <Button
          block
          title="Send another parcel"
          buttonStyle={[style.btn_success, { marginTop: "15%" }]}
          titleStyle={style.btn_text}
        />
        <Text
          style={[style.text_16, { textAlign: "center", color: colors.lemon }]}
        >
          Track my Parcel
        </Text>
      </ScrollView>
    </View>
  );
};

export default OrderSuccess;
