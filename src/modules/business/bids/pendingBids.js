import React, { useState, useEffect, useCallback } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";
import { Divider, Pressable } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Spinner from "react-native-spinkit";
import { useToast } from "native-base";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//redux
import { useDispatch } from "react-redux";
import { getBids } from "../../../redux/business/bids/bidActions";

const PendingBids = (props) => {
  const [pending, setPending] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    dispatch(getBids("pending"))
      .then((res) => {
        setPending(res);
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
    dispatch(getBids("pending"))
      .then((data) => {
        setPending(data);
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
      });
  }, []);

  return (
    <>
      {pageLoading ? (
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
            <Spinner
              isVisible={true}
              size={60}
              type="ThreeBounce"
              color={colors.navy_blue}
            />
          </View>
        </View>
      ) : !pending.length ? (
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
              name={"payments"}
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                marginTop: 10,
                color: colors.navy_blue,
              }}
            >
              No pending bids
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
            {pending.reverse().map((data) => {
              if (data.parcel.length) {
                return (
                  <Pressable
                    key={data._id}
                    onPress={() => props.navigation.navigate("bidDetails")}
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
                          Pending
                        </Text>
                      </View>
                      <Text
                        style={[
                          style.text_16,
                          { marginTop: 5, marginBottom: 14 },
                        ]}
                      >
                        {data.parcel.length && data.parcel[0].pickup_address}
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
                        {data.parcel.length && data.parcel[0].delivery_address}
                      </Text>
                    </View>
                  </Pressable>
                );
              }
            })}
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default PendingBids;
