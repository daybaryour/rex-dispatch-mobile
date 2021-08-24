import React, { useRef, useState } from "react";
import { FormControl, Image, Input, useToast } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import { View, ScrollView, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { CommonActions } from "@react-navigation/native";

// /style
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//redux
import { useDispatch } from "react-redux";
import { setPassword } from "../../../redux/general/auth/authActions";

const SetPassword = (props) => {
  const [hide_password, toggle_hide_password] = useState(true);
  const [loading, toggle_loading] = useState(false);

  const dispatch = useDispatch();
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    toggle_loading(true);

    if (data.password != data.confirm_password) {
      toggle_loading(false);
      toast.show({
        title: "password confirmation doesn't match",
        status: "error",
        placement: "top",
      });
    } else {
      data.phone = props.route.params.phone;
      dispatch(setPassword(data))
        .then((message) => {
          toggle_loading(false);
          props.navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: "authSuccess",
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
          toggle_loading(false);
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
        </View>
        <View>
          <FormControl>
            <Text style={style.form_label}>Set Password</Text>
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
              <Text style={style.error_text}>
                Password confirmation is required.
              </Text>
            )}

            <Text style={style.form_label}>Confirm Password</Text>

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <FormControl isInvalid={errors.confirm_password ? true : false}>
                  <Input
                    {...style.form_control}
                    type="password"
                    _focus={colors.border_black}
                    placeholder={"Please enter"}
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
              loading={loading}
              disabled={loading}
              disabledStyle={[style.btn_success_disabled, , { opacity: 0.8 }]}
            />
          </FormControl>
        </View>
      </ScrollView>
    </View>
  );
};

export default SetPassword;
