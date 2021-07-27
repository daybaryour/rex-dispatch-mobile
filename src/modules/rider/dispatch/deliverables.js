import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import Footer from "../../partials/footer/riderFooter";
import { Divider, Pressable } from "native-base";

const Deliverables = (props) => {
  const source = [1, 2, 3, 4, 5];

  return (
    <View style={style.body}>
      <Header title={"Deliverables"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.ash_bg }}
      >
        <View style={style.container}>
          {source.map((data) => {
            return (
              <Pressable
                onPress={() => props.navigation.navigate("singleDeliverable")}
              >
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
                        { color: colors.yellow, marginLeft: "auto" },
                      ]}
                    >
                      In Transit
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
      <Footer location={"dispatch"} navigation={props.navigation} />
    </View>
  );
};

export default Deliverables;
