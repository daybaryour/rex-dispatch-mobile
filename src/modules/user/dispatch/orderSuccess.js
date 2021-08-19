import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";
import { CommonActions } from "@react-navigation/native";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

const OrderSuccess = (props) => {
  return (
    <View style={style.body}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <View style={{ alignItems: "center" }}>
          <View style={{ marginTop: "23%" }}>
            <Image
              source={require("../../../assets/images/bulb_man.png")}
              style={{ width: 210, height: 210, marginVertical: 20 }}
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
                  marginTop: 34,
                  marginBottom: 20,
                },
              ]}
            >
              Your payment receipt and dispatch details has been sent to your
              email.
            </Text>
            <Text style={[style.text, { fontWeight: "400" }]}>
              Your order number is {props.route.params}
            </Text>
          </View>
        </View>
        <Button
          block
          title="Send another parcel"
          buttonStyle={[style.btn_success, { marginTop: 55 }]}
          titleStyle={style.btn_text}
          onPress={() =>
            props.navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {
                    name: "createDispatch",
                  },
                ],
              })
            )
          }
        />
        <Text
          style={[style.text_16, { textAlign: "center", color: colors.lemon }]}
          onPress={() =>
            props.navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {
                    name: "track",
                    screen: "track",
                  },
                ],
              })
            )
          }
        >
          Track my Parcel
        </Text>
      </ScrollView>
    </View>
  );
};

export default OrderSuccess;
