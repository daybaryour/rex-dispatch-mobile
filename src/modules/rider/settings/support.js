import React from "react";
import { View, Text, ScrollView, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";

const Support = (props) => {
  return (
    <View style={style.body}>
      <Header icon={"back"} title={"Support"} navigation={props.navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
        style={{ backgroundColor: colors.ash_bg }}
      >
        <View style={style.container}>
          <Text
            style={[
              style.text,
              {
                marginVertical: 30,
                textAlign: "center",
                fontWeight: "normal",
              },
            ]}
          >
            If you have any issues within our platform you’d like us to solve,
            contact us today.
          </Text>
          <View
            style={{
              backgroundColor: colors.white,

              padding: 18,
              borderRadius: 10,

              marginBottom: 17,
              borderWidth: 1,
              borderColor: colors.ash_border,
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View>
                <Text
                  style={[
                    style.text_12,
                    {
                      color: colors.text_grey,
                      marginBottom: 10,
                    },
                  ]}
                >
                  Reach us on Whatsapp
                </Text>
                <Text
                  style={[
                    style.text,
                    {
                      fontWeight: Platform.OS === "ios" ? "700" : "bold",
                    },
                  ]}
                >
                  +234 706 2583 950
                </Text>
              </View>

              <View
                style={{
                  marginLeft: "auto",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: colors.light_lemon,
                    borderRadius: 8,
                    marginLeft: "auto",
                    padding: 8,
                  }}
                >
                  <Icon
                    style={{
                      color: colors.lemon,
                      fontSize: 16,
                      textAlign: "center",
                    }}
                    name={"logo-whatsapp"}
                  />
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: colors.white,

              padding: 18,
              borderRadius: 10,

              marginBottom: 17,
              borderWidth: 1,
              borderColor: colors.ash_border,
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View>
                <Text
                  style={[
                    style.text_12,
                    {
                      color: colors.text_grey,
                      marginBottom: 10,
                    },
                  ]}
                >
                  Send us an email
                </Text>
                <Text
                  style={[
                    style.text,
                    {
                      fontWeight: Platform.OS === "ios" ? "700" : "bold",
                    },
                  ]}
                >
                  hello@rexlogistics.com
                </Text>
              </View>

              <View
                style={{
                  marginLeft: "auto",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: colors.icon_blue_light,
                    borderRadius: 8,
                    marginLeft: "auto",
                    padding: 8,
                  }}
                >
                  <Icon
                    style={{
                      color: colors.icon_blue,
                      fontSize: 16,
                      textAlign: "center",
                    }}
                    name={"mail"}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Support;
