import React, { useState, useEffect } from "react";

import { Text, useToast } from "native-base";
import { View, Image, TouchableOpacity } from "react-native";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import Footer from "../../partials/footer/footer";
import Pickup from "./pickup";
import Delivery from "./delivery";

//redux
import { useDispatch, useSelector } from "react-redux";
import { newDispatchRequest } from "../../../redux/user/dispatch/dispatchActions";

const CreateDispatch = (props) => {
  const [pickup_show, toggle_pickup_show] = useState(true);
  const [delivery_details, toggle_delivery_details] = useState(false);
  const [isLoading, toggle_isLoading] = useState(false);

  const [pickup_data, setPickup_data] = useState({});
  const [delivery_data, setDelivery_data] = useState({});

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {}, []);

  onSubmit = () => {
    toggle_isLoading(true);

    // console.log("got");
    if (pickup_data && delivery_data) {
      let data = Object.assign(pickup_data, delivery_data);

      console.log(data, "l40");

      dispatch(newDispatchRequest(data))
        .then(() => {
          toggle_isLoading(false);
          toggle_pickup_show(true);
          props.navigation.navigate("dispatch", {
            screen: "chooseProvider",
            //   params: { id: data.phone },
          });
        })
        .catch((e) => {
          toast.show({
            title: e
              ? e
              : "something went wrong, please check your internet connection and try again",
            status: "error",
            placement: "top",
          });
          toggle_isLoading(false);
        });
    }
  };

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
              setDelivery_data={setDelivery_data}
              toggle_pickup_show={toggle_pickup_show}
              onSubmit={onSubmit}
              isLoading={isLoading}
            />
          )}
        </>
      </View>
      <Footer location={"dispatch"} navigation={props.navigation} />
    </>
  );
};

export default CreateDispatch;
