import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

const NewVehicleSuccess = (props) => {
  return (
    <View style={style.body}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <View style={{ alignItems: "center" }}>
          <View style={{ marginTop: "23%" }}>
            <Image
              source={require("../../../assets/images/chain.png")}
              style={{ width: 210, height: 210, marginVertical: 25 }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={[style.text_20]}>Complete Registration</Text>
            <Text
              style={[
                style.text,
                {
                  textAlign: "center",
                  marginTop: 34,
                  marginBottom: 20,
                  paddingHorizontal: 25,
                },
              ]}
            >
              An OTP has been sent to Chukwuma's phone number 07054664673 to
              complete the registration on his phone.
            </Text>
          </View>
        </View>
        <Button
          block
          title="Add another Rider"
          buttonStyle={[style.btn_success]}
          titleStyle={style.btn_text}
          onPress={() =>
            props.navigation.navigate("fleet", { screen: "newVehicle" })
          }
        />

        <Text
          style={[style.text_16, { color: colors.lemon, textAlign: "center" }]}
          onPress={() => props.navigation.navigate("requests")}
        >
          Start receiving orders
        </Text>
      </ScrollView>
    </View>
  );
};

export default NewVehicleSuccess;
