import React from "react";
import { Text, Input, Image } from "native-base";
import { Button } from "react-native-elements";
import {
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";
import { Grid, Row, Col } from "react-native-easy-grid";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Card = (props) => {
  //   state = {
  //     window: {
  //       width: "",
  //       height: "",
  //     },
  //   };

  //   onDimensionChange = ({ window, screen }) => {
  //     this.setState({
  //       window: {
  //         width: window.width,
  //         height: window.height,
  //       },
  //     });
  //   };

  //   componentDidMount() {
  //     Dimensions.addEventListener("change", this.onDimensionChange);
  //   }

  //   componentWillUnmount() {
  //     Dimensions.removeEventListener("change", this.onDimensionChange);
  //   }

  //   const style = window.width > 578 ? tabStyle : normalStyle;
  //   const authStyle = window.width > 578 ? authTabStyle : authNormalStyle;

  return (
    <>
      <SafeAreaView style={{ backgroundColor: colors.navy_blue }} />
      <StatusBar barStyle="light-content" />
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ backgroundColor: colors.navy_blue, flex: 1 }}>
            <View
              style={[
                style.container,
                {
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "15%",
                },
              ]}
            >
              <Text style={[style.heading, { color: colors.white }]}>
                Add Card 💳
              </Text>
              <Text style={{ marginLeft: "auto", color: colors.lemon }}>
                skip
              </Text>
            </View>
          </View>
          <View
            style={[
              {
                borderTopColor: colors.navy_blue,

                borderTopWidth: 125,
              },
            ]}
          >
            <Image
              alt="card"
              style={{
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: -85,
              }}
              source={require("../../../assets/icons/card/cardbg.png")}
            ></Image>
          </View>

          <View style={style.container}>
            <Text style={style.form_label}>Card Number</Text>
            <Input
              {...style.form_control}
              _focus={colors.border_black}
              placeholder="0000 0000 0000 0000"
            />

            <Grid>
              <Row>
                <Col>
                  <Text style={style.form_label}>Expiry Date</Text>

                  <Input
                    {...style.form_control}
                    _focus={colors.border_black}
                    placeholder="mm/yy"
                  />
                </Col>
                <Col style={{ marginLeft: 23 }}>
                  <Text style={style.form_label}>CVV</Text>

                  <Input
                    {...style.form_control}
                    _focus={colors.border_black}
                    placeholder="123"
                  />
                </Col>
              </Row>
            </Grid>

            <Image
              alt="lock"
              source={require("../../../assets/icons/lock.png")}
              square
              style={{
                height: 20,
                width: 20,
                marginTop: 100,
                marginBottom: 16,
                marginRight: "auto",
                marginLeft: "auto",
              }}
            />
            <Text style={{ textAlign: "center" }}>
              We would never share your card information with anyone.
            </Text>
            <View style={{ marginTop: 17 }}>
              <Button
                block
                title="Add Card"
                buttonStyle={[style.btn_success, { marginTop: 0 }]}
                titleStyle={style.btn_text}
                onPress={() => props.navigation.navigate("dispatch")}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Card;
