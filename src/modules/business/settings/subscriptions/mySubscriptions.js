import React from "react";
import { Button } from "react-native-elements";
import { Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

//styles
import style from "../../../../assets/styles/general/style";
import colors from "../../../../helpers/color";

//partials
import Header from "../../../partials/header";

const MySubscriptions = (props) => {
  return (
    <>
      <Header
        icon={"back"}
        title={"Manage Subscription"}
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
              marginTop: 50,
              paddingVertical: 15,
              paddingHorizontal: 23,
              backgroundColor: colors.ash_bg,
              borderRadius: 5,
              borderLeftWidth: 1,
              borderColor: colors.ash,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={style.text}>Starter Plan</Text>
              <Text style={[style.text, { marginLeft: "auto" }]}>
                N20,000 <Text style={{ color: colors.text_ash }}>/ month</Text>{" "}
              </Text>
            </View>
            <Text
              style={[
                style.text,
                { marginTop: 15, marginBottom: 8, fontWeight: "normal" },
              ]}
            >
              <Icon
                style={{
                  color: colors.lemon,
                  fontSize: 14,
                }}
                name={"checkmark"}
              />
              {"  "}1 - 10 dispatch rides
            </Text>
            <Text style={[style.text, { fontWeight: "normal" }]}>
              <Icon
                style={{
                  color: colors.lemon,
                  fontSize: 14,
                }}
                name={"checkmark"}
              />
              {"  "}Max of 50 deliveries monthly
            </Text>
            <Button
              block
              title="Upgrade"
              buttonStyle={[
                style.btn_success,
                {
                  backgroundColor: colors.text_red,
                  marginTop: 34,
                  marginBottom: 14,
                  paddingVertical: 13,
                },
              ]}
              titleStyle={style.btn_text}
              onPress={() => props.navigation.navigate("subscriptions")}
            />
            <Text style={[style.text, { textAlign: "center" }]}>Cancel</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default MySubscriptions;
