import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Divider, useToast } from "native-base";
import { Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import Spinner from "react-native-spinkit";
import DocumentPicker from "react-native-document-picker";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import Footer from "../../partials/footer/footer";
import color from "../../../helpers/color";

//redux
import { logout } from "../../../redux/general/auth/authActions";
import {
  getUserDetails,
  changeAvatar,
} from "../../../redux/general/settings/settingsActions";
import { useDispatch, useSelector } from "react-redux";
import store from "../../../redux/store";

import ShimmerPlaceholder from "react-native-shimmer-placeholder";

const Settings = (props) => {
  const [pageLoading, setPageLoading] = useState(true);
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(async () => {
    dispatch(getUserDetails("customer"))
      .then((data) => {
        setUser(store.getState().settings.user);
        setPageLoading(false);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  const pickImage = async () => {
    // Pick a single file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      let data = new FormData();
      // res.uri,
      // res.type, // mime type
      // res.name,
      // res.size
      let image = {
        name: res.name,
        type: res.type,
        size: res.size,
        uri: res.uri,
      };
      data.append("avatar", image);
      console.log(data._parts, "71");

      dispatch(changeAvatar(data, "customer"))
        .then((data) => {
          // toggle_isLoading(false);

          toast.show({
            title: data.message,
            status: "success",
            placement: "top",
          });

          setUser(data.data);
        })
        .catch((e) => {
          console.log(e);
          toast.show({
            title: e
              ? e.toLowerCase()
              : "something went wrong, please check your internet connection and try again",
            status: "error",
            placement: "top",
          });
          // toggle_isLoading(false);
        });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getUserDetails("customer"))
      .then((data) => {
        setUser(data);
        setRefreshing(false);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      props.navigation.navigate("auth", {
        screen: "login",
      });
    });

    // console.log("got");
  };

  return (
    <>
      <View style={style.body}>
        <Header icon={"menu"} title={"Settings"} />

        {pageLoading || user == {} || !user ? (
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
            <ScrollView
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            >
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
                      onPress={() => pickImage()}
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
                      containerStyle={{ backgroundColor: colors.navy_blue }}
                      title={`${user && user.firstname && user.firstname[0]}.${
                        user && user.lastname && user.lastname[0]
                      }`}
                      source={{
                        uri: user.image ? user.image : null,
                      }}
                      rounded

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
                      props.navigation.navigate("profile", {
                        user: user,
                        setUser: setUser,
                      })
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
