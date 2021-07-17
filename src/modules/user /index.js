import React, { Component } from "react";

import { View } from "react-native";

//react navigation
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./auth/login";
import Register from "./auth/register";
import Terms from "./auth/terms";
import Verification from "./auth/verification";
import Card from "./profile/card";
import CreateDispatch from "./dispatch/createDispatch";
import ChooseProvider from "./dispatch/chooseProvider";

export class Users extends Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="chooseProvider">
          <Drawer.Screen name="login" component={Login} />
          <Drawer.Screen name="register" component={Register} />
          <Drawer.Screen name="terms" component={Terms} />
          <Drawer.Screen name="verification" component={Verification} />
          <Drawer.Screen name="card" component={Card} />
          <Drawer.Screen name="createDispatch" component={CreateDispatch} />
          <Drawer.Screen name="chooseProvider" component={ChooseProvider} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default Users;
