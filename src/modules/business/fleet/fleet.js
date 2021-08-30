import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button } from "react-native-elements";
import { useToast } from "native-base";
import MaterialIcons from "react-native-vector-icons/FontAwesome5";
import Spinner from "react-native-spinkit";
//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import Footer from "../../partials/footer/businessFooter";

//redux
import { useDispatch } from "react-redux";
import { getFleet } from "../../../redux/business/fleet/fleetActions";

const Fleet = (props) => {
  const source = [1, 2, 3, 4, 5];
  const [fleet, setFleet] = useState([]);
  const [fleetLoading, setFleetLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    dispatch(getFleet())
      .then((res) => {
        setPageLoading(false);

        setFleet(res);
        setFleetLoading(false);
      })
      .catch((e) => {
        toast.show({
          title: e
            ? e.toLowerCase()
            : "something went wrong, please check your internet connection and restart the app",
          status: "error",
          placement: "top",
        });
        setPageLoading(false);
        setFleetLoading(false);
      });
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getFleet())
      .then((data) => {
        setFleet(data);
        setRefreshing(false);
      })
      .catch((e) => {
        toast.show({
          title: e
            ? e.toString()
            : "something went wrong, please check your internet connection and restart the app",
          status: "error",
          placement: "top",
        });
        setRefreshing(false);
      });
  }, []);

  return (
    <View style={[style.body, { backgroundColor: colors.ash_bg }]}>
      <Header title={"Fleet"} />
      <View style={[style.container]}>
        <Button
          block
          title="Add Vehicle"
          buttonStyle={[style.btn_success, { marginTop: 30, marginBottom: 30 }]}
          titleStyle={style.btn_text}
          loading={pageLoading}
          disabled={pageLoading}
          disabledStyle={[
            style.btn_success_disabled,
            { marginTop: 30, opacity: 0.8 },
          ]}
          disabledTitleStyle={{ color: colors.white }}
          onPress={() => props.navigation.navigate("newVehicle")}
        />
      </View>
      {pageLoading ? (
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
              style={{ marginTop: -80 }}
              type="ThreeBounce"
              color={colors.navy_blue}
            />
          </View>
        </View>
      ) : !fleet.length ? (
        <View
          style={{
            // display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <MaterialIcons
              style={{
                color: colors.navy_blue,
                fontSize: 80,
                marginTop: -30,
                textAlign: "center",
              }}
              name={"motorcycle"}
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                marginTop: 10,
                color: colors.navy_blue,
              }}
            >
              No Vehicles
            </Text>
          </View>
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={style.container}>
            {fleet.map((data) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate("vehicleDetails", {
                      data: data,
                    })
                  }
                  key={data._id}
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
                          {data.firstname} {data.lastname}
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
                          {data.license_number.toUpperCase()}
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
      )}
      <Footer location={"fleet"} navigation={props.navigation} />
    </View>
  );
};

export default Fleet;
