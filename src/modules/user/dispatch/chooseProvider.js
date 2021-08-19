import React, { useState, useEffect } from "react";

import { Text, Image, Divider } from "native-base";
import { Button } from "react-native-elements";
import { View, ScrollView } from "react-native";
import { Grid, Row, Col } from "react-native-easy-grid";

import { AirbnbRating } from "react-native-ratings";
import firestore from "@react-native-firebase/firestore";
import Spinner from "react-native-spinkit";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import Modals from "./modals";

const ChooseProvider = (props) => {
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [showModal, toggle_showModal] = useState(null);
  const [bids, set_bids] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firestore().collection("bids");

  useEffect(() => {
    setLoading(true);
    return ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const {
          address,
          business_name,
          contact_person,
          email,
          location,
          logo,
          mongo_id,
          no_of_completed,
          parcel_id,
          phone,
          price,
          rating,
        } = doc.data();
        list.push({
          id: doc.id,
          address,
          business_name,
          contact_person,
          email,
          location,
          logo,
          mongo_id,
          no_of_completed,
          parcel_id,
          phone,
          price,
          rating,
        });
      });
      set_bids(list);
      setLoading(false);
    });
  }, []);

  return (
    <View style={style.body}>
      <Header
        icon={"back"}
        title={"Choose Dispatch Provider"}
        navigation={props.navigation}
      />
      {loading ? (
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
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[style.container, { marginTop: 10 }]}
        >
          {bids.map((data) => {
            return (
              <>
                <Grid
                  key={data}
                  onPress={() => toggle_showModal("business_details")}
                >
                  <Row style={{ marginTop: 18, marginBottom: 15 }}>
                    <Col size={0.8}>
                      <Image
                        alt="dispatch company's logo"
                        source={{ uri: data.logo }}
                        style={{
                          width: 45,
                          height: 45,
                          borderRadius: 6,
                          marginTop: 7,
                        }}
                      />
                    </Col>
                    <Col size={3}>
                      <Text style={[style.text_16]}>{data.business_name}</Text>
                      <View
                        style={{
                          marginVertical: 5,
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <AirbnbRating
                          count={5}
                          defaultRating={data.rating}
                          size={12}
                          showRating={false}
                          unSelectedColor={colors.ash}
                          selectedColor={colors.yellow}
                          isDisabled={true}
                          style={{ paddingVertical: 15 }}
                          ratingContainerStyle={{
                            paddingVertical: 0,
                            marginVertical: 0,
                          }}
                        />
                        {/* <Text
                          style={{
                            fontSize: 12,
                            color: colors.text_grey,
                            marginLeft: 2,
                            marginTop: 2,
                          }}
                        >
                          2.3k
                        </Text> */}
                      </View>
                      <Text
                        style={{
                          fontSize: 12,
                          color: colors.text_grey,
                        }}
                      >
                        {data.no_of_completed} Completed{" "}
                        {data.no_of_completed > 1 ? "deliveries" : "delivery"}
                      </Text>
                    </Col>
                    <Col
                      size={1.5}
                      style={{
                        alignItems: "flex-end",
                        justifyContent: "space-around",
                      }}
                    >
                      <Text
                        style={[
                          style.text_16,
                          {
                            marginBottom: 10,
                          },
                        ]}
                      >
                        ₦ {new Intl.NumberFormat().format(data.price)}
                      </Text>

                      <Button
                        title="Proceed"
                        size={5}
                        buttonStyle={{
                          backgroundColor: colors.light_lemon,
                          borderRadius: 3,
                          paddingVertical: 6,
                          paddingHorizontal: 15,
                          borderRadius: 20,
                        }}
                        titleStyle={{
                          fontSize: 12,
                          color: colors.lemon,
                        }}
                        onPress={() => toggle_showModal("proceed_payment")}
                      />
                    </Col>
                  </Row>
                  <Divider />
                </Grid>
                <Modals
                  showModal={showModal}
                  toggle_showModal={toggle_showModal}
                  navigation={props.navigation}
                  bid={data}
                  parcel_details={props.route.params.parcel_details}
                />
              </>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default ChooseProvider;
