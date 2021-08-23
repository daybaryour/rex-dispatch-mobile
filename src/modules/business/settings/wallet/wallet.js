import React, { useState } from "react";

import { View, Text } from "react-native";
import { Button } from "react-native-elements";

//styles
import style from "../../../../assets/styles/general/style";
import colors from "../../../../helpers/color";

//partials
import Header from "../../../partials/header";
import Transactions from "./transactions";

const Wallet = (props) => {
  return (
    <View style={style.body}>
      <Header title={"My Wallet"} icon={"back"} navigation={props.navigation} />
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View
        style={{
          backgroundColor: colors.ash_bg,
          paddingVertical: 15,
        }}
      >
        <View style={style.container}>
          {/* <Grid style={style.container}>
          <Row>
            <Col size={1} style={{ alignItems: "center" }}> */}
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View>
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
              {/* <Button
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
                /> */}
            </View>
            <View style={{ marginLeft: "auto" }}>
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
                Total Transactions
              </Text>
              <Text style={[style.text, { marginVertical: 7 }]}>
                ₦20,000.00
              </Text>
            </View>
          </View>

          {/* </Col> */}
          {/* <Col size={1} style={{ alignItems: "center" }}> */}

          {/* </Col>
          </Row>
        </Grid> */}
        </View>
      </View>

      <View style={style.container}>
        <Button
          block
          title="Add funds to wallet"
          buttonStyle={[style.btn_success, { marginTop: 20, marginBottom: 0 }]}
          titleStyle={style.btn_text}
        />
      </View>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <Transactions />
      {/* </ScrollView> */}
      {/* </ScrollView> */}
    </View>
  );
};

export default Wallet;
