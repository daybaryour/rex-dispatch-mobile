import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { Radio } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

//styles
import style from "../../../assets/styles/general/style";
import tabStyle from "../../../assets/styles/general/tabStyle";
import colors from "../../../helpers/color";

const PayOnDelivery = () => {
  const [value, setValue] = React.useState("one");

  return (
    <View style={style.body}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <TouchableOpacity onPress={() => this.props.backAction}>
          <Image
            source={require("../../../assets/icons/back_black.png")}
            style={{ width: 8, height: 14, marginTop: "25%" }}
          />
        </TouchableOpacity>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../assets/images/bike_man.png")}
            style={{ width: 186, height: 182, marginVertical: "5%" }}
          />
          <Text style={[style.text_20]}>Payment on delivery only</Text>
          <View
            style={{
              backgroundColor: colors.light_blue,
              marginVertical: "5%",
              paddingVertical: "10%",
              width: "100%",
              alignItems: "center",
              borderRadius: 4,
            }}
          >
            <Text style={{ fontSize: 28, fontWeight: "bold" }}>₦1500</Text>
            <Text style={[style.text_16]}>Delivery Fee</Text>
          </View>
          <View style={{ width: "100%" }}>
            <Text style={[style.text, { marginVertical: "3%" }]}>
              Payment to be made by?
            </Text>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="please select payment"
              value={value}
              onChange={(nextValue) => {
                setValue(nextValue);
              }}
            >
              <Radio
                value="one"
                colorScheme="green"
                _text={{
                  color: colors.pure_ash,
                  fontSize: 16,
                }}
                //     icon={
                //       <Icon
                //         style={{
                //           backgroundColor: colors.white,
                //           color: colors.lemon,
                //           fontSize: 13,
                //           borderRadius: 50,
                //         }}
                //         name={"check"}
                //       />
                // }
                my={1}
              >
                Sender
              </Radio>
              <Radio
                value="two"
                colorScheme="green"
                _text={{
                  color: colors.pure_ash,
                  fontSize: 16,
                }}
                my={1}
              >
                Recipient
              </Radio>
            </Radio.Group>
            <Text
              style={[style.text_14, { marginVertical: "3%", lineHeight: 19 }]}
            >
              A message will be sent to the recipient for confirmation via text.
            </Text>
            <Button
              block
              title="Make Payment"
              buttonStyle={[style.btn_success, { marginTop: "7%" }]}
              titleStyle={style.btn_text}
            >
              <Text style={style.btn_text}>Add Card</Text>
            </Button>

            <Text
              style={[
                style.text_16,
                { color: colors.red, textAlign: "center" },
              ]}
            >
              Cancel Request
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PayOnDelivery;
