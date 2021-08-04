import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Divider, Pressable } from "native-base";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

const DeclinedBids = (props) => {
  const source = [1, 2, 3, 4, 5];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: colors.ash_bg }}
    >
      <View style={style.container}>
        {source.map((data) => {
          return (
            <Pressable onPress={() => props.navigation.navigate("bidDetails")}>
              <View
                style={{
                  marginTop: 22,
                  padding: 18,
                  backgroundColor: colors.white,
                  borderRadius: 4,
                  borderWidth: 1,
                  borderColor: colors.ash,
                }}
              >
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text
                    style={[
                      style.text,
                      { color: colors.pure_ash, fontWeight: "normal" },
                    ]}
                  >
                    Pickup
                  </Text>
                  <Text
                    style={[
                      style.text,
                      { color: colors.red, marginLeft: "auto" },
                    ]}
                  >
                    Declined
                  </Text>
                </View>
                <Text
                  style={[style.text_16, { marginTop: 5, marginBottom: 14 }]}
                >
                  5 Isaac John str, Ikeja
                </Text>
                <Divider />
                <Text
                  style={[
                    style.text,
                    {
                      color: colors.pure_ash,
                      fontWeight: "normal",
                      marginTop: 9,
                    },
                  ]}
                >
                  Destination
                </Text>
                <Text style={[style.text_16, { marginTop: 5 }]}>
                  5 Isaac John str, Ikeja
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default DeclinedBids;
