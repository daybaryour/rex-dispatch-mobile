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
    console.log(this.props.backAction);
    return (
      <>
        {/* <SafeAreaView style={{ backgroundColor: colors.navy_blue }} />
        <StatusBar barStyle="light-content" /> */}
        <Head
          statusBarProps={{ barStyle: "light-content" }}
          containerStyle={{
            backgroundColor: colors.navy_blue,
            //   justifyContent: "space-around",
            paddingVertical: "7%",
            paddingHorizontal: "6%",
          }}
          leftComponent={
            <>
              {this.props.icon == "menu" ? (
                <TouchableOpacity>
                  <Image
                    source={require("../../../assets/icons/menu.png")}
                    style={{ width: 20, height: 12, marginTop: "4%" }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => this.props.backAction}>
                  <Image
                    source={require("../../../assets/icons/back.png")}
                    style={{ width: 8, height: 14, marginTop: "4%" }}
                  />
                </TouchableOpacity>
              )}
            </>
          }
          centerComponent={
            <>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.white,
                  fontWeight: "500",
                }}
              >
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
