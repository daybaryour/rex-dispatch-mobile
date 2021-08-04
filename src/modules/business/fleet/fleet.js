import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button } from "react-native-elements";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import Footer from "../../partials/footer/businessFooter";

const Fleet = (props) => {
  const source = [1, 2, 3, 4, 5];

  return (
    <View style={style.body}>
      <Header title={"Fleet"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.ash_bg, paddingTop: 22 }}
      >
        <View style={style.container}>
          {source.map((data) => {
            return (
              <TouchableOpacity
                onPress={() => props.navigation.navigate("vehicleDetails")}
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
                          style.text_16,
                          {
                            color: colors.text_grey,
                            marginBottom: 11,
                          },
                        ]}
                      >
                        XYZ MRN 123
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

          <Button
            block
            title="Add Vehicle"
            buttonStyle={[style.btn_success, { marginTop: 40 }]}
            titleStyle={style.btn_text}
            onPress={() => props.navigation.navigate("newVehicle")}
          />
        </View>
      </ScrollView>
      <Footer location={"fleet"} navigation={props.navigation} />
    </View>
  );
};

export default Fleet;
