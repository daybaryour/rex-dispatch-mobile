import React from "react";
import { View, Text, ScrollView, Platform } from "react-native";

import { Button } from "react-native-elements";
import { Radio, TextArea } from "native-base";

//styles
import style from "../../../assets/styles/general/style";
import tabStyle from "../../../assets/styles/general/tabStyle";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";

const CancelRequest = () => {
  const [value, setValue] = React.useState("one");

  return (
    <View style={style.body}>
      <Header icon={"back"} title={"Cancel Request"} />
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <Text style={[style.text_20, { marginTop: "5%" }]}>
          Please select the reason for cancellation:
        </Text>
        <View style={{ marginTop: "8%", marginBottom: "25%" }}>
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
              value="one"
              colorScheme="green"
              _text={{
                color: colors.text_black,
                fontSize: 16,
                fontWeight: Platform.OS === "ios" ? "500" : "bold",
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
              my={1.5}
            >
              Delivery not needed
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
              Delivery Time
            </Radio>
            <Radio
              aria-label="t2"
              value="not going again"
              colorScheme="green"
              _text={{
                color: colors.text_black,
                fontSize: 16,
                fontWeight: Platform.OS === "ios" ? "500" : "bold",
              }}
              my={1.5}
            >
              Not going again
            </Radio>
            <Radio
              aria-label="t2"
              value="too expensive"
              colorScheme="green"
              _text={{
                color: colors.text_black,
                fontSize: 16,
                fontWeight: Platform.OS === "ios" ? "500" : "bold",
              }}
              my={1.5}
            >
              Too expensive
            </Radio>
            <Radio
              aria-label="t2"
              value="others"
              colorScheme="green"
              _text={{
                color: colors.text_black,
                fontSize: 16,
                fontWeight: Platform.OS === "ios" ? "500" : "bold",
              }}
              my={1.5}
            >
              Others
            </Radio>
          </Radio.Group>
          <View style={{ marginTop: "5%", marginBottom: "30%" }}>
            {/* come back  make sure focus works */}
            <TextArea
              aria-label="t1"
              {...style.form_control}
              borderWidth={0}
              backgroundColor={"rgba(186, 199, 206, 0.2)"}
              h={106}
              _focus={colors.border_black}
              numberOfLines={6}
              placeholder="Additional comments..."
            />
          </View>
          <Button
            block
            title="Cancel Delivery"
            buttonStyle={[style.btn_success, { marginTop: "10%" }]}
            titleStyle={style.btn_text}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CancelRequest;
