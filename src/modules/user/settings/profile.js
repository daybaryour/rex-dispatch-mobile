import React from "react";
import { View, Text, ScrollView } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Input, Select, CheckIcon } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button } from "react-native-elements";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

import env from "../../../helpers/constants";

//partials
import Header from "../../partials/header";

const Profile = (props) => {
  return (
    <View style={style.body}>
      <Header icon={"back"} title={"Profile"} navigation={props.navigation} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
        style={style.container}
      >
        <Text style={style.form_label}>First Name</Text>
        <Input
          {...style.form_control}
          _focus={colors.border_black}
          placeholder="Please enter"
        />

        <Text style={style.form_label}>Last Name</Text>
        <Input
          {...style.form_control}
          _focus={colors.border_black}
          placeholder="Please enter"
        />

        <Text style={style.form_label}>Email Address</Text>
        <Input
          {...style.form_control}
          _focus={colors.border_black}
          placeholder="Please enter"
        />

        <Text style={style.form_label}>Date of Birth</Text>
        <Input
          placeholder="Enter password"
          {...style.form_control}
          type={"text"}
          style={{ borderBottomWidth: 0 }}
          _focus={colors.border_black}
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
        <Text style={style.form_label}>Phone Number</Text>
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

        <Text style={style.form_label}>State</Text>

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

        <Text style={style.form_label}>Address</Text>
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

        <Text style={style.form_label}>Gender</Text>

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
          <Select.Item label="Male" value="male" />
          <Select.Item label="Female" value="female" />
        </Select>

        <Button
          block
          title="Save Changes"
          buttonStyle={[style.btn_success]}
          titleStyle={style.btn_text}
        />
      </ScrollView>
    </View>
  );
};

export default Profile;
