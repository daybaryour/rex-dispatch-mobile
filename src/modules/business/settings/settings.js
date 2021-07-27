import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { Divider } from "native-base";
import { Avatar } from "react-native-elements";

import Icon from "react-native-vector-icons/FontAwesome5";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import Footer from "../../partials/footer/businessFooter";
import color from "../../../helpers/color";

const Settings = (props) => {
  return (
    <>
      <View style={style.body}>
        <Header icon={"menu"} title={"Settings"} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: colors.ash_bg,
              paddingVertical: "5%",
              marginBottom: "10%",
            }}
          >
            <View style={style.container}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={[style.text_16]}>Profile</Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("profile")}
                  style={{
                    marginLeft: "auto",
                  }}
                >
                  <Icon
                    style={{
                      fontSize: 14,
                    }}
                    name={"edit"}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Avatar
                  size="xlarge"
                  source={{
                    uri: "https://wallpaperaccess.com/full/317501.jpg",
                  }}
                  rounded
                  //   title="BP"
                  //   style={{
                  //     width: 120,
                  //     height: 120,
                  //   }}
                >
                  {/* <Avatar.Accessory
                icon={{
                  // style={{
                  //   fontSize: 30,
                  // }}
                  name: "camera",
                }}
              /> */}
                </Avatar>
                <Text
                  style={[
                    style.text_16,
                    { marginTop: "3%", marginBottom: "5%", fontWeight: "400" },
                  ]}
                >
                  Princess Biggie
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={style.container}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("profile")}
              >
                <View style={{ marginBottom: "5%" }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "4%",
                    }}
                  >
                    <Text style={[style.text_16_normal]}>Profile details</Text>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("profile")}
                      style={{
                        marginLeft: "auto",
                      }}
                    >
                      <Icon
                        style={{
                          fontSize: 14,
                          marginTop: "20%",
                        }}
                        name={"chevron-right"}
                      />
                    </TouchableOpacity>
                  </View>
                  <Divider />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("profile")}
              >
                <View style={{ marginBottom: "5%" }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "4%",
                    }}
                  >
                    <Text style={[style.text_16_normal]}>
                      Manage Subscription
                    </Text>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("profile")}
                      style={{
                        marginLeft: "auto",
                      }}
                    >
                      <Icon
                        style={{
                          fontSize: 14,
                          marginTop: "20%",
                        }}
                        name={"chevron-right"}
                      />
                    </TouchableOpacity>
                  </View>
                  <Divider />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("password")}
              ></TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("password")}
              >
                <View style={{ marginBottom: "5%" }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "4%",
                    }}
                  >
                    <Text style={[style.text_16_normal]}>Security</Text>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("password")}
                      style={{
                        marginLeft: "auto",
                      }}
                    >
                      <Icon
                        style={{
                          fontSize: 14,
                          marginTop: "20%",
                        }}
                        name={"chevron-right"}
                      />
                    </TouchableOpacity>
                  </View>
                  <Divider />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => props.navigation.navigate("support")}
              >
                <View
                  style={{ marginBottom: "5%" }}
                  onPress={() => alert("testing")}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "4%",
                    }}
                  >
                    <Text style={[style.text_16_normal]}>Support</Text>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("support")}
                      style={{
                        marginLeft: "auto",
                      }}
                    >
                      <Icon
                        style={{
                          fontSize: 14,
                          marginTop: "20%",
                        }}
                        name={"chevron-right"}
                      />
                    </TouchableOpacity>
                  </View>
                  <Divider />
                </View>
              </TouchableOpacity>

              <View style={{ marginBottom: "5%" }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "4%",
                  }}
                >
                  <Text
                    style={[style.text_16_normal, { color: color.text_red }]}
                  >
                    Log out
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <Footer location={"settings"} navigation={props.navigation} />
    </>
  );
};

export default Settings;
