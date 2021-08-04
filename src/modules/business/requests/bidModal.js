import React, { useState } from "react";
import { View, Text } from "react-native";

import Modal from "react-native-modal";
import { Button } from "react-native-elements";
import { Input } from "native-base";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

const BidModal = (props) => {
  return (
    <View style={style.modal_container}>
      <Modal
        isVisible={props.showModal}
        animationIn={"slideInLeft"}
        animationOut={"slideOutLeft"}
        onBackdropPress={() => props.toggle_showModal(false)}
      >
        <View style={[style.modalContent, { borderRadius: 3 }]}>
          <View style={style.container}>
            <Text style={[style.text_18, { textAlign: "center" }]}>
              Make a Bid
            </Text>
            <Text style={style.form_label}>Amount</Text>
            <Input
              {...style.form_control}
              _focus={colors.border_black}
              placeholder="Please enter amount"
            />

            <Button
              block
              title="Complete Bid"
              buttonStyle={[style.btn_success, { marginTop: 40 }]}
              titleStyle={style.btn_text}
              onPress={() => {
                props.toggle_showModal(false);
                props.navigation.navigate("bidSuccess");
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BidModal;
