import React, { useRef, useState, useEffect } from "react";
import { FormControl, Image, Input, useToast } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import { View, ScrollView, Text } from "react-native";
import PhoneInput from "react-native-phone-number-input";

//style
import authStyle from "../../../assets/styles/general/authStyle";
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//redux
import { login } from "../../../redux/general/auth/authActions";
import { useDispatch, useSelector } from "react-redux";

const Login = (props) => {
  const [hide_password, toggle_hide_password] = useState(true);
  const [isLoading, toggle_isLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const err_resp = { phone: false, password: false };
  const [errors, setErrors] = useState(err_resp);

  const phoneInput = useRef() < PhoneInput > null;

  useEffect(() => {}, []);

  const onPasswordChange = (text) => {
    setPassword(text);
  };

  const dispatch = useDispatch();
  const toast = useToast();
  const { message } = useSelector((state) => state.message);

  const handleSubmit = () => {
    toggle_isLoading(true);

    if (!phone) {
      err_resp.phone = true;
      setErrors(err_resp);
      toggle_isLoading(false);
    }
    if (!password) {
      err_resp.password = true;
      setErrors(err_resp);
      toggle_isLoading(false);
    }

    if (password && phone) {
      const data = { phone: phone, password: password };

      dispatch(login(data, "customer"))
        .then(() => {
          //   toggle_isLoading(false);
          props.navigation.navigate("dispatch", {
            screen: "createDispatch",
          });
        })
        .catch(() => {
          toast.show({
            title: message
              ? message
              : "something went wrong, please check your internet connection",
            status: "error",
            placement: "top",
          });
          toggle_isLoading(false);
        });
    }
  };

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
          <View></View>

          <Text style={style.form_label}>Phone Number</Text>
          <PhoneInput
            containerStyle={
              errors.phone ? style.phone_container_error : style.phone_container
            }
            textContainerStyle={style.phone_text_container}
            textInputStyle={[style.no_margin, style.no_padding]}
            //   ref={phoneInput}
            defaultCode="NG"
            layout="first"
            //   onChangeText={(text) => {
            //     setPhone(text);
            //   }}
            onChangeFormattedText={(text) => {
              setPhone(text);
            }}
          />

          <FormControl isInvalid={errors.password}>
            <Text style={style.form_label}>Password</Text>

            <Input
              placeholder="Enter password"
              type={!hide_password ? "text" : "password"}
              {...style.form_control}
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
              onChangeText={onPasswordChange}
            />
          </FormControl>

          <Text style={authStyle.sm_text}>Forgot password?</Text>

          <Button
            block
            title="Sign in"
            buttonStyle={[style.btn_success, { marginTop: 0 }]}
            titleStyle={style.btn_text}
            onPress={() => handleSubmit()}
            // props.navigation.navigate("dispatch")
            loading={isLoading}
            disabled={isLoading}
            disabledStyle={[style.btn_success, { marginTop: 0, opacity: 0.8 }]}
          />

          <Text style={{ fontSize: 14, marginBottom: 50 }}>
            New to Rex Dispatch?{" "}
            <Text
              style={{ color: colors.lemon }}
              onPress={() => props.navigation.navigate("register")}
            >
              Register
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
