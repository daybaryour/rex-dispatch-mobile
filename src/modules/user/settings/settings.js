import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Divider } from "native-base";
import { Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import Spinner from "react-native-spinkit";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import Footer from "../../partials/footer/footer";
import color from "../../../helpers/color";

//redux
import { logout } from "../../../redux/general/auth/authActions";
import { getUserDetails } from "../../../redux/general/settings/settingsActions";
import { useDispatch, useSelector } from "react-redux";
import store from "../../../redux/store";

import ShimmerPlaceholder from "react-native-shimmer-placeholder";

const Settings = (props) => {
  const [pageLoading, setPageLoading] = useState(true);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(getUserDetails("customer")).then(() => {
      setPageLoading(false);
    });
    setUser(store.getState().settings.user);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    // console.log("got");
  };

  return (
    <>
      <View style={style.body}>
        <Header icon={"menu"} title={"Settings"} />

        {pageLoading || !user ? (
          <View
            style={{
              // display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Spinner
                isVisible={true}
                size={60}
                type="ThreeBounce"
                color={colors.navy_blue}
              />
            </View>
          </View>
        ) : (
          <>
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

                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Avatar
                      size="xlarge"
                      title={`${user.firstname[0]}.${user.lastname[0]}`}
                      //   source={{
                      //     uri: user.image ? user.image : null,
                      //   }}
                      rounded
                      containerStyle={{ backgroundColor: colors.navy_blue }}

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
                        {
                          marginTop: "3%",
                          marginBottom: "5%",
                          fontWeight: "400",
                        },
                      ]}
                    >
                      {user.firstname} {user.lastname}
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={style.container}>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate("profile", { user: user })
                    }
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
                          Profile details
                        </Text>

                        <Icon
                          style={{
                            fontSize: 14,
                            marginTop: 4,
                            marginLeft: "auto",
                          }}
                          name={"chevron-right"}
                        />
                      </View>
                      <Divider />
                    </View>
                  </TouchableOpacity>
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
                        <Text style={[style.text_16_normal]}>My Cards</Text>

                        <Icon
                          style={{
                            fontSize: 14,
                            marginTop: 4,
                            marginLeft: "auto",
                          }}
                          name={"chevron-right"}
                        />
                      </View>
                      <Divider />
                    </View>
                  </TouchableOpacity>
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

                        <Icon
                          style={{
                            fontSize: 14,
                            marginTop: 4,
                            marginLeft: "auto",
                          }}
                          name={"chevron-right"}
                        />
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

                        <Icon
                          style={{
                            fontSize: 14,
                            marginTop: 4,
                            marginLeft: "auto",
                          }}
                          name={"chevron-right"}
                        />
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
                        style={[
                          style.text_16_normal,
                          { color: color.text_red },
                        ]}
                        onPress={() => handleLogout()}
                      >
                        Log out
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </>
        )}
      </View>

      <Footer location={"settings"} navigation={props.navigation} />
    </>
  );
};

export default Settings;
