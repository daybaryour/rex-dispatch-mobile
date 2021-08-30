import React, { useEffect, useState, useCallback } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";
import { Divider, Pressable } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Spinner from "react-native-spinkit";
import { useToast } from "native-base";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import Footer from "../../partials/footer/riderFooter";

//redux
import { useDispatch } from "react-redux";
import { getDeliverables } from "../../../redux/rider/dispatch/dispatchActions";

const Deliverables = (props) => {
  const [deliverables, setDeliverables] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    dispatch(getDeliverables())
      .then((res) => {
        setDeliverables(res);
        setPageLoading(false);
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
      });
  }, []);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getDeliverables())
      .then((res) => {
        setDeliverables(res);
        setRefreshing(false);
      })
      .catch((e) => {
        toast.show({
          title: e
            ? e.toLowerCase()
            : "something went wrong, please check your internet connection and restart the app",
          status: "error",
          placement: "top",
        });
        setRefreshing(false);
      });
  }, []);

  return (
    <View style={style.body}>
      <Header title={"Deliverables"} />
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
              type="ThreeBounce"
              color={colors.navy_blue}
            />
          </View>
        </View>
      ) : !deliverables.length ? (
        <View
          style={{
            // display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.ash_bg,
          }}
        >
          <View>
            <MaterialIcons
              style={{
                color: colors.navy_blue,
                fontSize: 100,
                textAlign: "center",
              }}
              name={"two-wheeler"}
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                marginTop: 10,
                color: colors.navy_blue,
              }}
            >
              No deliverables
            </Text>
          </View>
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: colors.ash_bg }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={style.container}>
            {deliverables.map((data) => {
              return (
                <Pressable
                  onPress={() =>
                    props.navigation.navigate("singleDeliverable", {
                      data: data,
                    })
                  }
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
                      style={[
                        style.text_16,
                        { marginTop: 5, marginBottom: 14 },
                      ]}
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
      )}
      <Footer location={"dispatch"} navigation={props.navigation} />
    </View>
  );
};

export default Deliverables;
