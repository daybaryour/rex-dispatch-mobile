import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { Divider, Pressable, useToast } from "native-base";
import Spinner from "react-native-spinkit";
import moment from "moment";
import MaterialIcons from "react-native-vector-icons/FontAwesome5";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import Footer from "../../partials/footer/businessFooter";

//redux
import { useDispatch } from "react-redux";
import { getRequests } from "../../../redux/business/requests/requestActions";

const Requests = (props) => {
  const source = [1, 2, 3, 4, 5];
  const [requests, setRequests] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    dispatch(getRequests())
      .then((res) => {
        setRequests(res);
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
      });
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getRequests())
      .then((res) => {
        setRequests(res);
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
      ) : !requests.length ? (
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
                textAlign: "center",
              }}
              name={"hand-holding-usd"}
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                marginTop: 10,
                color: colors.navy_blue,
              }}
            >
              No dispatch requests
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
            {requests.map((data) => {
              return (
                <Pressable
                  onPress={() =>
                    props.navigation.navigate("singleRequest", {
                      data: data,
                    })
                  }
                  key={data._id}
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
                        style.text_16,
                        { marginTop: 5, marginBottom: 14 },
                      ]}
                    >
                      {data.pickup_address}
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
                      {data.delivery_address}
                    </Text>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
      )}
      <Footer location={"requests"} navigation={props.navigation} />
    </View>
  );
};

export default Requests;
