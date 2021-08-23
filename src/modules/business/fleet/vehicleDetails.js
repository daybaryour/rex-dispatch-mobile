import React from "react";
import { Divider } from "native-base";
import { View, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";

const VehicleDetails = (props) => {
  data = props.route.params.data;
  return (
    <View style={style.body}>
      <Header
        icon={"back"}
        title={"Vehicle Details"}
        navigation={props.navigation}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          backgroundColor: colors.ash_bg,
          paddingTop: 32,
        }}
      >
        <View style={style.container}>
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.ash_border,
              paddingVertical: 38,
              paddingHorizontal: 24,
              borderRadius: 10,
              backgroundColor: colors.white,
            }}
          >
            <View style={{ marginBottom: 13 }}>
              <Text style={[style.text, { color: colors.pure_ash }]}>
                Vehicle Type
              </Text>
              <Text style={[style.text_16, { marginVertical: 10 }]}>
                {data.vehicle_type}
              </Text>
              <Divider />
            </View>
            <View style={{ marginBottom: 13 }}>
              <Text style={[style.text, { color: colors.pure_ash }]}>
                License Number (Plate Number)
              </Text>
              <Text style={[style.text_16, { marginVertical: 10 }]}>
                {data.license_number.toUpperCase()}
              </Text>
              <Divider />
            </View>
            <View style={{ marginBottom: 13 }}>
              <Text style={[style.text, { color: colors.pure_ash }]}>
                Rider’s Name
              </Text>
              <Text style={[style.text_16, { marginVertical: 10 }]}>
                {data.firstname} {data.lastname}
              </Text>
              <Divider />
            </View>
            <View style={{ marginBottom: 13 }}>
              <Text style={[style.text, { color: colors.pure_ash }]}>
                Rider’s Phone Number
              </Text>
              <Text style={[style.text_16, { marginVertical: 10 }]}>
                {data.phone}
              </Text>
            </View>
          </View>

          <Button
            block
            title="Edit Vehicle"
            buttonStyle={[style.btn_success, { marginTop: 40 }]}
            titleStyle={style.btn_text}
            onPress={() => props.navigation.navigate("newVehicle")}
          />
          <Text
            style={[style.text_16, { color: colors.red, textAlign: "center" }]}
          >
            Delete Vehicle
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default VehicleDetails;
