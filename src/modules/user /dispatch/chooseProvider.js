import React, { useRef, useState } from "react";

import {
  Text,
  Input,
  Select,
  CheckIcon,
  TextArea,
  Image,
  Divider,
} from "native-base";
import { Button } from "react-native-elements";
import { View, ScrollView, Platform } from "react-native";
import { Grid, Row, Col } from "react-native-easy-grid";
import PhoneInput from "react-native-phone-number-input";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

//styles
import style from "../../../assets/styles/general/style";
import tabStyle from "../../../assets/styles/general/tabStyle";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";

const ChooseProvider = () => {
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <View style={style.body}>
      <Header icon={"back"} title={"Choose Dispatch Provider"} />
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        {source.map((data) => {
          return (
            <>
              <Grid key={data}>
                <Row style={{ marginTop: "5%", marginBottom: "4%" }}>
                  <Col size={0.8}>
                    <Image
                      alt="dispatch company's logo"
                      source={require("../../../assets/logos/hor.png")}
                      style={{
                        width: 45,
                        height: 45,
                        borderRadius: 6,
                        marginTop: "10%",
                      }}
                    />
                  </Col>
                  <Col size={3}>
                    <Text style={[style.text_16]}>God is Good Logistics</Text>
                    <View
                      style={{
                        marginVertical: "2%",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Image
                        alt="dispatch company's logo"
                        source={require("../../../assets/icons/full_star.png")}
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: 6,
                        }}
                      />
                      <Image
                        alt="dispatch company's logo"
                        source={require("../../../assets/icons/full_star.png")}
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: 6,
                        }}
                      />
                      <Image
                        alt="dispatch company's logo"
                        source={require("../../../assets/icons/full_star.png")}
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: 6,
                        }}
                      />
                      <Image
                        alt="dispatch company's logo"
                        source={require("../../../assets/icons/half_star.png")}
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: 6,
                        }}
                      />
                      <Image
                        alt="dispatch company's logo"
                        source={require("../../../assets/icons/empty_star.png")}
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: 6,
                        }}
                      />
                      <Text
                        style={{
                          fontSize: 12,
                          color: colors.text_grey,
                          marginLeft: "2%",
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
                    <Text style={[style.text_16, { marginBottom: "12%" }]}>
                      ₦1500
                    </Text>

                    <Button
                      title="Proceed"
                      size={5}
                      buttonStyle={{
                        backgroundColor: colors.light_lemon,
                        borderRadius: 3,
                        paddingVertical: "8%",
                        paddingHorizontal: "19%",
                        borderRadius: 20,
                      }}
                      titleStyle={{
                        fontSize: 12,
                        color: colors.lemon,
                      }}
                    />
                  </Col>
                </Row>
                <Divider />
              </Grid>
            </>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ChooseProvider;
