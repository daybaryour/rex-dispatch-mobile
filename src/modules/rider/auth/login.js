import React, { useRef, useState } from "react";
import { FormControl, Image, Input } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import { View, ScrollView, Text } from "react-native";
import PhoneInput from "react-native-phone-number-input";

import authStyle from "../../../assets/styles/general/authStyle";
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

const Login = (props) => {
  //   state = {
  //     hide_password: true,
  //   };
  const [hide_password, toggle_hide_password] = useState(true);

  const phoneInput = useRef() < PhoneInput > null;
  return (
    //
    <View style={style.body}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <View>
          <Image
            source={require("../../../assets/logos/logo.png")}
            style={style.top_logo}
            alt="react-native"
            size={12}
          />
          <Text style={style.heading}>Login</Text>
          <Text style={style.heading_text}>
            Welcome back, send parcels easily.{" "}
          </Text>
        </View>
        <View>
          <FormControl>
            <Text style={style.form_label}>Phone Number</Text>
            <PhoneInput
              containerStyle={style.phone_container}
              textContainerStyle={style.phone_text_container}
              textInputStyle={[style.no_margin, style.no_padding]}
              //   ref={phoneInput}
              defaultCode="NG"
              layout="first"
              //   onChangeText={(text) => {
              //     setValue(text);
              //   }}
              //   onChangeFormattedText={(text) => {
              //     setFormattedValue(text);
              //   }}
            />

            <Text style={style.form_label}>Password</Text>

            <Input
              placeholder="Enter password"
              {...style.form_control}
              type={!hide_password ? "text" : "password"}
              style={{ borderBottomWidth: 0 }}
              _focus={colors.border_black}
              InputRightElement={
                <Icon
                  style={{ marginHorizontal: 15 }}
                  name={hide_password ? "eye" : "eye-slash"}
                  onPress={() => {
                    toggle_hide_password(!hide_password);
                  }}
                />
              }
            />

            <Text style={authStyle.sm_text}>Forgot password?</Text>

            <Button
              block
              title="Sign in"
              buttonStyle={[style.btn_success, { marginTop: 0 }]}
              titleStyle={style.btn_text}
              onPress={() => props.navigation.navigate("verification")}
            />
          </FormControl>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
