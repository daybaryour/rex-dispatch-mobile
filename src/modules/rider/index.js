import React, { Component } from "react";

//react navigation
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

export class Riders extends Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="login">
          {/* <Drawer.Screen name="login" component={Login} /> */}
          {/* <Drawer.Screen name="register" component={Register} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default Riders;
