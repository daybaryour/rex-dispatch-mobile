import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  Form,
  Item,
  Input,
  Label,
  Icon,
  Thumbnail,
  Right,
} from "native-base";
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
import normalStyle from "../../../assets/styles/general/style";
import tabStyle from "../../../assets/styles/general/tabStyle";
import authNormalStyle from "../../../assets/styles/general/authStyle";
import authTabStyle from "../../../assets/styles/general/authTabStyle";
import colors from "../../../helpers/color";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Verification = (props) => {
  // come back to convert this to functional component
  //   state = {
  //     window: {
  //       width: "",
  //       height: "",
  //     },
  //   };

  //   onDimensionChange = ({ window, screen }) => {
  //     this.setState({
  //       window: {
  //         width: window.width,
  //         height: window.height,
  //       },
  //     });
  //   };

  //   componentDidMount() {
  //     Dimensions.addEventListener("change", this.onDimensionChange);
  //   }

  //   componentWillUnmount() {
  //     Dimensions.removeEventListener("change", this.onDimensionChange);
  //   }

  const style = window.width > 578 ? tabStyle : normalStyle;
  const authStyle = window.width > 578 ? authTabStyle : authNormalStyle;
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
                  { color: colors.white, marginTop: "25%" },
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
                marginTop: "5%",
                marginBottom: "13%",
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
            <View style={{ marginTop: "17%" }}>
              <Button
                block
                title="Continue"
                buttonStyle={[style.btn_success, { padding: "5%" }]}
                titleStyle={style.btn_text}
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
