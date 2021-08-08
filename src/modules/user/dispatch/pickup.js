import React, { useRef } from "react";

import { Text, Input, Select, CheckIcon, FormControl } from "native-base";
import { Button } from "react-native-elements";
import { View, ScrollView } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useForm, Controller } from "react-hook-form";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";
import env from "../../../helpers/constants";

const Pickup = (props) => {
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

  const onSubmit = (data) => {
    props.setPickup_data(data);

    props.toggle_pickup_show(false);
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
        style={style.container}
      >
        <Text style={style.form_label}>Select Package Type</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <FormControl isInvalid={errors["package_type"] ? true : false}>
              <Select
                //   selectedValue={language}
                minWidth={200}
                accessibilityLabel="Select Location"
                placeholder="Please select"
                {...style.form_control}
                onValueChange={(itemValue) => onChange(itemValue)}
                _selectedItem={{
                  bg: colors.lemon,
                  _text: {
                    color: colors.black,
                    fontWeight: "bold",
                  },
                  endIcon: <CheckIcon size={4} />,
                }}
              >
                {env.DISPATCH_TYPES.map((type) => {
                  return (
                    <Select.Item
                      label={`${type}`}
                      value={`${type}`}
                      key={`${type}`}
                    />
                  );
                })}
              </Select>
            </FormControl>
          )}
          name={"package_type"}
          defaultValue=""
        />
        {errors["package_type"] && (
          <Text style={style.error_text}>Package type is required.</Text>
        )}

        <Text style={style.form_label}>Pickup Address</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <View
              style={[
                errors["pickup_address"]
                  ? style.phone_container_error
                  : style.form_control,
                { height: "auto" },
              ]}
            >
              <GooglePlacesAutocomplete
                ref={ref}
                placeholder="Please enter pickup address"
                onPress={async (data, details = null) => {
                  // 'details' is provided when fetchDetails = true
                  //   text = await ref.current?.getAddressText();
                  //   console.log(text);
                  const text = `${data.structured_formatting.main_text}, ${data.structured_formatting.secondary_text}`;
                  onChange(text);
                }}
                query={{
                  key: env.GOOGLE_API_KEY,
                  language: "en",
                  components: "country:ng",
                }}
              />
            </View>
          )}
          name={"pickup_address"}
          defaultValue=""
        />
        {errors["pickup_address"] && (
          <Text style={style.error_text}>
            Pickup address is required, please enter a valid one.
          </Text>
        )}

        <Text style={style.form_label}>Notable Landmark</Text>
        <MyInput
          name="notable_landmark"
          placeholder="Please enter"
          required={true}
          error_name="Notable landmark"
        />

        <Text style={style.form_label}>Sender's Name</Text>
        <MyInput
          name="senders_name"
          placeholder="Name of person sending package"
          required={true}
          error_name="Sender's Name"
        />

        <Text style={style.form_label}>Sender's Phone Number</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <PhoneInput
              containerStyle={
                errors.senders_phone
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
          name={"senders_phone"}
          defaultValue=""
        />
        {errors.senders_phone && (
          <Text style={style.error_text}>Phone number is required.</Text>
        )}

        <Button
          block
          title="Continue"
          buttonStyle={[style.btn_success, { marginTop: 40 }]}
          titleStyle={style.btn_text}
          onPress={handleSubmit(onSubmit)}
        />
      </ScrollView>
    </>
  );
};

export default Pickup;
