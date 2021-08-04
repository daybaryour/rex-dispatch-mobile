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

import Users from "./src/modules/user";
import Onboarding from "./src/modules/onboarding";
import Business from "./src/modules/business";
import Riders from "./src/modules/rider";
import setupAxios from "./src/redux/setupAxios";

setupAxios(axios, store);

class App extends React.Component {
  state = {
    route: "onboard",
  };

  onRouteChange = (data) => {
    this.setState({
      route: data,
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
