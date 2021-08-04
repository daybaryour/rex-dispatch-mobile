import React from "react";

import { Text, Input, Divider } from "native-base";
import { Button } from "react-native-elements";
import { View, ScrollView } from "react-native";
import PhoneInput from "react-native-phone-number-input";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";

const NewVehicle = (props) => {
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
          <Input
            {...style.form_control}
            _focus={colors.border_black}
            placeholder="Please enter"
          />

          <Text style={style.form_label}>License Number (plate number)</Text>
          <Input
            {...style.form_control}
            _focus={colors.border_black}
            placeholder="Please enter"
          />

          <Text style={style.form_label}>Rider’s First Name</Text>
          <Input
            {...style.form_control}
            _focus={colors.border_black}
            placeholder="Rider’s first name"
          />

          <Text style={style.form_label}>Rider’s Last Name</Text>
          <Input
            {...style.form_control}
            _focus={colors.border_black}
            placeholder="Rider’s last name"
          />

          <Text style={style.form_label}>Rider's Phone Number</Text>
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
            title="Register"
            buttonStyle={[style.btn_success, { marginTop: 40 }]}
            titleStyle={style.btn_text}
            onPress={() => props.navigation.navigate("newVehicleSuccess")}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default NewVehicle;
