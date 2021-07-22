import React, { useState } from "react";

import { View } from "react-native";

//react navigation
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./auth/login";
import Register from "./auth/register";
import Terms from "./auth/terms";
import Verification from "./auth/verification";
import Card from "./settings/card";
import CreateDispatch from "./dispatch/createDispatch";
import ChooseProvider from "./dispatch/chooseProvider";
import PayOnDelivery from "./dispatch/payOnDelivery";
import CancelRequest from "./dispatch/cancelRequest";
import OrderSuccess from "./dispatch/orderSuccess";
import Wallet from "./wallet/wallet";
import TrackDispatch from "./track/track";
import DeliverySuccess from "./track/deliverySuccess";
import History from "./history/history";
import SingleHistory from "./history/singleHistory";
import Settings from "./settings/settings";
import Profile from "./settings/profile";
import Password from "./settings/password";
import Support from "./settings/support";

const Users = (props) => {
  const [isAuth] = useState(true);

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  const AuthStack = () => {
    return (
      //auth stack
      <Stack.Navigator
        screenOptions={{ gestureEnabled: false }}
        headerMode="none"
      >
        <Drawer.Screen name="login" component={Login} />
        <Drawer.Screen name="register" component={Register} />
        <Drawer.Screen name="terms" component={Terms} />
        <Drawer.Screen name="verification" component={Verification} />
      </Stack.Navigator>
    );
  };

  const DispatchStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="createDispatch"
        //   screenOptions={{ gestureEnabled: false }}
        headerMode="none"
      >
        {/* <Stack.Screen name="card" component={Card} /> */}
        <Stack.Screen
          name="createDispatch"
          component={CreateDispatch}
          gestureEnabled={false}
        />
        <Stack.Screen name="chooseProvider" component={ChooseProvider} />
        <Stack.Screen name="payOnDelivery" component={PayOnDelivery} />
        <Stack.Screen name="cancelRequest" component={CancelRequest} />
        <Stack.Screen name="orderSuccess" component={OrderSuccess} />
      </Stack.Navigator>
    );
  };

  const TrackStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="track"
        //   screenOptions={{ gestureEnabled: false }}
        headerMode="none"
      >
        <Stack.Screen name="track" component={TrackDispatch} />
        <Stack.Screen name="deliverySuccess" component={DeliverySuccess} />
      </Stack.Navigator>
    );
  };

  const HistoryStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="history"
        //   screenOptions={{ gestureEnabled: false }}
        headerMode="none"
      >
        <Stack.Screen name="history" component={History} />
        <Stack.Screen name="singleHistory" component={SingleHistory} />
      </Stack.Navigator>
    );
  };

  const SettingsStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="settings"
        //   screenOptions={{ gestureEnabled: false }}
        headerMode="none"
      >
        <Stack.Screen name="settings" component={Settings} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="password" component={Password} />
        <Stack.Screen name="support" component={Support} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {isAuth ? (
        <Drawer.Navigator
          initialRouteName="settings"
          screenOptions={{ gestureEnabled: false }}
        >
          <Drawer.Screen name="dispatch" component={DispatchStack} />
          <Drawer.Screen name="wallet" component={Wallet} />
          <Drawer.Screen name="track" component={TrackStack} />
          <Drawer.Screen name="history" component={HistoryStack} />
          <Drawer.Screen name="settings" component={SettingsStack} />
        </Drawer.Navigator>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Users;
