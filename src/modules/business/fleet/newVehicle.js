import React, { useState } from "react";

import { Text, Input, Divider, useToast, FormControl } from "native-base";
import { Button } from "react-native-elements";
import { View, ScrollView } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { useForm, Controller } from "react-hook-form";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";

//redux
import { registerRider } from "../../../redux/business/fleet/fleetActions";
import { useDispatch } from "react-redux";

const NewVehicle = (props) => {
  const [isLoading, toggle_isLoading] = useState(false);

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

    dispatch(registerRider(data))
      .then((data) => {
        toggle_isLoading(false);
        console.log(data);
        toast.show({
          title: data.message
            ? data.message
            : "something went wrong, please check your internet connection and try again",
          status: "success",
          placement: "top",
        });
        console.log(data.data.phone);
        props.navigation.navigate("newVehicleSuccess", {
          phone: data.data.phone,
          name: data.data.firstname,
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
    <>
      <Header
        icon={"back"}
        title={"Register Vehicle"}
        navigation={props.navigation}
      />
      <View style={style.body}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={"handled"}
          style={style.container}
        >
          <View
            style={{
              marginTop: 27,
            }}
          >
            <Text
              style={(style.text_16, { color: colors.lemon, marginBottom: 14 })}
            >
              {"Vehicle and Rider's details"}
            </Text>
            <Divider />
          </View>
          <Text style={style.form_label}>Vehicle Type</Text>
          <MyInput
            name="vehicle_type"
            placeholder="Please enter"
            required={true}
          />

          <Text style={style.form_label}>License Number (plate number)</Text>
          <MyInput
            name="license_number"
            placeholder="Please enter"
            required={true}
          />

          <Text style={style.form_label}>Rider’s First Name</Text>
          <MyInput
            name="firstname"
            placeholder="Rider’s first name"
            required={true}
          />

          <Text style={style.form_label}>Rider’s Last Name</Text>
          <MyInput
            name="lastname"
            placeholder="Rider’s last name"
            required={true}
          />

          <Text style={style.form_label}>Rider's Phone Number</Text>
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

          <Button
            block
            title="Register"
            buttonStyle={[style.btn_success, { marginTop: 40 }]}
            titleStyle={style.btn_text}
            loading={isLoading}
            disabled={isLoading}
            disabledStyle={[
              style.btn_success_disabled,
              ,
              { marginTop: 40, opacity: 0.8 },
            ]}
            onPress={handleSubmit(onSubmit)}
            // onPress={() => props.navigation.navigate("newVehicleSuccess")}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default NewVehicle;
