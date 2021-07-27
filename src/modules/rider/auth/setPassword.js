import React, { useRef, useState } from "react";
import { FormControl, Image, Input } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import { View, ScrollView, Text } from "react-native";

import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

const SetPassword = (props) => {
  const [hide_password, toggle_hide_password] = useState(true);

  return (
    //
    <View style={style.body}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <View>
          <Image
            source={require("../../../assets/logos/logo.png")}
            style={style.top_logo}
            alt="react-native"
            size={12}
          />
        </View>
        <View>
          <FormControl>
            <Text style={style.form_label}>Set Password</Text>

            <Input
              placeholder="Enter password"
              {...style.form_control}
              type={!hide_password ? "text" : "password"}
              style={{ borderBottomWidth: 0 }}
              _focus={colors.border_black}
              InputRightElement={
                <Icon
                  style={{ marginHorizontal: 15 }}
                  name={hide_password ? "eye" : "eye-slash"}
                  onPress={() => {
                    toggle_hide_password(!hide_password);
                  }}
                />
              }
            />

            <Text style={style.form_label}>Confirm Password</Text>

            <Input
              placeholder="Enter password"
              {...style.form_control}
              type={!hide_password ? "text" : "password"}
              style={{ borderBottomWidth: 0 }}
              _focus={colors.border_black}
              InputRightElement={
                <Icon
                  style={{ marginHorizontal: 15 }}
                  name={hide_password ? "eye" : "eye-slash"}
                  onPress={() => {
                    toggle_hide_password(!hide_password);
                  }}
                />
              }
            />

            <Button
              block
              title="Continue"
              buttonStyle={[style.btn_success]}
              titleStyle={style.btn_text}
              onPress={() => props.navigation.navigate("dispatch")}
            />
          </FormControl>
        </View>
      </ScrollView>
    </View>
  );
};

export default SetPassword;
