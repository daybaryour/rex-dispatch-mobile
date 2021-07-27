import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Header as Head } from "react-native-elements";
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

class Header extends Component {
  render() {
    return (
      <>
        {/* <SafeAreaView style={{ backgroundColor: colors.navy_blue }} />
        <StatusBar barStyle="light-content" /> */}
        <Head
          statusBarProps={{ barStyle: "light-content" }}
          containerStyle={{
            backgroundColor: colors.navy_blue,
            //   justifyContent: "space-around",
            paddingVertical: 28,
            paddingHorizontal: 24,
          }}
          leftComponent={
            <>
              {this.props.icon == "back" ? (
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Image
                    source={require("../../../assets/icons/back.png")}
                    style={{ width: 8, height: 14, marginTop: "4%" }}
                  />
                </TouchableOpacity>
              ) : (
                <Image
                  source={require("../../../assets/logos/logo_white.png")}
                  style={{ width: 20, height: 20 }}
                />
              )}
            </>
          }
          centerComponent={
            <>
              <Text style={[style.text_16, { color: colors.white }]}>
                {this.props.title}
              </Text>
            </>
          }
          // rightComponent = {

          // }
        ></Head>
      </>
    );
  }
}

export default Header;
