import React, { useRef, useState } from "react";

import { Text, Input, Select, CheckIcon, TextArea } from "native-base";
import { Button } from "react-native-elements";
import {
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";
import { Grid, Row, Col } from "react-native-easy-grid";
import PhoneInput from "react-native-phone-number-input";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

//styles
import style from "../../../assets/styles/general/style";
import tabStyle from "../../../assets/styles/general/tabStyle";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";

const CreateDispatch = () => {
  const [pickup_show, toggle_pickup_show] = useState(false);
  const [delivery_details, toggle_delivery_details] = useState(false);

  //   hanDle;

  const phoneInput = useRef() < PhoneInput > null;

  //   const { pickup_show, delivery_details } = this.state;
  return (
    <View style={style.body}>
      <Header icon={"menu"} title={"Send a Package"} />

      <View style={style.container}>
        <View style={{ borderBottomColor: colors.ash, borderBottomWidth: 1 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "8%",
              marginBottom: "4%",
            }}
          >
            <Text style={(style.text_16, { color: colors.lemon })}>
              {pickup_show ? "Pickup Details" : "Delivery Details"}
            </Text>
            {pickup_show ? (
              <Image
                source={require("../../../assets/icons/minimize.png")}
                style={{
                  width: 12,
                  height: 2,
                  marginTop: "3%",
                  marginLeft: "auto",
                }}
              />
            ) : (
              <Text
                style={{
                  fontSize: 25,
                  color: "rgba(0, 0, 0, 0.54)",
                  marginLeft: "auto",
                  marginTop: "-2%",
                }}
              >
                +
              </Text>
            )}
          </View>
        </View>
        {pickup_show ? (
          <>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={style.form_label}>Delivery Address</Text>
              <View style={style.form_control}>
                <GooglePlacesAutocomplete
                  placeholder="Enter address"
                  onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                  }}
                  query={{
                    key: "AIzaSyCloVZwnqnIRMhWmz7i6dNxotP5YlwCRi0",
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

              <Text style={style.form_label}>Recipients Name</Text>
              <Input
                {...style.form_control}
                _focus={colors.border_black}
                placeholder="Name of person sending package"
              />

              <Text style={style.form_label}>Phone Number</Text>
              {/* <Item regular style={style.form_control}> */}
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

              <Button
                block
                title="Continue"
                buttonStyle={[style.btn_success, { marginTop: "10%" }]}
                titleStyle={style.btn_text}
              />
            </ScrollView>
          </>
        ) : (
          <>
            <ScrollView showsVerticalScrollIndicator={false}>
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
              <View style={style.form_control}>
                <GooglePlacesAutocomplete
                  placeholder="Enter address"
                  onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                  }}
                  query={{
                    key: "AIzaSyCloVZwnqnIRMhWmz7i6dNxotP5YlwCRi0",
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

              <Text style={style.form_label}>Senders Name</Text>
              <Input
                {...style.form_control}
                _focus={colors.border_black}
                placeholder="Name of person sending package"
              />

              <Text style={style.form_label}>Phone Number</Text>
              {/* <Item regular style={style.form_control}> */}
              <PhoneInput
                // countryPickerButtonStyle={style.form_control}
                containerStyle={[style.form_control, { borderWidth: 0.8 }]}
                textContainerStyle={{ backgroundColor: "#fff" }}
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

              <Text style={style.form_label}>Phone Number</Text>

              {/* come back  make sure focus works */}
              <TextArea
                aria-label="t1"
                {...style.form_control}
                h={106}
                _focus={colors.border_black}
                numberOfLines={6}
                placeholder="Optional message for courier or recipient"
              />

              <Button
                block
                title="Continue"
                buttonStyle={[style.btn_success, { marginTop: "10%" }]}
                titleStyle={style.btn_text}
              />
            </ScrollView>
          </>
        )}
        <View></View>
      </View>
    </View>
  );
};

export default CreateDispatch;
