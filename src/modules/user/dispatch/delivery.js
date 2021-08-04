import React from "react";

import { Text, Input, TextArea } from "native-base";
import { Button } from "react-native-elements";
import { View, ScrollView } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";
import env from "../../../helpers/constants";

const Delivery = (props) => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
        style={style.container}
      >
        <Text style={style.form_label}>Delivery Address</Text>
        <View style={[style.form_control, { height: "auto" }]}>
          <GooglePlacesAutocomplete
            placeholder="Enter address"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: env.GOOGLE_API_KEY,
              language: "en",
              components: "country:ng",
            }}
          />
        </View>
        <Text style={style.form_label}>Notable Landmark</Text>
        <Input
          {...style.form_control}
          _focus={colors.border_black}
          placeholder="Please enter"
        />
        <Text style={style.form_label}>Recipient's Name</Text>
        <Input
          {...style.form_control}
          _focus={colors.border_black}
          placeholder="Name of person sending package"
        />
        <Text style={style.form_label}>Recipient's Phone Number</Text>

        <PhoneInput
          // countryPickerButtonStyle={style.form_control}
          containerStyle={[style.form_control, { borderWidth: 0.8 }]}
          textContainerStyle={{ backgroundColor: colors.white }}
          // ref={phoneInput}
          defaultCode="NG"
          layout="first"
          //   onChangeText={(text) => {
          //     setValue(text);
          //   }}
          //   onChangeFormattedText={(text) => {
          //     setFormattedValue(text);
          //   }}
          // withDarkTheme
          // withShadow
        />

        <Text style={style.form_label}>Additional Information</Text>

        {/* come back  make sure focus works */}
        <TextArea
          aria-label="t1"
          {...style.form_control}
          h={106}
          _focus={{ borderColor: colors.border_black }}
          numberOfLines={6}
          placeholder="Optional message for courier or recipient"
        />

        <Button
          block
          title="Continue"
          buttonStyle={[style.btn_success, { marginTop: 40 }]}
          titleStyle={style.btn_text}
          onPress={() => props.navigation.navigate("chooseProvider")}
        />
      </ScrollView>
    </>
  );
};

export default Delivery;
