import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { useToast } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Spinner from "react-native-spinkit";
import moment from "moment";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import Footer from "../../partials/footer/riderFooter";

//redux
import { useDispatch } from "react-redux";
import { getHistory } from "../../../redux/rider/dispatch/dispatchActions";

const History = (props) => {
  const [history, setHistory] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    dispatch(getHistory())
      .then((res) => {
        setHistory(res);
        setPageLoading(false);
      })
      .catch((e) => {
        setPageLoading(false);
        toast.show({
          title: e
            ? e.toLowerCase()
            : "something went wrong, please check your internet connection and restart the app",
          status: "error",
          placement: "top",
        });
      });
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getHistory())
      .then((data) => {
        setHistory(data);
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
      <Header title={"Dispatch History"} />
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
      ) : !history.length ? (
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
                fontSize: 100,
                textAlign: "center",
              }}
              name={"history"}
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                marginTop: 10,
                color: colors.navy_blue,
              }}
            >
              No dispatch history
            </Text>
          </View>
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: colors.ash_bg, paddingTop: 22 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={style.container}>
            {history.map((data) => {
              return (
                <TouchableOpacity
                  key={data._id}
                  onPress={() =>
                    props.navigation.navigate("singleHistory", {
                      data: data,
                    })
                  }
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
                          {data.senders_name}
                        </Text>
                        <Text
                          style={[
                            style.text_12,
                            {
                              color: colors.text_grey,
                              marginBottom: 11,
                            },
                          ]}
                        >
                          {moment(data.createdAt).format("MMMM Do YYYY, h:mm")}
                        </Text>
                        <Text
                          style={[
                            style.text_12,
                            {
                              color:
                                data.status == "delivered"
                                  ? colors.lemon
                                  : data.status == "in_transit"
                                  ? colors.yellow
                                  : colors.red,
                              marginBottom: 5,
                            },
                          ]}
                        >
                          {data.status == "bid_pending"
                            ? "BID PENDING"
                            : data.status == "rider_assigned"
                            ? "RIDER ASSIGNED"
                            : data.status == "picked_up"
                            ? "PICKED UP"
                            : data.status == "in_transit"
                            ? "IN TRANSIT"
                            : data.status == "delivered"
                            ? "DELIVERED"
                            : "CANCELLED"}
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
      <Footer location={"history"} navigation={props.navigation} />
    </View>
  );
};

export default History;
