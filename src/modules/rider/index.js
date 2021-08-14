import React, { useState, useEffect } from "react";

import Login from "./auth/login";
// import Register from "./auth/register";
import Verification from "./auth/verification";

//react navigation
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthSuccess from "./auth/authSuccess";
import SetPassword from "./auth/setPassword";
import Deliverables from "./dispatch/deliverables";
import SingleDeliverable from "./dispatch/singleDeliverable";
import ConfirmDelivery from "./dispatch/confirmDelivery";
import DispatchSuccess from "./dispatch/dispatchSuccess";
import History from "./history/history";
import SingleHistory from "./history/singleHistory";
import Settings from "./settings/settings";
import Profile from "./settings/profile";
import Password from "./settings/password";
import Support from "./settings/support";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Riders = () => {
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
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="verification" component={Verification} />
        <Stack.Screen name="authSuccess" component={AuthSuccess} />
        <Stack.Screen name="setPassword" component={SetPassword} />
      </Stack.Navigator>
    );
  };

  const DispatchStack = () => {
    return (
      <Stack.Navigator
        headerMode="none"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen name="deliverables" component={Deliverables} />
        <Stack.Screen name="singleDeliverable" component={SingleDeliverable} />
        <Stack.Screen name="confirmDelivery" component={ConfirmDelivery} />
        <Stack.Screen name="dispatchSuccess" component={DispatchSuccess} />
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
      <Stack.Navigator
        initialRouteName={isAuth == "rider" ? "dispatch" : "auth"}
        screenOptions={{ gestureEnabled: false }}
        headerMode="none"
      >
        <Stack.Screen name="auth" component={AuthStack} />
        <Stack.Screen name="dispatch" component={DispatchStack} />
        <Stack.Screen name="history" component={HistoryStack} />
        <Stack.Screen name="settings" component={SettingsStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Riders;
