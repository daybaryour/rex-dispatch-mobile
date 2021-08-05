import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

const AuthSuccess = (props) => {
  return (
    <View style={style.body}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <View style={{ alignItems: "center" }}>
          <View style={{ marginTop: "23%" }}>
            <Image
              source={require("../../../assets/images/thumbs_up.png")}
              style={{ width: 210, height: 210, marginVertical: 25 }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={[style.text_20]}>Congratulations!</Text>
            <Text
              style={[
                style.text_16_normal,
                {
                  textAlign: "center",
                  marginTop: 10,
                  marginBottom: 20,
                  paddingHorizontal: 25,
                },
              ]}
            >
              Gokada Logistics has been successfully registered
            </Text>
          </View>
        </View>
        <Button
          block
          title="Register your Riders"
          buttonStyle={[style.btn_success]}
          titleStyle={style.btn_text}
          onPress={() =>
            props.navigation.navigate("fleet", { screen: "newVehicle" })
          }
        />
      </ScrollView>
    </View>
  );
};

export default AuthSuccess;
