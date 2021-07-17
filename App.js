/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";

//native base
import { NativeBaseProvider, extendTheme } from "native-base";
import "react-native-gesture-handler";
import getTheme from "./src/assets/styles/native-base-theme/components";
import material from "./src/assets/styles/native-base-theme/variables/material";

//react navigation
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Users from "./src/modules/user ";
import Onboarding from "./src/modules/onboarding";
import Business from "./src/modules/business";
import Riders from "./src/modules/rider";

class App extends React.Component {
  state = {
    route: "user",
  };

  onRouteChange = (data) => {
    this.setState({
      route: data,
    });
  };

  render() {
    const theme = extendTheme({
      Button: {
        // Can simply pass default props to change default behaviour of components.
        baseStyle: {
          rounded: "md",
          _focus: "#000",
        },
        defaultProps: {
          colorScheme: "red",
          _focus: "#000",
        },
      },
    });

    const route = this.state.route;
    return (
      <NativeBaseProvider>
        {route == "user" ? (
          <Users />
        ) : route == "business" ? (
          <Business />
        ) : route == "rider" ? (
          <Riders />
        ) : (
          <Onboarding onRouteChange={this.onRouteChange} />
        )}
      </NativeBaseProvider>
    );
  }
}

export default App;
