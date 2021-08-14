import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Input, useToast, FormControl } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button } from "react-native-elements";
import { useForm, Controller } from "react-hook-form";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";

import { changePassword } from "../../../redux/general/settings/settingsActions";
import { useDispatch } from "react-redux";

const Password = (props) => {
  const [hide_password, toggle_hide_password] = useState(true);
  const [loading, toggle_loading] = useState(false);

  const dispatch = useDispatch();
  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const MyInput = ({ name, placeholder, required }) => {
    return (
      <>
        <Controller
          control={control}
          rules={{
            required: required,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormControl isInvalid={errors[name] ? true : false}>
              <Input
                type="password"
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
          <Text style={style.error_text}>Password is required.</Text>
        )}
      </>
    );
  };

  const onSubmit = (data) => {
    toggle_loading(true);
    if (data.newPassword == data.confirmPassword) {
      dispatch(changePassword(data, "customer"))
        .then((message) => {
          toggle_loading(false);

          toast.show({
            title: message
              ? message
              : "something went wrong, please check your internet connection and try again",
            status: "success",
            placement: "top",
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
          toggle_loading(false);
        });
    } else {
      toggle_loading(false);
      toast.show({
        title: "password confirmation doesn't match",
        status: "error",
        placement: "top",
      });
    }
  };

  return (
    <View style={style.body}>
      <Header
        icon={"back"}
        title={"Security Settings"}
        navigation={props.navigation}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
        style={style.container}
      >
        <Text style={style.form_label}>Password</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <FormControl isInvalid={errors.oldPassword ? true : false}>
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
          name={"oldPassword"}
          defaultValue=""
        />
        {errors.oldPassword && (
          <Text style={style.error_text}>Password is required.</Text>
        )}

        <Text style={style.form_label}>New Password</Text>

        <MyInput
          name="newPassword"
          placeholder="Enter new password"
          required={true}
        />

        <Text style={style.form_label}>Confirm New Password</Text>

        <MyInput
          name="confirmPassword"
          placeholder="Confirm new password"
          required={true}
        />

        <Button
          block
          title="Update Password"
          buttonStyle={[style.btn_success]}
          titleStyle={style.btn_text}
          loading={loading}
          disabled={loading}
          disabledStyle={[style.btn_success_disabled, , { opacity: 0.8 }]}
          onPress={handleSubmit(onSubmit)}
        />
      </ScrollView>
    </View>
  );
};

export default Password;
