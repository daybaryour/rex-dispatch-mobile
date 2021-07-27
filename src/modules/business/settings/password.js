import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Input } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button } from "react-native-elements";
//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

//partials
import Header from "../../partials/header";

const Password = (props) => {
  const [hide_password, toggle_hide_password] = useState(true);

  return (
    <View style={style.body}>
      <Header
        icon={"back"}
        title={"Security Settings"}
        navigation={props.navigation}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={"handled"}
        style={style.container}
      >
        <Text style={style.form_label}>Password</Text>

        <Input
          placeholder="Enter old password"
          {...style.form_control}
          type={!hide_password ? "text" : "password"}
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

        <Text style={style.form_label}>New Password</Text>

        <Input
          placeholder="Enter new password"
          {...style.form_control}
          type={"password"}
          _focus={colors.border_black}
          //   InputRightElement={
          //     <Icon
          //       style={{ marginHorizontal: 15 }}
          //       name={hide_password ? "eye" : "eye-slash"}
          //       onPress={() => {
          //         // toggle_hide_password(!hide_password);
          //       }}
          //     />
          //   }
        />

        <Text style={style.form_label}>Confirm New Password</Text>

        <Input
          placeholder="Confirm new password"
          {...style.form_control}
          type={"password"}
          _focus={colors.border_black}
          //   InputRightElement={
          //     <Icon
          //       style={{ marginHorizontal: 15 }}
          //       name={hide_password ? "eye" : "eye-slash"}
          //       onPress={() => {
          //         // toggle_hide_password(!hide_password);
          //       }}
          //     />
          //   }
        />

        <Button
          block
          title="Update Password"
          buttonStyle={[style.btn_success]}
          titleStyle={style.btn_text}
        />
      </ScrollView>
    </View>
  );
};

export default Password;
