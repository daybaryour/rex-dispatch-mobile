import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

import Icon from "react-native-vector-icons/FontAwesome5";

//partials
import Header from "../../partials/header";
import Footer from "../../partials/footer/riderFooter";

const History = (props) => {
  const source = [1, 2, 3, 4, 5];

  return (
    <View style={style.body}>
      <Header title={"Dispatch History"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.ash_bg, paddingTop: 22 }}
      >
        <View style={style.container}>
          {source.map((data) => {
            return (
              <TouchableOpacity
                onPress={() => props.navigation.navigate("singleHistory")}
              >
                <View
                  style={{
                    backgroundColor: colors.white,

                    paddingVertical: 18,
                    paddingHorizontal: 14,
                    borderRadius: 10,
                    marginBottom: 22,
                    borderWidth: 1,
                    borderColor: colors.ash_border,
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <View>
                      <Text style={[style.text, { marginVertical: 6 }]}>
                        Daniel Adebayor
                      </Text>
                      <Text
                        style={[
                          style.text_12,
                          {
                            color: colors.text_grey,
                            marginBottom: 11,
                          },
                        ]}
                      >
                        09/06/2021, 09:30pm
                      </Text>
                      <Text
                        style={[
                          style.text_12,
                          { color: colors.lemon, marginBottom: 5 },
                        ]}
                      >
                        COMPLETED
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
                          backgroundColor: colors.indigo_light,
                          borderRadius: 50,
                          height: 17,
                          paddingVertical: 2,
                          paddingHorizontal: 5,
                        }}
                      >
                        <Icon
                          style={{
                            color: colors.indigo,
                            fontSize: 12,
                            textAlign: "center",
                          }}
                          name={"chevron-right"}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <Footer location={"history"} navigation={props.navigation} />
    </View>
  );
};

export default History;
