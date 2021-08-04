import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

const BidSuccess = (props) => {
  return (
    <View style={style.body}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <View style={{ alignItems: "center" }}>
          <View style={{ marginTop: "23%" }}>
            <Image
              source={require("../../../assets/images/bulb_man.png")}
              style={{ width: 210, height: 210, marginVertical: 20 }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={[style.text_20]}>Your Bid has been posted</Text>

            <Text
              style={[
                style.text,
                {
                  fontWeight: "400",
                  textAlign: "center",
                  marginTop: 34,
                  marginBottom: 20,
                },
              ]}
            >
              A notification will be sent to you if you won this bid
            </Text>
          </View>
        </View>
        <Button
          block
          title="Make Another Bid"
          buttonStyle={[style.btn_success, { marginTop: 55 }]}
          titleStyle={style.btn_text}
          onPress={() => props.navigation.navigate("allRequests")}
        />
        <Text
          style={[style.text_16, { textAlign: "center", color: colors.lemon }]}
          onPress={() => props.navigation.navigate("history")}
        >
          Manage your deliverables
        </Text>
      </ScrollView>
    </View>
  );
};

export default BidSuccess;
