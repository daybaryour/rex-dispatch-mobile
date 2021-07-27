import React, { useState } from "react";

import { Text, Image, Divider } from "native-base";
import { Button } from "react-native-elements";
import { View, ScrollView } from "react-native";
import { Grid, Row, Col } from "react-native-easy-grid";

import { AirbnbRating } from "react-native-ratings";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import Modals from "./modals";

const ChooseProvider = (props) => {
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [showModal, toggle_showModal] = useState(null);

  return (
    <View style={style.body}>
      <Header
        icon={"back"}
        title={"Choose Dispatch Provider"}
        navigation={props.navigation}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[style.container, { marginTop: 10 }]}
      >
        {source.map((data) => {
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
                      source={require("../../../assets/logos/hor.png")}
                      style={{
                        width: 45,
                        height: 45,
                        borderRadius: 6,
                        marginTop: 7,
                      }}
                    />
                  </Col>
                  <Col size={3}>
                    <Text style={[style.text_16]}>God is Good Logistics</Text>
                    <View
                      style={{
                        marginVertical: 5,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <AirbnbRating
                        count={5}
                        defaultRating={4}
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
                      <Text
                        style={{
                          fontSize: 12,
                          color: colors.text_grey,
                          marginLeft: 2,
                          marginTop: 2,
                        }}
                      >
                        2.3k
                      </Text>
                    </View>
                    <Text
                      style={{
                        fontSize: 12,
                        color: colors.text_grey,
                      }}
                    >
                      4825 Completed deliveries
                    </Text>
                  </Col>
                  <Col
                    size={1.1}
                    style={{
                      alignItems: "flex-end",
                      justifyContent: "space-around",
                    }}
                  >
                    <Text style={[style.text_16, { marginBottom: 10 }]}>
                      ₦1500
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
            </>
          );
        })}
      </ScrollView>
      <Modals
        showModal={showModal}
        toggle_showModal={toggle_showModal}
        navigation={props.navigation}
      />
    </View>
  );
};

export default ChooseProvider;
