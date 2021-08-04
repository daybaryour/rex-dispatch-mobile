import React, { useState } from "react";

import { View, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { Grid, Row, Col } from "react-native-easy-grid";

//styles
import style from "../../../../assets/styles/general/style";
import colors from "../../../../helpers/color";

//partials
import Header from "../../../partials/header";
import Transactions from "./transactions";
import Footer from "../../../partials/footer/businessFooter";

const Wallet = (props) => {
  return (
    <View style={style.body}>
      <Header icon={"back"} title={"My Wallet"} navigation={props.navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: colors.ash_bg, paddingVertical: 15 }}>
          <Grid style={style.container}>
            <Row>
              <Col size={1} style={{ alignItems: "center" }}>
                <Text
                  style={[
                    style.text_12,
                    {
                      textAlign: "left",
                      color: colors.pure_ash,
                      marginTop: 12,
                    },
                  ]}
                >
                  Available Balance
                </Text>
                <Text
                  style={[
                    style.text_20,
                    { textAlign: "left", marginVertical: 7 },
                  ]}
                >
                  ₦20,000.00
                </Text>
                <Button
                  title="Add funds +"
                  size={5}
                  buttonStyle={{
                    backgroundColor: colors.light_lemon,
                    borderRadius: 3,
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                    borderRadius: 20,
                  }}
                  titleStyle={{
                    fontSize: 12,
                    color: colors.lemon,
                  }}
                  //   onPress={() => toggle_showModal("proceed_payment")}
                />
              </Col>
              <Col size={1} style={{ alignItems: "center" }}>
                <Text
                  style={[
                    style.text_12,
                    {
                      textAlign: "left",
                      color: colors.pure_ash,
                      marginTop: 12,
                    },
                  ]}
                >
                  Wallet Id
                </Text>
                <Text style={[style.text, { marginVertical: 7 }]}>
                  @pre7263
                </Text>
              </Col>
            </Row>
          </Grid>
        </View>

        <View>
          <Transactions />
        </View>

        <View style={style.container}>
          <Button
            block
            title="Add funds to wallet"
            buttonStyle={[style.btn_success, { marginTop: 20 }]}
            titleStyle={style.btn_text}
          />
        </View>
      </ScrollView>

      {/* <Footer location={"wallet"} navigation={props.navigation} /> */}
    </View>
  );
};

export default Wallet;
