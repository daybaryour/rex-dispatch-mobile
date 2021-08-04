import React, { useState } from "react";

import { Text } from "native-base";
import { View, Image, TouchableOpacity } from "react-native";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import Footer from "../../partials/footer/footer";
import Pickup from "./pickup";
import Delivery from "./delivery";

const CreateDispatch = (props) => {
  const [pickup_show, toggle_pickup_show] = useState(true);
  const [delivery_details, toggle_delivery_details] = useState(false);
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
              <TouchableOpacity
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
              </TouchableOpacity>
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
            <Pickup toggle_pickup_show={toggle_pickup_show} />
          ) : (
            <Delivery navigation={props.navigation} />
          )}
        </>
      </View>
      <Footer location={"dispatch"} navigation={props.navigation} />
    </>
  );
};

export default CreateDispatch;
