import React, { useRef, useState } from "react";
import { Text, Input, Label, Image, Right } from "native-base";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import { View, ScrollView } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { CheckBox } from "react-native-elements";
import authStyle from "../../../assets/styles/general/authStyle";
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";
import { Grid, Row, Col } from "react-native-easy-grid";

const Register = (props) => {
  const [hide_password, toggle_hide_password] = useState(true);
  const [icon_checked, toggle_icon_checked] = useState(false);

  const phoneInput = useRef() < PhoneInput > null;
  return (
    <View style={style.body}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <View>
          <Image
            alt="rex logo"
            square
            source={require("../../../assets/logos/logo.png")}
            style={style.top_logo}
          />
          <Text style={style.heading}>Register</Text>
          <Text style={style.heading_text}>
            Get onboard and start sending parcels easily.{" "}
          </Text>
        </View>
        <View>
          <Text style={style.form_label}>First Name</Text>

          <Input
            {...style.form_control}
            _focus={colors.border_black}
            placeholder="First Name"
          />

          <Text style={style.form_label}>Last Name</Text>

          <Input
            {...style.form_control}
            _focus={colors.border_black}
            placeholder="Last Name"
          />

          <Text style={style.form_label}>Phone Number</Text>
          {/*  */}
          <PhoneInput
            // countryPickerButtonStyle={style.form_control}
            containerStyle={[style.form_control]}
            textContainerStyle={{ backgroundColor: "#fff" }}
            //   ref={phoneInput}
            defaultCode="NG"
            layout="first"
            //   onChangeText={(text) => {
            //     setValue(text);
            //   }}
            //   onChangeFormattedText={(text) => {
            //     setFormattedValue(text);
            //   }}
            // withDarkTheme
            // withShadow
            autoFocus
          />
          {/* <Input style={{ fontSize: 16 }} placeholder="09047478291" /> */}
          {/*  */}
          <Text style={style.form_label}>Password</Text>

          <Input
            placeholder="Enter password"
            {...style.form_control}
            type={!hide_password ? "text" : "password"}
            _focus={colors.border_black}
            InputRightElement={
              <Icon
                style={{ marginHorizontal: "2%" }}
                name={hide_password ? "eye" : "eye-slash"}
                onPress={() => {
                  toggle_hide_password(!hide_password);
                }}
              />
            }
          />

          <Grid style={{ marginVertical: "6%" }}>
            <Row>
              <Col size={0.5}>
                <CheckBox
                  checked={icon_checked}
                  onPress={() => toggle_icon_checked(!icon_checked)}
                  checkedColor="#494949"
                  style={{
                    borderRadius: 3,
                    marginLeft: -20,
                    marginTop: "30%",
                  }}
                />
              </Col>
              <Col size={3}>
                <Text
                  style={[
                    authStyle.sm_text,
                    {
                      color: colors.text_black,
                      textDecorationLine: "none",
                    },
                  ]}
                >
                  I have read and agreed to the{" "}
                  <Text
                    style={authStyle.sm_text}
                    onPress={() => props.navigation.navigate("terms")}
                  >
                    terms and conditions
                  </Text>{" "}
                  and{" "}
                  <Text
                    style={authStyle.sm_text}
                    onPress={() => props.navigation.navigate("terms")}
                  >
                    privacy policy
                  </Text>
                </Text>
              </Col>
            </Row>
          </Grid>

          <Button
            block
            title="Register"
            buttonStyle={[style.btn_success, { marginBottom: 0 }]}
            titleStyle={style.btn_text}
          />

          <Text style={{ fontSize: 14, marginVertical: "12%" }}>
            Have an account?{" "}
            <Text
              style={{ color: colors.lemon }}
              onPress={() => props.navigation.navigate("login")}
            >
              Log In
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
