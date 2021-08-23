import React, { useState } from "react";
import { Divider } from "native-base";
import { View, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";
import BidModal from "./bidModal";

const SingleRequest = (props) => {
  const [showModal, toggle_showModal] = useState(false);
  const data = props.route.params.data;

  return (
    <View style={style.body}>
      <Header
        icon={"back"}
        title={"Dispatch Requests"}
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
                  {data.package_type}
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: 13 }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Pickup Address
                </Text>
                <Text style={[style.text_16, { marginVertical: 10 }]}>
                  {data.pickup_address}
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: 13 }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Nearest Landmark
                </Text>
                <Text style={[style.text_16, { marginVertical: 10 }]}>
                  {data.nearest_landmark}
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: 13 }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Sender’s Name
                </Text>
                <Text style={[style.text_16, { marginVertical: 10 }]}>
                  {data.senders_name}
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: 13 }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Phone Number
                </Text>
                <Text style={[style.text_16, { marginVertical: 10 }]}>
                  {data.senders_phone}
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
                  {data.delivery_address}
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: 13 }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Nearest Landmark
                </Text>
                <Text style={[style.text_16, { marginVertical: 10 }]}>
                  {data.notable_landmark}
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: 13 }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Receiver’s Name
                </Text>
                <Text style={[style.text_16, { marginVertical: 10 }]}>
                  {data.recipient_name}
                </Text>
                <Divider />
              </View>
              <View style={{ marginBottom: 13 }}>
                <Text style={[style.text, { color: colors.pure_ash }]}>
                  Phone Number
                </Text>
                <Text style={[style.text_16, { marginVertical: 10 }]}>
                  {data.recipient_phone}
                </Text>
                <Divider />
              </View>
              {data.additional_information ? (
                <View style={{ marginBottom: 13 }}>
                  <Text style={[style.text, { color: colors.pure_ash }]}>
                    Additional Information
                  </Text>
                  <Text style={[style.text_16, { marginVertical: 10 }]}>
                    {data.additional_information}
                  </Text>
                  <Divider />
                </View>
              ) : (
                <></>
              )}
            </View>
          </View>

          <Button
            block
            title="Place Bid"
            buttonStyle={[style.btn_success, { marginTop: 33 }]}
            titleStyle={style.btn_text}
            onPress={() => {
              props.navigation.navigate("placeBid");
            }}
          />
        </View>
      </ScrollView>
      <BidModal
        showModal={showModal}
        toggle_showModal={toggle_showModal}
        navigation={props.navigation}
      />
    </View>
  );
};

export default SingleRequest;
