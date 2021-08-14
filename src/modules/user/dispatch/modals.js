import React, { useState } from "react";
import { View, Text } from "react-native";

import Modal from "react-native-modal";
import { Button } from "react-native-elements";
import { Radio, Image, Divider } from "native-base";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

const Modals = (props) => {
  const [value, setValue] = React.useState("one");

  const data = props.bid;
  const parcel_details = props.parcel_details;
  return (
    <View style={style.modal_container}>
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
                uri: data.logo,
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
                {data.business_name}
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
                {data.email}
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
              <Text style={[style.text, { marginBottom: "4%" }]}>
                {data.location}
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
                Phone Number
              </Text>
              <Text style={[style.text, { marginBottom: "4%" }]}>
                {data.phone}
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
                {data.address}
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
                {data.contact_person}
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
            <Text style={[style.text_16, { marginBottom: 20 }]}>
              Hi {parcel_details.senders_name},
            </Text>
            <Text style={[style.text_16_normal, { marginBottom: "7%" }]}>
              you have selected{" "}
              <Text style={[style.text_16]}>{data.business_name}</Text> to
              deliver your package to
              <Text style={[style.text_16]}>
                {" "}
                {parcel_details.recipient_name}
              </Text>{" "}
              at {parcel_details.delivery_address}
              <Text style={[style.text_16]}> ₦{data.price} </Text>
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
                Pay with wallet
              </Radio>
              <Radio aria-label="t2" value="two" colorScheme="green" my={1}>
                Pay with Paystack
              </Radio>
              {/* <Radio aria-label="t2" value="three" colorScheme="green" my={1}>
                Pay on delivery
              </Radio> */}
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
                props.navigation.navigate("dispatch", {
                  screen: "cancelRequest",
                  params: { id: parcel_details._id },
                });
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
