/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";

//native base
import { NativeBaseProvider } from "native-base";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Users from "./src/modules/user";
import Onboarding from "./src/modules/onboarding";
import Business from "./src/modules/business";
import Riders from "./src/modules/rider";

class App extends React.Component {
  state = {
    route: "onboard",
  };

  //   componentDidMount() {
  //     this.getUserType();
  //   }

  //   getUserType = async () => {
  //     const route = await AsyncStorage.getItem("user_type");
  //     this.setState({
  //       route: route,
  //     });
  //   };

  onRouteChange = (route) => {
    this.setState({
      route: route,
    });
  };

  render() {
    const route = this.state.route;
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
