import React from "react";

import { Text, Input, Select, CheckIcon } from "native-base";
import { Button } from "react-native-elements";
import { View, ScrollView } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";
import env from "../../../helpers/constants";

const Pickup = (props) => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
        style={style.container}
      >
        <Text style={style.form_label}>Select Package Type</Text>

        <Select
          //   selectedValue={language}
          minWidth={200}
          accessibilityLabel="Select Package Type"
          placeholder="please select"
          {...style.form_control}
          //   onValueChange={(itemValue) => setLanguage(itemValue)}
          _selectedItem={{
            bg: colors.lemon,
            _text: {
              color: colors.black,
              fontWeight: "bold",
            },
            endIcon: <CheckIcon size={4} />,
          }}
        >
          <Select.Item label="JavaScript" value="js" />
          <Select.Item label="TypeScript" value="ts" />
          <Select.Item label="C" value="c" />
          <Select.Item label="Python" value="py" />
          <Select.Item label="Java" value="java" />
        </Select>

        <Text style={style.form_label}>Pickup Address</Text>
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

        <Text style={style.form_label}>Sender's Name</Text>
        <Input
          {...style.form_control}
          _focus={colors.border_black}
          placeholder="Name of person sending package"
        />

        <Text style={style.form_label}>Sender's Phone Number</Text>
        <PhoneInput
          containerStyle={style.phone_container}
          textContainerStyle={style.phone_text_container}
          textInputStyle={[style.no_margin, style.no_padding]}
          //   ref={phoneInput}
          defaultCode="NG"
          layout="first"
          //   onChangeText={(text) => {
          //     setValue(text);
          //   }}
          //   onChangeFormattedText={(text) => {
          //     setFormattedValue(text);
          //   }}
        />

        <Button
          block
          title="Continue"
          buttonStyle={[style.btn_success, { marginTop: 40 }]}
          titleStyle={style.btn_text}
          onPress={() => props.toggle_pickup_show(false)}
        />
      </ScrollView>
    </>
  );
};

export default Pickup;
