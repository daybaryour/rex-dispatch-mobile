import React from "react";
import { KeyboardAvoidingView, Keyboard, Text } from "react-native";
import { HStack, Center, Pressable } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
//styles
import style from "../../../assets/styles/general/style";
import colors from "../../../helpers/color";

class Footer extends React.Component {
  state = {
    isKeyboardVisible: false,
  };

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({
      isKeyboardVisible: true,
    });
  };

  _keyboardDidHide = () => {
    this.setState({
      isKeyboardVisible: false,
    });
  };

  render() {
    const location = this.props.location;
    const navigation = this.props.navigation;
    const isKeyboardVisible = this.state.isKeyboardVisible;
    return (
      <>
        {isKeyboardVisible ? (
          <></>
        ) : (
          <KeyboardAvoidingView>
            <HStack
              bg={colors.ash_bg}
              alignItems="center"
              safeAreaBottom
              shadow={6}
            >
              <Pressable
                opacity={location === "wallet" ? 1 : 0.4}
                py={2}
                flex={1}
                onPress={() => navigation.navigate("wallet")}
              >
                <Center>
                  <Icon
                    style={{
                      color: colors.navy_blue,
                      fontSize: 20,
                    }}
                    name={"wallet"}
                  />

                  <Text style={[style.text_12, { color: colors.navy_blue }]}>
                    Wallet
                  </Text>
                </Center>
              </Pressable>
              <Pressable
                opacity={location === "track" ? 1 : 0.4}
                py={2}
                flex={1}
                onPress={() => navigation.navigate("track")}
              >
                <Center>
                  <Icon
                    style={{
                      color: colors.navy_blue,
                      fontSize: 20,
                    }}
                    name={"compass"}
                  />

                  <Text style={[style.text_12, { color: colors.navy_blue }]}>
                    Track
                  </Text>
                </Center>
              </Pressable>
              <Pressable
                opacity={location === "dispatch" ? 1 : 0.4}
                py={2}
                flex={1}
                onPress={() => navigation.navigate("dispatch")}
              >
                <Center>
                  <Icon
                    style={{
                      color: colors.navy_blue,
                      fontSize: 20,
                    }}
                    name={"add-circle-outline"}
                  />

                  <Text style={[style.text_12, { color: colors.navy_blue }]}>
                    New
                  </Text>
                </Center>
              </Pressable>
              <Pressable
                opacity={location === "history" ? 1 : 0.4}
                py={2}
                flex={1}
                onPress={() => navigation.navigate("history")}
              >
                <Center>
                  <Icon
                    style={{
                      color: colors.navy_blue,
                      fontSize: 20,
                    }}
                    name={"time"}
                  />

                  <Text
                    style={[style.text_12, { color: colors.navy_blue }]}
                    {...{ fontWeight: "500" }}
                  >
                    History
                  </Text>
                </Center>
              </Pressable>
              <Pressable
                opacity={location === "settings" ? 1 : 0.4}
                py={2}
                flex={1}
                onPress={() => navigation.navigate("settings")}
              >
                <Center>
                  <Icon
                    style={{
                      color: colors.navy_blue,
                      fontSize: 20,
                    }}
                    name={"cog"}
                  />
                  <Text style={[style.text_12, { color: colors.navy_blue }]}>
                    Settings
                  </Text>
                </Center>
              </Pressable>
            </HStack>
          </KeyboardAvoidingView>
        )}
      </>
    );
  }
}

export default Footer;
