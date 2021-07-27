import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Modal from "react-native-modal";
import { Button } from "react-native-elements";
import { Radio, Image, Divider } from "native-base";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

const Modals = (props) => {
  const [visibleModal, toggle_visibleModal] = useState(null);
  const [value, setValue] = React.useState("one");

  return (
    <View style={styles.container}>
      {/* business details modal */}
      <Modal
        isVisible={props.showModal == "business_details"}
        animationIn={"slideInLeft"}
        animationOut={"slideOutRight"}
        onBackdropPress={() => props.toggle_showModal(null)}
      >
        <View style={[style.modalContent, { borderRadius: 3 }]}>
          <View style={style.container}>
            <Image
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "7%",
                borderRadius: 5,
              }}
              source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
              alt="Alternate Text"
              size={"sm"}
            />
            <View style={{ marginBottom: "5%" }}>
              <Text
                style={[
                  style.text_12,
                  { color: colors.pure_ash, marginBottom: "3%" },
                ]}
              >
                Business Name
              </Text>
              <Text style={[style.text, { marginBottom: "3%" }]}>
                Gokada Logistics
              </Text>
              <Divider />
            </View>
            <View style={{ marginBottom: "5%" }}>
              <Text
                style={[
                  style.text_12,
                  { color: colors.pure_ash, marginBottom: "3%" },
                ]}
              >
                Email Address
              </Text>
              <Text style={[style.text, { marginBottom: "4%" }]}>
                esther@mylendme.co
              </Text>
              <Divider />
            </View>
            <View style={{ marginBottom: "5%" }}>
              <Text
                style={[
                  style.text_12,
                  { color: colors.pure_ash, marginBottom: "3%" },
                ]}
              >
                Location
              </Text>
              <Text style={[style.text, { marginBottom: "4%" }]}>Lagos</Text>
              <Divider />
            </View>
            <View style={{ marginBottom: "5%" }}>
              <Text
                style={[
                  style.text_12,
                  { color: colors.pure_ash, marginBottom: "3%" },
                ]}
              >
                Phone Number
              </Text>
              <Text style={[style.text, { marginBottom: "4%" }]}>
                09047478291
              </Text>
              <Divider />
            </View>
            <View style={{ marginBottom: "5%" }}>
              <Text
                style={[
                  style.text_12,
                  { color: colors.pure_ash, marginBottom: "3%" },
                ]}
              >
                Address
              </Text>
              <Text style={[style.text, { marginBottom: "4%" }]}>
                11, Faith Avenue, Tolani Close, Opebi, Ikeja.
              </Text>
              <Divider />
            </View>
            <View style={{ marginBottom: "5%" }}>
              <Text
                style={[
                  style.text_12,
                  { color: colors.pure_ash, marginBottom: "3%" },
                ]}
              >
                Name of Contact Person
              </Text>
              <Text style={[style.text, { marginBottom: "4%" }]}>
                Celebrity Dev
              </Text>
            </View>
          </View>
        </View>
      </Modal>

      {/* Proceed to Payment modal  */}
      <Modal
        isVisible={props.showModal == "proceed_payment"}
        style={style.bottomModal}
        onBackdropPress={() => props.toggle_showModal(null)}
      >
        <View
          style={[
            style.modalContent,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <View style={style.container}>
            <Text style={[style.text_16, { marginBottom: 20 }]}>Hi Bayo,</Text>
            <Text style={[style.text_16_normal, { marginBottom: "7%" }]}>
              you have selected{" "}
              <Text style={[style.text_16]}>DHL Logistics</Text> to deliver your
              package to
              <Text style={[style.text_16]}> Daniel Chibuzor</Text> at 42 Ajose
              str, Mende, Maryland for{" "}
              <Text style={[style.text_16]}> ₦1500. </Text>
            </Text>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="please select payment"
              value={value}
              onChange={(nextValue) => {
                setValue(nextValue);
              }}
            >
              <Radio aria-label="t2" value="one" colorScheme="green" my={1}>
                Pay with wallet (2000)
              </Radio>
              <Radio aria-label="t2" value="two" colorScheme="green" my={1}>
                Pay with Paystack
              </Radio>
              <Radio aria-label="t2" value="three" colorScheme="green" my={1}>
                Pay on delivery
              </Radio>
            </Radio.Group>
            <Button
              block
              title="Make Payment"
              buttonStyle={[style.btn_success, { marginTop: "7%" }]}
              titleStyle={style.btn_text}
              onPress={() => {
                props.toggle_showModal(null);
                props.navigation.navigate("orderSuccess");
              }}
            >
              <Text style={style.btn_text}>Add Card</Text>
            </Button>

            <Text
              style={[
                style.text_16,
                { color: colors.red, textAlign: "center" },
              ]}
              onPress={() => {
                props.toggle_showModal(null);
                props.navigation.navigate("cancelRequest");
              }}
            >
              Cancel Request
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Modals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
