import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Input, Select, CheckIcon, useToast, FormControl } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button } from "react-native-elements";
import { useForm, Controller } from "react-hook-form";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

import env from "../../../helpers/constants";

//partials
import Header from "../../partials/header";

//redux
import { useDispatch } from "react-redux";
import { verifyBusiness } from "../../../redux/business/verification/verificationAction";

const BusinessVerification = (props) => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const [loading, toggleLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const pickImage = async () => {
    // Pick a single file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      set_image(res.name);
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        set_image("");
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  const MyInput = ({ name, placeholder, required, disabled }) => {
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
                isDisabled={disabled ? disabled : false}
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
    toggleLoading(true);
    dispatch(verifyBusiness(data))
      .then((res) => {
        toggleLoading(false);
        toast.show({
          title: res
            ? res.toLowerCase()
            : "something went wrong, please check your internet connection and restart the app",
          status: "error",
          placement: "top",
        });
      })
      .catch((e) => {
        toggleLoading(false);
        toast.show({
          title: e
            ? e.toLowerCase()
            : "something went wrong, please check your internet connection and restart the app",
          status: "error",
          placement: "top",
        });
      });
  };

  return (
    <View style={style.body}>
      <Header
        icon={"back"}
        title={"Business Verification"}
        navigation={props.navigation}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
        style={style.container}
      >
        <Text
          style={{
            color: colors.text_black,
            marginTop: 20,
            marginBottom: 5,
            textAlign: "center",
            fontSize: 16,
          }}
        >
          Please attach a government issued ID{" "}
        </Text>

        <Text style={style.form_label}>Type</Text>

        <Controller
          control={control}
          rules={{
            required: false,
          }}
          render={({ field: { onChange } }) => (
            <FormControl isInvalid={errors["type"] ? true : false}>
              <Select
                // selectedValue={user.type}
                minWidth={200}
                accessibilityLabel="Select government issued id type"
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
                <Select.Item
                  label="Driver's License"
                  value="driver's license"
                />
                <Select.Item
                  label="National Identification Number(NIN)"
                  value="national identification number"
                />
                <Select.Item
                  label="International Passport"
                  value="international passport"
                />
              </Select>
            </FormControl>
          )}
          name={"type"}
          defaultValue=""
        />
        {errors["type"] && (
          <Text style={style.error_text}>Document type is required.</Text>
        )}

        <Text style={style.form_label}>Document Number</Text>
        <MyInput
          name="document_number"
          placeholder="please enter"
          required={true}
        />
        <Text style={style.form_label}>Attach License</Text>
        <Controller
          control={control}
          rules={{
            required: false,
          }}
          render={({ field: { onChange } }) => (
            <FormControl isInvalid={errors["document_image"] ? true : false}>
              <Input
                placeholder="Please Attach"
                {...style.form_control}
                _focus={colors.border_black}
                isDisabled={true}
                _disabled={{ opacity: 1, bg: colors.white }}
                value={image}
                InputRightElement={
                  <Button
                    block
                    title="Select"
                    buttonStyle={[
                      {
                        marginRight: 6,
                        backgroundColor: colors.navy_blue,
                        paddingHorizontal: 24,
                      },
                    ]}
                    titleStyle={style.btn_text}
                    onPress={() => pickImage()}
                  />
                }
              />
            </FormControl>
          )}
          name={"document_image"}
          defaultValue=""
        />
        {errors["document_image"] && (
          <Text style={style.error_text}>document image is required.</Text>
        )}

        <Text style={style.form_label}>Date Issued</Text>
        <MyInput
          name="date_issued"
          placeholder="please enter"
          required={true}
        />

        <Text style={style.form_label}>Expiry date</Text>
        <MyInput
          name="expiry_date"
          placeholder="please enter"
          required={true}
        />

        <Button
          block
          title="Submit"
          buttonStyle={[style.btn_success]}
          loading={loading}
          disabled={loading}
          disabledStyle={[style.btn_success_disabled, , { opacity: 0.8 }]}
          disabledTitleStyle={{ color: colors.white }}
          titleStyle={style.btn_text}
          onPress={handleSubmit(onSubmit)}
        />
      </ScrollView>
    </View>
  );
};

export default BusinessVerification;
