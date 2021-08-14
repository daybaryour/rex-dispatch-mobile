import React, { useRef, useState } from "react";
import { FormControl, Image, Input, useToast, Pressable } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import { View, ScrollView, Text } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { useForm, Controller } from "react-hook-form";
import { CommonActions } from "@react-navigation/native";

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

  const phoneInput = useRef() < PhoneInput > null;
  const dispatch = useDispatch();
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toggle_isLoading(true);
    // data.phone = data.phone.substring(1);
    // console.log(data);
    dispatch(login(data, "business"))
      .then(() => {
        toggle_isLoading(false);

        props.navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              {
                name: "requests",
                screen: "allRequests",
              },
            ],
          })
        );
      })
      .catch((e) => {
        toast.show({
          title: e
            ? e.toLowerCase()
            : "something went wrong, please check your internet connection and try again",
          status: "error",
          placement: "top",
        });
        toggle_isLoading(false);
      });
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
          <Text style={style.form_label}>Phone Number</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <PhoneInput
                containerStyle={
                  errors.phone
                    ? style.phone_container_error
                    : style.phone_container
                }
                textContainerStyle={style.phone_text_container}
                textInputStyle={[style.no_margin, style.no_padding]}
                //   ref={phoneInput}
                defaultCode="NG"
                layout="first"
                // onChangeText={(text) => {
                //   onChange(text);
                // }}
                onChangeFormattedText={(text) => {
                  onChange(text);
                }}
              />
            )}
            name={"phone"}
            defaultValue=""
          />
          {errors.phone && (
            <Text style={style.error_text}>Phone number is required.</Text>
          )}

          <Text style={style.form_label}>Password</Text>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <FormControl isInvalid={errors.password ? true : false}>
                <Input
                  placeholder="Enter password"
                  {...style.form_control}
                  type={!hide_password ? "text" : "password"}
                  _focus={colors.border_black}
                  onChangeText={(val) => onChange(val)}
                  value={value}
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
              </FormControl>
            )}
            name={"password"}
            defaultValue=""
          />
          {errors.password && (
            <Text style={style.error_text}>Password is required.</Text>
          )}
          <Pressable
            onPress={() => props.navigation.navigate("forgotPassword")}
          >
            <Text style={authStyle.sm_text}>Forgot password?</Text>
          </Pressable>
          <Button
            block
            title="Sign in"
            buttonStyle={[style.btn_success, { marginTop: 0 }]}
            titleStyle={style.btn_text}
            loading={isLoading}
            disabled={isLoading}
            disabledStyle={[
              style.btn_success_disabled,
              ,
              { marginTop: 0, opacity: 0.8 },
            ]}
            onPress={handleSubmit(onSubmit)}
            // onPress={() => props.navigation.navigate("requests")}
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
