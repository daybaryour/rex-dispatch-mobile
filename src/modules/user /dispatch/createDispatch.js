import React, { useRef, useState } from "react";

import { Text } from "native-base";
import { View, ScrollView, StatusBar, Dimensions, Image } from "react-native";
import PhoneInput from "react-native-phone-number-input";

//styles
import style from "../../../assets/styles/general/style";
import tabStyle from "../../../assets/styles/general/tabStyle";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import Footer from "../../partials/footer/footer";
import Pickup from "./pickup";
import Delivery from "./delivery";

const CreateDispatch = (props) => {
  const [pickup_show, toggle_pickup_show] = useState(true);
  const [delivery_details, toggle_delivery_details] = useState(false);

  const phoneInput = useRef() < PhoneInput > null;

  return (
    <View style={style.body}>
      <Header icon={"menu"} title={"Send a Package"} />

      <View style={style.container}>
        <View style={{ borderBottomColor: colors.ash, borderBottomWidth: 1 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "8%",
              marginBottom: "4%",
            }}
          >
            <Text style={(style.text_16, { color: colors.lemon })}>
              {pickup_show ? "Pickup Details" : "Delivery Details"}
            </Text>
            {pickup_show ? (
              <Image
                source={require("../../../assets/icons/minimize.png")}
                style={{
                  width: 12,
                  height: 2,
                  marginTop: "3%",
                  marginLeft: "auto",
                }}
              />
            ) : (
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
            )}
          </View>
        </View>
      </View>
      <>{pickup_show ? <Pickup /> : <Delivery />}</>

      <Footer location={"dispatch"} navigation={props.navigation} />
    </View>
  );
};

export default CreateDispatch;
