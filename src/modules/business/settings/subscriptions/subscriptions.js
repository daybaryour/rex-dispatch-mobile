import React from "react";
import { Button } from "react-native-elements";
import { Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

//styles
import style from "../../../../assets/styles/general/style";
import colors from "../../../../helpers/color";

//partials
import Header from "../../../partials/header";

const Subscriptions = (props) => {
  return (
    <>
      <Header
        icon={"back"}
        title={"Subscriptions"}
        navigation={props.navigation}
      />
      <View style={style.body}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={"handled"}
          style={style.container}
        >
          <Text
            style={{
              color: colors.text_black,
              marginTop: 20,
              marginBottom: 30,
              textAlign: "center",
              fontSize: 14,
            }}
          >
            Subscribe to your preferred plan{" "}
          </Text>

          <View
            style={{
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
              title="Proceed"
              buttonStyle={[
                style.btn_success,
                { marginTop: 34, marginBottom: 0, paddingVertical: 13 },
              ]}
              titleStyle={style.btn_text}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Subscriptions;
