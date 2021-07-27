import { Divider } from "native-base";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Radio } from "native-base";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";

const SingleDeliverable = (props) => {
  const [value, setValue] = React.useState("one");

  return (
    <View style={style.body}>
      <Header
        icon={"back"}
        title={"Deliverables"}
        navigation={props.navigation}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.ash_bg, paddingTop: 22 }}
      >
        <View style={style.container}>
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.ash_border,
              padding: 18,
              borderRadius: 10,
              backgroundColor: colors.white,
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              {/* <Text style={[style.text_16]}>#03345</Text> */}
              <Text
                style={[
                  style.text_12,
                  { color: colors.lemon, marginLeft: "auto" },
                ]}
              >
                COMPLETED
              </Text>
            </View>

            <View>
              {/* pickup  */}
              <Text
                style={[
                  style.text,
                  {
                    color: colors.lemon,
                    marginVertical: 22,
                  },
                ]}
              >
                Pickup Details
              </Text>

              <View style={{ marginBottom: 13 }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Package Type
                </Text>
                <Text style={[style.text_16, { marginVertical: 10 }]}>
                  Documents & Files
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: 13 }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Pickup Address
                </Text>
                <Text style={[style.text_16, { marginVertical: 10 }]}>
                  5 Isaac John str, Ikeja
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: 13 }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Nearest Landmark
                </Text>
                <Text style={[style.text_16, { marginVertical: 10 }]}>
                  5 Isaac John str, Ikeja
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: 13 }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Sender’s Name
                </Text>
                <Text style={[style.text_16, { marginVertical: 10 }]}>
                  5 Isaac John str, Ikeja
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: 13 }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Phone Number
                </Text>
                <Text style={[style.text_16, { marginVertical: 10 }]}>
                  5 Isaac John str, Ikeja
                </Text>
                <Divider />
              </View>

              {/* delivery  */}
              <Text
                style={[
                  style.text,
                  {
                    color: colors.lemon,
                    marginVertical: 22,
                  },
                ]}
              >
                Delivery Details
              </Text>
              <View style={{ marginBottom: 13 }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Delivery Address
                </Text>
                <Text style={[style.text_16, { marginVertical: 10 }]}>
                  5 Isaac John str, Ikeja
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: 13 }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Nearest Landmark
                </Text>
                <Text style={[style.text_16, { marginVertical: 10 }]}>
                  5 Isaac John str, Ikeja
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: 13 }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Receiver’s Name
                </Text>
                <Text style={[style.text_16, { marginVertical: 10 }]}>
                  5 Isaac John str, Ikeja
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: 20 }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Phone Number
                </Text>
                <Text style={[style.text_16, { marginVertical: 10 }]}>
                  5 Isaac John str, Ikeja
                </Text>
                <Divider />
              </View>
              <Radio.Group
                name="myRadioGroup"
                aria-label="t2"
                accessibilityLabel="please select payment"
                value={value}
                onChange={(nextValue) => {
                  setValue(nextValue);
                }}
              >
                <Radio
                  aria-label="t2"
                  value="delivery time"
                  colorScheme="warning"
                  _text={{
                    color: colors.text_black,
                    fontSize: 16,
                    fontWeight: Platform.OS === "ios" ? "500" : "bold",
                  }}
                  my={1.5}
                >
                  Not Picked
                </Radio>
                <Radio
                  aria-label="t2"
                  value="delivery time"
                  colorScheme="light"
                  _text={{
                    color: colors.text_black,
                    fontSize: 16,
                    fontWeight: Platform.OS === "ios" ? "500" : "bold",
                  }}
                  my={1.5}
                >
                  Picked up
                </Radio>
                <Radio
                  aria-label="t2"
                  value="delivery time"
                  //   colorScheme="warning"
                  _text={{
                    color: colors.text_black,
                    fontSize: 16,
                    fontWeight: Platform.OS === "ios" ? "500" : "bold",
                  }}
                  my={1.5}
                >
                  In Transit
                </Radio>
                <Radio
                  aria-label="t2"
                  value="delivery time"
                  colorScheme="green"
                  _text={{
                    color: colors.text_black,
                    fontSize: 16,
                    fontWeight: Platform.OS === "ios" ? "500" : "bold",
                  }}
                  my={1.5}
                >
                  Delivered
                </Radio>
              </Radio.Group>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SingleDeliverable;
