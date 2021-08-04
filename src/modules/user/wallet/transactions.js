import React from "react";
import { View, Text } from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";
import { Image, Divider } from "native-base";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

const Transactions = () => {
  const source = [1, 2, 3, 4, 5];

  return (
    <View style={[style.container, { marginTop: "7%" }]}>
      <Text
        style={[style.text, { color: colors.text_ash, marginBottom: "5%" }]}
      >
        Transactions History
      </Text>

      <View>
        {source.map((data) => {
          return (
            <Grid style={{ marginBottom: "5%" }}>
              <Row>
                <Col size={0.8}>
                  <Image
                    style={{
                      marginTop: "15%",
                      height: 10,
                      width: 10,
                    }}
                    source={require("../../../assets/icons/credit_arrow.png")}
                    alt="Alternate Text"
                    size={"sm"}
                  />
                </Col>
                <Col size={6}>
                  <Text style={[style.text, { marginBottom: "5%" }]}>
                    wallet top-up
                  </Text>
                  <Text
                    style={[
                      style.text_12,
                      { color: colors.text_grey, marginBottom: "5%" },
                    ]}
                  >
                    09/06/2021, 09:30pm
                  </Text>
                </Col>
                <Col size={2}>
                  <Text style={[style.text]}>₦15,000</Text>
                </Col>
              </Row>
              <Divider />
            </Grid>
          );
        })}
      </View>
    </View>
  );
};

export default Transactions;
