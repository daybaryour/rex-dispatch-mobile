import { Divider } from "native-base";
import React from "react";
import { View, Text, ScrollView } from "react-native";

//styles
import style from "../../../assets/styles/general/style";
import tabStyle from "../../../assets/styles/general/tabStyle";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";

const SingleHistory = (props) => {
  return (
    <View style={style.body}>
      <Header
        icon={"back"}
        title={"Dispatch History"}
        navigation={props.navigation}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.ash_bg, paddingTop: "5%" }}
      >
        <View style={style.container}>
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.ash_border,
              padding: "4%",
              borderRadius: 10,
              backgroundColor: colors.white,
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={[style.text_16]}>#03345</Text>
              <Text
                style={[
                  style.text_12,
                  { color: colors.lemon, marginLeft: "auto" },
                ]}
              >
                COMPLETED
              </Text>
            </View>

            <View>
              {/* pickup  */}
              <Text
                style={[
                  style.text,
                  {
                    color: colors.lemon,
                    marginVertical: "7%",
                  },
                ]}
              >
                Pickup Details
              </Text>

              <View style={{ marginBottom: "4%" }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Package Type
                </Text>
                <Text style={[style.text_16, { marginVertical: "3%" }]}>
                  Documents & Files
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: "4%" }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Pickup Address
                </Text>
                <Text style={[style.text_16, { marginVertical: "3%" }]}>
                  5 Isaac John str, Ikeja
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: "4%" }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Nearest Landmark
                </Text>
                <Text style={[style.text_16, { marginVertical: "3%" }]}>
                  5 Isaac John str, Ikeja
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: "4%" }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Sender’s Name
                </Text>
                <Text style={[style.text_16, { marginVertical: "3%" }]}>
                  5 Isaac John str, Ikeja
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: "4%" }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Phone Number
                </Text>
                <Text style={[style.text_16, { marginVertical: "3%" }]}>
                  5 Isaac John str, Ikeja
                </Text>
                <Divider />
              </View>

              {/* delivery  */}
              <Text
                style={[
                  style.text,
                  {
                    color: colors.lemon,
                    marginVertical: "7%",
                  },
                ]}
              >
                Delivery Details
              </Text>
              <View style={{ marginBottom: "4%" }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Delivery Address
                </Text>
                <Text style={[style.text_16, { marginVertical: "3%" }]}>
                  5 Isaac John str, Ikeja
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: "4%" }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Nearest Landmark
                </Text>
                <Text style={[style.text_16, { marginVertical: "3%" }]}>
                  5 Isaac John str, Ikeja
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: "4%" }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Receiver’s Name
                </Text>
                <Text style={[style.text_16, { marginVertical: "3%" }]}>
                  5 Isaac John str, Ikeja
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: "4%" }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Phone Number
                </Text>
                <Text style={[style.text_16, { marginVertical: "3%" }]}>
                  5 Isaac John str, Ikeja
                </Text>
                <Divider />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SingleHistory;
