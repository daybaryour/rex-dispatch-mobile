import React, { useRef, useState } from "react";

import { Text, Input, TextArea, FormControl, useToast } from "native-base";
import { Button } from "react-native-elements";
import { View, ScrollView } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useForm, Controller } from "react-hook-form";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";
import env from "../../../helpers/constants";

//redux
import { useDispatch } from "react-redux";
import { newDispatchRequest } from "../../../redux/user/dispatch/dispatchActions";

const Delivery = (props) => {
  const [loading, toggle_loading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const ref = useRef();

  const MyInput = ({ name, placeholder, required, error_name }) => {
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
          <Text style={style.error_text}>{error_name} is required.</Text>
        )}
      </>
    );
  };

  const dispatch = useDispatch();
  const toast = useToast();

  const onSubmit = async (delivery_data) => {
    toggle_loading(true);

    if (props.pickup_data && delivery_data) {
      let data = Object.assign(props.pickup_data, delivery_data);

      dispatch(newDispatchRequest(data))
        .then((resp) => {
          toggle_loading(false);
          props.toggle_pickup_show(true);
          props.navigation.navigate("dispatch", {
            screen: "chooseProvider",
            params: { parcel_details: resp },
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
    }
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
        style={style.container}
      >
        <Text style={style.form_label}>Delivery Address</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <View
              style={[
                errors["delivery_address"]
                  ? style.phone_container_error
                  : style.form_control,
                { height: "auto" },
              ]}
            >
              <GooglePlacesAutocomplete
                ref={ref}
                placeholder="Please enter delivery address"
                fetchDetails={true}
                onPress={(data, details = null) => {
                  // 'details' is provided when fetchDetails = true
                  const text = `${data.structured_formatting.main_text}, ${data.structured_formatting.secondary_text}`;
                  onChange(text);
                }}
                styles={{ textInput: { color: colors.text_black } }}
                query={{
                  key: env.GOOGLE_API_KEY,
                  language: "en",
                  components: "country:ng",
                }}
              />
            </View>
          )}
          name={"delivery_address"}
          defaultValue=""
        />
        {errors["delivery_address"] && (
          <Text style={style.error_text}>
            Delivery address is required, please enter a valid one.
          </Text>
        )}
        <Text style={style.form_label}>Nearest Landmark</Text>
        <MyInput
          name="nearest_landmark"
          placeholder="Please enter"
          required={true}
          error_name="Nearest landmark"
        />
        <Text style={style.form_label}>Recipient's Name</Text>
        <MyInput
          name="recipient_name"
          placeholder="Name of person sending package"
          required={true}
          error_name="Recipient's Name"
        />
        <Text style={style.form_label}>Recipient's Phone Number</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <PhoneInput
              containerStyle={
                errors.recipient_phone
                  ? style.phone_container_error
                  : style.phone_container
              }
              textContainerStyle={style.phone_text_container}
              textInputStyle={[style.no_margin, style.no_padding]}
              //   ref={phoneInput}
              defaultCode="NG"
              layout="first"
              onChangeFormattedText={(text) => {
                onChange(text);
              }}
            />
          )}
          name={"recipient_phone"}
          defaultValue=""
        />
        {errors.recipient_phone && (
          <Text style={style.error_text}>Phone number is required.</Text>
        )}

        <Text style={style.form_label}>Additional Information</Text>

        {/* come back  make sure focus works */}
        <Controller
          control={control}
          render={({ field: { onChange } }) => (
            <FormControl
              isInvalid={errors["additional_information"] ? true : false}
            >
              <TextArea
                aria-label="t1"
                {...style.form_control}
                h={106}
                _focus={{ borderColor: colors.border_black }}
                numberOfLines={6}
                placeholder="Optional message for courier or recipient"
                onChangeText={(val) => onChange(val)}
              />
            </FormControl>
          )}
          name={"additional_information"}
          defaultValue=""
        />

        <Button
          block
          title="Continue"
          buttonStyle={[style.btn_success, { marginTop: 40, marginBottom: 20 }]}
          titleStyle={style.btn_text}
          loading={loading}
          disabled={loading}
          disabledStyle={[
            style.btn_success,
            { marginTop: 40, opacity: 0.8, marginBottom: 20 },
          ]}
          onPress={handleSubmit(onSubmit)}
        />

        <Text
          style={{ color: colors.lemon, textAlign: "center", marginBottom: 50 }}
          onPress={() => props.toggle_pickup_show(true)}
        >
          Back
        </Text>
      </ScrollView>
    </>
  );
};

export default Delivery;
