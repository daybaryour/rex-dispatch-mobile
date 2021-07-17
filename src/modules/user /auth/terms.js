import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
  Form,
  Item,
  Input,
  Label,
  Icon,
  Thumbnail,
  Right,
} from "native-base";
import { View, ScrollView } from "react-native";
import { Button } from "react-native-elements";

import authStyle from "../../../assets/styles/general/authStyle";
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

const Terms = (props) => {
  return (
    <>
      <View style={style.body}>
        <View
          style={[style.container, { marginTop: "30%", marginBottom: "5%" }]}
        >
          <Text style={style.heading}>Terms of Service</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.navy_blue,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            alignItems: "flex-end",
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={[style.container]}
          >
            <View>
              <Text
                style={[
                  style.sub_heading,
                  {
                    color: colors.white,
                    marginTop: "7%",
                    marginBottom: "2%",
                  },
                ]}
              >
                Privacy Policy
              </Text>
              <Text style={[style.text, { color: colors.grey }]}>
                Vestibulum eu quam nec neque pellentesque efficitur id eget
                nisl. Proin porta est convallis lacus blandit pretium sed non
                enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna
                bibendum ultricies laoreet, augue eros luctus sapien, ut euismod
                leo tortor ac enim. In hac habitasse platea dictumst. Sed cursus
                venenatis tellus, non lobortis diam volutpat sit amet. Sed
                tellus augue, hendrerit eu rutrum in, porttitor at metus. Mauris
                ac hendrerit metus. Phasellus mattis lectus commodo felis
                egestas, id accumsan justo ultrices. Phasellus aliquet, sem a
                placerat dapibus, enim purus dictum lacus, nec ultrices ante dui
                ac ante. Phasellus placerat, urna.
              </Text>
            </View>
            <View>
              <Text
                style={[
                  style.sub_heading,
                  {
                    color: colors.white,
                    marginTop: "7%",
                    marginBottom: "2%",
                  },
                ]}
              >
                Terms & Conditions
              </Text>
              <Text
                style={[
                  style.text,
                  { color: colors.grey, marginBottom: "15%" },
                ]}
              >
                Vestibulum eu quam nec neque pellentesque efficitur id eget
                nisl. Proin porta est convallis lacus blandit pretium sed non
                enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna
                bibendum ultricies laoreet, augue eros luctus sapien, ut euismod
                leo tortor ac enim. In hac habitasse platea dictumst. Sed cursus
                venenatis tellus, non lobortis diam volutpat sit amet. Sed
                tellus augue, hendrerit eu rutrum in, porttitor at metus. Mauris
                ac hendrerit metus. Phasellus mattis lectus commodo felis
                egestas, id accumsan justo ultrices. Phasellus aliquet, sem a
                placerat dapibus, enim purus dictum lacus, nec ultrices ante dui
                ac ante. Phasellus placerat, urna.
              </Text>
            </View>
            <Button
              block
              title="I Understand & Agree"
              buttonStyle={[style.btn_success]}
              titleStyle={style.btn_text}
              onPress={() => props.navigation.navigate("register")}
            />
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Terms;
