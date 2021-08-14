import React, { useRef, useState, useEffect } from "react";
import { FormControl, Image, Input, useToast } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import { View, ScrollView, Text, Platform } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { useForm, Controller } from "react-hook-form";

//style
import authStyle from "../../../assets/styles/general/authStyle";
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//redux
import { resetPassword } from "../../../redux/general/auth/authActions";
import { useDispatch } from "react-redux";

const ResetPassword = (props) => {
  const [isLoading, toggle_isLoading] = useState(false);

  const phoneInput = useRef() < PhoneInput > null;

  const dispatch = useDispatch();
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {}, []);

  const MyInput = ({ name, placeholder, required }) => {
    return (
      <>
        <Controller
          control={control}
          rules={{
            required: required,
          }}
          render={({ field: { onChange, value } }) => (
            <FormControl isInvalid={errors[name] ? true : false}>
              <Input
                {...style.form_control}
                _focus={colors.border_black}
                placeholder={placeholder}
                onChangeText={(val) => onChange(val)}
                value={value}
              />
            </FormControl>
          )}
          name={name}
          defaultValue=""
        />
        {errors[name] && (
          <Text style={style.error_text}>{placeholder} is required.</Text>
        )}
      </>
    );
  };

  const onSubmit = (data) => {
    toggle_isLoading(true);

    if (data.password != data.confirm_password) {
      toggle_isLoading(false);
      toast.show({
        title: "password confirmation doesn't match",
        status: "error",
        placement: "top",
      });
    } else {
      Reflect.deleteProperty(data, "confirm_password");
      data.phone = props.route.params.phone;
      console.log(data);
      dispatch(resetPassword(data, "business"))
        .then(async (message) => {
          toggle_isLoading(false);
          await toast.show({
            title: message
              ? message.toLowerCase()
              : "something went wrong, please check your internet connection and try again",
            status: "success",
            placement: "top",
          });
          props.navigation.navigate("auth", {
            screen: "login",
          });
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
          <Text style={style.heading}>Reset Password</Text>
          <Text style={style.heading_text}>
            Please input the otp sent to your phone and you new password below.{" "}
          </Text>
        </View>
        <View>
          <Text style={style.form_label}>One Time Password (OTP)</Text>
          <MyInput
            name="token"
            placeholder="Please enter otp"
            error_name="otp"
            required={true}
          />

          <Text style={style.form_label}>Create a password</Text>
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
                  type={"password"}
                  _focus={colors.border_black}
                  onChangeText={(val) => onChange(val)}
                  value={value}
                />
              </FormControl>
            )}
            name={"password"}
            defaultValue=""
          />
          {errors.password && (
            <Text style={style.error_text}>Password is required.</Text>
          )}

          <Text style={style.form_label}>Confirm password</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <FormControl isInvalid={errors.confirm_password ? true : false}>
                <Input
                  placeholder="Enter password"
                  {...style.form_control}
                  type={"password"}
                  _focus={colors.border_black}
                  onChangeText={(val) => onChange(val)}
                  value={value}
                />
              </FormControl>
            )}
            name={"confirm_password"}
            defaultValue=""
          />
          {errors.confirm_password && (
            <Text style={style.error_text}>
              Password confirmation is required.
            </Text>
          )}
          <Button
            block
            title="Continue"
            buttonStyle={[style.btn_success]}
            titleStyle={style.btn_text}
            onPress={handleSubmit(onSubmit)}
            loading={isLoading}
            disabled={isLoading}
            disabledStyle={[style.btn_success_disabled, , { opacity: 0.8 }]}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ResetPassword;
