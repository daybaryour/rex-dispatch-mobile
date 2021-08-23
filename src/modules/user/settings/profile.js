import React, { useRef, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Input, Select, CheckIcon, useToast, FormControl } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button } from "react-native-elements";
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

import env from "../../../helpers/constants";

//partials
import Header from "../../partials/header";

//redux
import { useDispatch } from "react-redux";
import { editUserProfile } from "../../../redux/general/settings/settingsActions";

const Profile = (props) => {
  const user = props.route.params.user;
  const [address, setAddress] = useState(user.address);
  const [isLoading, toggle_isLoading] = useState(false);
  const [show_date, setShow_date] = useState(true);
  const [date_of_birth, setDate_of_birth] = useState(new Date());
  const ref = useRef();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const toast = useToast();

  const MyInput = ({ name, placeholder, required, defaultValue, disabled }) => {
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
                isDisabled={disabled ? disabled : false}
              />
            </FormControl>
          )}
          name={name}
          defaultValue={defaultValue}
        />
        {errors[name] && (
          <Text style={style.error_text}>{placeholder} is required.</Text>
        )}
      </>
    );
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    // setShow(Platform.OS === "ios");
    setDate_of_birth(currentDate);
  };

  const onSubmit = (data) => {
    console.log(data);
    toggle_isLoading(true);
    // data.phone = data.phone.substring(1);
    // console.log(data);
    dispatch(editUserProfile(data, "customer"))
      .then((data) => {
        toggle_isLoading(false);

        toast.show({
          title: data.message,
          status: "success",
          placement: "top",
        });

        props.route.params.setUser(data.data);
      })
      .catch((e) => {
        console.log(e);
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
    <View style={style.body}>
      <Header icon={"back"} title={"Profile"} navigation={props.navigation} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
        style={style.container}
      >
        <Text style={style.form_label}>First Name</Text>
        <MyInput
          name="firstname"
          placeholder="First Name"
          required={true}
          defaultValue={user.firstname}
        />

        <Text style={style.form_label} required={true}>
          Last Name
        </Text>
        <MyInput
          name="lastname"
          placeholder="Last Name"
          required={true}
          defaultValue={user.lastname}
        />

        <Text style={style.form_label}>Email Address</Text>
        <MyInput
          name="email"
          placeholder="Email"
          required={true}
          defaultValue={user.email}
          disabled
        />

        {/* <Text style={style.form_label}>Date of Birth</Text> */}

        {/* <Controller
          control={control}
          rules={{
            required: false,
          }}
          render={({ field: { onChange, value } }) => (
            <FormControl isInvalid={errors.date_of_birth ? true : false}>
              <Input
                placeholder="Please select date of birth"
                {...style.form_control}
                type={"text"}
                _focus={colors.border_black}
                onChangeText={(val) => onChange(val)}
                value={date_of_birth}
                // isDisabled

                InputRightElement={
                  <Icon
                    style={{ marginHorizontal: 15 }}
                    name={"calendar"}
                    onPress={() => {
                      // toggle_hide_password(!hide_password);
                    }}
                  />
                }
              />
            </FormControl>
          )}
          name={"date_of_birth"}
          defaultValue=""
        />
        {errors.date_of_birth && (
          <Text style={style.error_text}>Date of birth is required.</Text>
        )} */}
        {/* 
        <DateTimePicker
          testID="dateTimePicker"
          value={date_of_birth}
          mode={"date"}
          display="default"
          onChange={onDateChange}
        /> */}

        <Text style={style.form_label}>Phone Number</Text>
        <MyInput
          name="phone"
          placeholder="Phone"
          required={true}
          defaultValue={user.phone}
          disabled
        />

        <Text style={style.form_label}>State</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <FormControl isInvalid={errors["state"] ? true : false}>
              <Select
                selectedValue={user.state}
                minWidth={200}
                accessibilityLabel="Select Location"
                placeholder="Please select"
                {...style.select_form_control}
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
                {env.NIGERIAN_STATES.map((type) => {
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
          name={"state"}
          defaultValue={user.state}
        />
        {errors["state"] && (
          <Text style={style.error_text}>State is required.</Text>
        )}
        <Text style={style.form_label}>Address</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <View
              style={[
                errors["address"]
                  ? style.phone_container_error
                  : style.form_control,
                { height: "auto" },
              ]}
            >
              <GooglePlacesAutocomplete
                ref={ref}
                placeholder={user.address}
                onPress={(data) => {
                  // 'details' is provided when fetchDetails = true
                  //   text = await ref.current?.getAddressText();
                  //   console.log(text);
                  const text = `${data.structured_formatting.main_text}, ${data.structured_formatting.secondary_text}`;
                  setAddress(text);
                  onChange(text);
                }}
                styles={{ textInput: { color: colors.text_black } }}
                textInputProps={{
                  onChangeText: (text) => {
                    setAddress(text);
                  },
                  //   value: address,
                }}
                query={{
                  key: env.GOOGLE_API_KEY,
                  language: "en",
                  components: "country:ng",
                }}
              />
            </View>
          )}
          name={"address"}
          defaultValue={user.address}
        />
        {errors["address"] && (
          <Text style={style.error_text}>
            Address is required, please enter a valid one.
          </Text>
        )}

        <Text style={style.form_label}>Gender</Text>

        <Controller
          control={control}
          rules={{
            required: false,
          }}
          render={({ field: { onChange } }) => (
            <FormControl isInvalid={errors["gender"] ? true : false}>
              <Select
                selectedValue={user.gender}
                minWidth={200}
                accessibilityLabel="Select gender"
                placeholder="Please select"
                {...style.select_form_control}
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
                <Select.Item label="Male" value="male" />
                <Select.Item label="Female" value="female" />
              </Select>
            </FormControl>
          )}
          name={"gender"}
          defaultValue={user.gender}
        />
        {errors["gender"] && (
          <Text style={style.error_text}>gender is required.</Text>
        )}

        <Button
          block
          title="Save Changes"
          buttonStyle={[style.btn_success]}
          titleStyle={style.btn_text}
          loading={isLoading}
          disabled={isLoading}
          disabledStyle={[style.btn_success_disabled, , { opacity: 0.8 }]}
          onPress={handleSubmit(onSubmit)}
        />
      </ScrollView>
    </View>
  );
};

export default Profile;
