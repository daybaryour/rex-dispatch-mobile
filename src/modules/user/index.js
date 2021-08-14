import React, { useState, useEffect } from "react";

//react navigation
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./auth/login";
import Register from "./auth/register";
import Terms from "./auth/terms";
import ForgotPassword from "./auth/forgotPassword";
import ResetPassword from "./auth/resetPassword";
import Verification from "./auth/verification";
import AuthSuccess from "./auth/authSuccess";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";
import Spinner from "react-native-spinkit";

//redux
import { useSelector } from "react-redux";
import colors from "../../helpers/color";

const Users = (props) => {
  const [isAuth, setIsAuth] = useState(null);
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  useEffect(async () => {
    setIsAuth(await AsyncStorage.getItem("isAuth"));
  }, []);

  const AuthStack = () => {
    return (
      //auth stack
      <Stack.Navigator
        screenOptions={{ gestureEnabled: false }}
        headerMode="none"
        // initialRouteName="resetPassword"
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="terms" component={Terms} />
        <Stack.Screen name="forgotPassword" component={ForgotPassword} />
        <Stack.Screen name="resetPassword" component={ResetPassword} />
        <Stack.Screen name="verification" component={Verification} />
        <Stack.Screen name="authSuccess" component={AuthSuccess} />
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

  //   const isAuth = useSelector((state) => state.auth.isLoggedin);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuth == "customer" ? "dispatch" : "auth"}
        screenOptions={{ gestureEnabled: false }}
        headerMode="none"
      >
        <Stack.Screen name="dispatch" component={DispatchStack} />
        <Stack.Screen name="wallet" component={Wallet} />
        <Stack.Screen name="track" component={TrackStack} />
        <Stack.Screen name="history" component={HistoryStack} />
        <Stack.Screen name="settings" component={SettingsStack} />

        <Stack.Screen name="auth" component={AuthStack} />

        {/* delete during integration  */}
        {/* <Stack.Screen name="login" component={Login} />
              <Stack.Screen name="register" component={Register} />
              <Stack.Screen name="terms" component={Terms} />
              <Stack.Screen name="verification" component={Verification} /> */}
        {/* <Stack.Screen name="card" component={Card} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Users;
