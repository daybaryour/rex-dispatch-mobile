import React, { useState, useEffect } from "react";

import { Text, useToast } from "native-base";
import { View, Image, TouchableOpacity, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import Footer from "../../partials/footer/footer";
import Pickup from "./pickup";
import Delivery from "./delivery";

//redux
import { useDispatch } from "react-redux";
import { save_firebase_token } from "../../../redux/general/auth/authActions";

//firebase
import messaging from "@react-native-firebase/messaging";

const CreateDispatch = (props) => {
  const [pickup_show, toggle_pickup_show] = useState(true);

  const [pickup_data, setPickup_data] = useState({});

  const dispatch = useDispatch();

  const requestPermission = async () => {
    try {
      await messaging().requestPermission();
    } catch {
      console.log("permission rejected");
    }
  };

  useEffect(async () => {
    const enabled = await messaging().hasPermission();
    if (enabled) {
      messaging()
        .getToken()
        .then((token) => {
          dispatch(
            save_firebase_token(
              {
                token: token,
                device_type: Platform.OS == "ios" ? "ios" : "android",
              },
              "customer"
            )
          );
        });

      // console.log(await AsyncStorage.removeItem("token"));

      messaging().onTokenRefresh((token) => {
        dispatch(
          save_firebase_token(
            {
              token: token,
              device_type: Platform.OS == "ios" ? "ios" : "android",
            },
            "customer"
          )
        );
      });
    } else {
      requestPermission();
    }
  }, []);

  return (
    <>
      <View style={style.body}>
        <Header
          icon={"menu"}
          title={"Send a Package"}
          navigation={props.navigation}
        />

        <View style={style.container}>
          <View style={{ borderBottomColor: colors.ash, borderBottomWidth: 1 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 27,
                marginBottom: 14,
              }}
            >
              <Text style={(style.text_16, { color: colors.lemon })}>
                {pickup_show ? "Pickup Details" : "Delivery Details"}
              </Text>
              {/* {pickup_show ? ( */}
              {/* <TouchableOpacity
                onPress={() => toggle_pickup_show(!pickup_show)}
                style={{ marginLeft: "auto", marginTop: 10 }}
              >
                <Image
                  source={require("../../../assets/icons/minimize.png")}
                  style={{
                    width: 12,
                    height: 2,
                  }}
                />
              </TouchableOpacity> */}
              {/* ) : (
                <Text
                  style={{
                    fontSize: 25,
                    color: "rgba(0, 0, 0, 0.54)",
                    marginLeft: "auto",
                    marginTop: "-2%",
                  }}
                >
                  +
                </Text>
              )} */}
            </View>
          </View>
        </View>
        <>
          {pickup_show ? (
            <Pickup
              toggle_pickup_show={toggle_pickup_show}
              setPickup_data={setPickup_data}
            />
          ) : (
            <Delivery
              pickup_data={pickup_data}
              toggle_pickup_show={toggle_pickup_show}
              navigation={props.navigation}
            />
          )}
        </>
      </View>
      <Footer location={"dispatch"} navigation={props.navigation} />
    </>
  );
};

export default CreateDispatch;
