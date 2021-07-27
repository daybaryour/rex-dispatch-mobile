import React from "react";

import { Text } from "react-native";
import { Button } from "react-native-elements";
import {
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";
import OtpInputs from "@twotalltotems/react-native-otp-input";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

const Verification = (props) => {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: colors.navy_blue }} />
      <StatusBar barStyle="light-content" />
      <View style={{ backgroundColor: colors.navy_blue, flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[style.container]}>
            <View>
              <Text
                style={[
                  style.heading,
                  { color: colors.white, marginTop: "20%" },
                ]}
              >
                Verification
              </Text>
              <Text style={[style.heading_text, { color: colors.white }]}>
                Enter the OTP we have sent to your mobile phone 07062584834
              </Text>
            </View>
            <View>
              <OtpInputs
                handleChange={(code) => console.log(code)}
                style={{
                  width: "75%",
                  height: 100,
                  marginLeft: "auto",
                  marginRight: "auto",
                  color: "#fff",
                }}
                pinCount={4}
                autoFocusOnLoad
                codeInputFieldStyle={{
                  borderColor: colors.lemon,
                  width: 55,
                  height: 55,
                  borderRadius: 6,
                  borderWidth: 2,
                }}
                onCodeFilled={(code) => {
                  console.log(`Code is ${code}, you are good to go!`);
                }}
              />
            </View>
            <View
              style={{
                display: "flex",
                marginTop: 27,
                marginBottom: 41,
              }}
            >
              <Text style={[style.text_white, { textAlign: "center" }]}>
                Didn't get the code?
              </Text>
              <Text
                style={[
                  style.text_white,
                  { textAlign: "center", color: colors.lemon },
                ]}
              >
                Resend code
              </Text>
            </View>
            <View>
              <Text style={[style.text_white, { textAlign: "center" }]}>
                Not your number?{" "}
                <Text
                  style={[
                    style.text_white,
                    { color: colors.lemon, textDecorationLine: "underline" },
                  ]}
                  onPress={() => props.navigation.navigate("register")}
                >
                  Change number
                </Text>
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Button
                block
                title="Continue"
                buttonStyle={[style.btn_success]}
                titleStyle={style.btn_text}
                onPress={() => props.navigation.navigate("authSuccess")}
              >
                <Text style={style.btn_text}>Add Card</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Verification;
