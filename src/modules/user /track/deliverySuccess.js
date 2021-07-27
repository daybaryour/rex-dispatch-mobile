import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";
import { Grid, Row, Col } from "react-native-easy-grid";
import { Rating, AirbnbRating } from "react-native-ratings";

import Icon from "react-native-vector-icons/Ionicons";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

const DeliverySuccess = (props) => {
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
  };
  return (
    <View style={style.body}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <View style={{ alignItems: "center" }}>
          <View style={{ marginTop: "20%" }}>
            <Image
              source={require("../../../assets/images/star_woman.png")}
              style={{ width: 160, height: 160, marginVertical: 20 }}
            />
          </View>
          <View>
            <Text
              style={[
                style.text_20,
                {
                  color: colors.text_blue,
                  textAlign: "center",
                  marginBottom: 30,
                },
              ]}
            >
              How was this delivery?
            </Text>
            <Text
              style={[
                style.text,
                {
                  textAlign: "center",
                  fontWeight: "normal",
                  marginBottom: 35,
                },
              ]}
            >
              Rate this delivery if you enjoy the service. Your ratings helps
              others.
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.blue_bg,
            paddingHorizontal: 10,
            borderRadius: 4,
            marginTop: 16,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: colors.ash_border,
          }}
        >
          <Grid
          //   onPress={() => toggle_showModal("business_details")}
          >
            <Row style={{ marginTop: 16, marginBottom: 25 }}>
              <Col size={0.9}>
                <Image
                  alt="dispatch company's logo"
                  source={require("../../../assets/logos/gig.png")}
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 6,
                    marginTop: 5,
                  }}
                />
              </Col>
              <Col size={3}>
                <Text style={[style.text_16]}>God is Good Logistics</Text>

                <Text
                  style={{
                    fontSize: 12,
                    color: colors.text_grey,
                    marginTop: 5,
                  }}
                >
                  4825 deliveries
                </Text>
              </Col>
              <Col
                size={1.1}
                style={{
                  alignItems: "flex-end",
                  justifyContent: "space-around",
                }}
              >
                <View
                  style={{
                    backgroundColor: colors.white,
                    padding: 5,
                    paddingHorizontal: 8,
                    marginBottom: 20,
                    borderRadius: 20,
                  }}
                >
                  <Text style={[style.text_12]}>
                    <Icon
                      style={{
                        color: colors.yellow,
                        fontSize: 14,
                      }}
                      name={"star"}
                    />{" "}
                    4.5
                  </Text>
                </View>
              </Col>
            </Row>
          </Grid>
        </View>

        <AirbnbRating
          count={5}
          defaultRating={0}
          size={25}
          onFinishRating={ratingCompleted}
          showRating={false}
          unSelectedColor={colors.ash}
          selectedColor={colors.yellow}
          style={{ paddingVertical: 15 }}
          ratingContainerStyle={{ paddingVertical: 20 }}
        />

        {/* <Rating
          type="custom"
          onFinishRating={ratingCompleted}
          style={{ paddingVertical: 15 }}
          ratingBackgroundColor={colors.ash}
          imageSize={30}
          ratingColor={colors.yellow}
          showRating={false}
          //   ratingBackgroundColor={{ color: colors.ash }}
          startingValue={0}
        /> */}
        <Button
          block
          title="Submit Feedback"
          buttonStyle={[style.btn_success, { marginTop: 40 }]}
          titleStyle={style.btn_text}
        />
        <Text
          style={[style.text_16, { color: colors.lemon, textAlign: "center" }]}
          onPress={() => props.navigation.navigate("wallet")}
        >
          Take me home
        </Text>
      </ScrollView>
    </View>
  );
};

export default DeliverySuccess;
