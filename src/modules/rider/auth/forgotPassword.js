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
import { forgotPassword } from "../../../redux/general/auth/authActions";
import { useDispatch, useSelector } from "react-redux";

const ForgotPassword = (props) => {
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

  const onSubmit = (data) => {
    toggle_isLoading(true);

    dispatch(forgotPassword(data, "customer"))
      .then(() => {
        toggle_isLoading(false);
        props.navigation.navigate("auth", {
          screen: "resetPassword",
          params: { phone: data.phone },
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
          <Text style={style.heading}>Forgot Password</Text>
          <Text style={style.heading_text}>
            Please input your phone number below.{" "}
          </Text>
        </View>
        <View>
          <View></View>

          <Text style={style.form_label}>Phone Number</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
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
                getNumberAfterPossiblyEliminatingZero={(num) =>
                  console.log(num, "97")
                }
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

          <Button
            block
            title="Continue"
            buttonStyle={[style.btn_success, { marginBottom: 20 }]}
            titleStyle={style.btn_text}
            onPress={handleSubmit(onSubmit)}
            loading={isLoading}
            disabled={isLoading}
            disabledStyle={[
              style.btn_success,
              { marginBottom: 20, opacity: 0.8 },
            ]}
          />
          <Text
            style={{
              color: colors.lemon,
              textAlign: "center",
              marginBottom: 50,
            }}
            onPress={() =>
              props.navigation.navigate("auth", {
                screen: "login",
              })
            }
          >
            Back to login
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ForgotPassword;
