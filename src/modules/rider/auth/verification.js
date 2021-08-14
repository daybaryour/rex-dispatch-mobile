import React, { useState } from "react";

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
import { useToast } from "native-base";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//redux
import { verification } from "../../../redux/general/auth/authActions";
import { useDispatch, useSelector } from "react-redux";

const Verification = (props) => {
  const [otp, setOtp] = useState("");
  const [isLoading, toggle_isLoading] = useState(false);

  const dispatch = useDispatch();
  const toast = useToast();

  const onSubmit = () => {
    toggle_isLoading(true);
    if (!otp) {
      toast.show({
        title: "please input otp",
        status: "error",
        placement: "top",
      });
      toggle_isLoading(false);
    } else {
      dispatch(verification({ otp: otp }, "rider"))
        .then(() => {
          toggle_isLoading(false);
          props.navigation.navigate("auth", {
            screen: "authSuccess",
          });
        })
        .catch((e) => {
          toast.show({
            title: e
              ? e
              : "something went wrong, please check your internet connection and try again",
            status: "error",
            placement: "top",
          });
          toggle_isLoading(false);
        });
    }
  };
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
                Enter the OTP we have sent to your mobile phone{" "}
                {props.route.params ? props.route.params.phone : " "}
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
                  setOtp(code);
                  //   console.log(`Code is ${code}, you are good to go!`);
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

            <View style={{ marginTop: 20 }}>
              <Button
                block
                title="Continue"
                buttonStyle={[style.btn_success]}
                titleStyle={style.btn_text}
                loading={isLoading}
                disabled={isLoading}
                disabledStyle={[style.btn_success_disabled, , { opacity: 0.8 }]}
                onPress={() => onSubmit()}
                // onPress={() => props.navigation.navigate("authSuccess")}
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
