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

const DeclinedBids = (props) => {
  const [declined, setDeclined] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    dispatch(getBids("declined"))
      .then((res) => {
        setDeclined(res);
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
    dispatch(getBids("declined"))
      .then((data) => {
        setDeclined(data);
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
    <>
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
      ) : !declined.length ? (
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
              No declined bids
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
            {declined.map((data) => {
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
                            { color: colors.red, marginLeft: "auto" },
                          ]}
                        >
                          Declined
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

export default DeclinedBids;
