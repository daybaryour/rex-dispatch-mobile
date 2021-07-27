import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";

//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

const DispatchSuccess = (props) => {
  return (
    <View style={style.body}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <View style={{ alignItems: "center" }}>
          <View style={{ marginTop: "23%" }}>
            <Image
              source={require("../../../assets/images/thumbs_up.png")}
              style={{ width: 210, height: 210, marginVertical: 25 }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={[style.text_20]}>Congratulations!</Text>
            <Text
              style={[
                style.text,
                {
                  textAlign: "center",
                  marginTop: 34,
                  marginBottom: 20,
                  paddingHorizontal: 25,
                },
              ]}
            >
              Your have successfully delivered this parcel
            </Text>
          </View>
        </View>
        <Button
          block
          title="See other deliverables"
          buttonStyle={[style.btn_success]}
          titleStyle={style.btn_text}
          onPress={() => props.navigation.navigate("deliverables")}
        />
      </ScrollView>
    </View>
  );
};

export default DispatchSuccess;
