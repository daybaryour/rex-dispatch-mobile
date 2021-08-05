import React, { useState } from "react";

// import Login from "./auth/login";
// import Register from "./auth/register";
// import Verification from "./auth/verification";

//react navigation
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./auth/login";
import Register from "./auth/register";
import Terms from "./auth/terms";
import Verification from "./auth/verification";
// import Deliverables from "./dispatch/deliverables";
// import SingleDeliverable from "./dispatch/singleDeliverable";
// import ConfirmDelivery from "./dispatch/confirmDelivery";
// import DispatchSuccess from "./dispatch/dispatchSuccess";
import History from "./history/history";
import SingleHistory from "./history/singleHistory";
import Settings from "./settings/settings";
import Profile from "./settings/profile";
import Password from "./settings/password";
import Support from "./settings/support";
import AuthSuccess from "./auth/authSuccess";
import NewVehicle from "./fleet/newVehicle";
import NewVehicleSuccess from "./fleet/newVehicleSuccess";
import Subscriptions from "./settings/subscriptions/subscriptions";
import Requests from "./requests/requests";
import SingleRequest from "./requests/singleRequest";
import BidSuccess from "./requests/bidSuccess";
import Fleet from "./fleet/fleet";
import VehicleDetails from "./fleet/vehicleDetails";
import Bids from "./bids/bids";
import BidDetails from "./bids/bidDetails";
import MySubscriptions from "./settings/subscriptions/mySubscriptions";
import Wallet from "./settings/wallet/wallet";

//redux
import { useSelector } from "react-redux";

const Business = () => {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  const AuthStack = () => {
    return (
      //auth stack
      <Stack.Navigator
        screenOptions={{ gestureEnabled: false }}
        headerMode="none"
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="terms" component={Terms} />
        <Stack.Screen name="verification" component={Verification} />
        <Stack.Screen name="authSuccess" component={AuthSuccess} />
      </Stack.Navigator>
    );
  };

  const RequestStack = () => {
    return (
      <Stack.Navigator
        headerMode="none"
        initialRouteName="allRequests"
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen name="allRequests" component={Requests} />
        <Stack.Screen name="singleRequest" component={SingleRequest} />
        <Stack.Screen name="bidSuccess" component={BidSuccess} />
      </Stack.Navigator>
    );
  };

  const DispatchStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="dispatchHistory"
        //   screenOptions={{ gestureEnabled: false }}
        headerMode="none"
      >
        <Stack.Screen name="dispatchHistory" component={History} />
        <Stack.Screen name="singleHistory" component={SingleHistory} />
      </Stack.Navigator>
    );
  };

  const BidsStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="bids"
        //   screenOptions={{ gestureEnabled: false }}
        headerMode="none"
      >
        <Stack.Screen name="bids" component={Bids} />
        <Stack.Screen name="bidDetails" component={BidDetails} />
      </Stack.Navigator>
    );
  };

  const FleetStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="fleet"
        //   screenOptions={{ gestureEnabled: false }}
        headerMode="none"
      >
        <Stack.Screen name="fleet" component={Fleet} />
        <Stack.Screen name="vehicleDetails" component={VehicleDetails} />
        <Stack.Screen name="newVehicle" component={NewVehicle} />
        <Stack.Screen name="newVehicleSuccess" component={NewVehicleSuccess} />
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
        <Stack.Screen name="mySubscriptions" component={MySubscriptions} />
        <Stack.Screen name="subscriptions" component={Subscriptions} />
        <Stack.Screen name="wallet" component={Wallet} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {/* {isAuth ? ( */}
      <Stack.Navigator
        initialRouteName={isAuth ? "requests" : "auth"}
        screenOptions={{ gestureEnabled: false }}
        headerMode="none"
      >
        {/* delete during integration  */}
        <Stack.Screen name="auth" component={AuthStack} />
        <Stack.Screen name="dispatch" component={DispatchStack} />
        <Stack.Screen name="bids" component={BidsStack} />
        <Stack.Screen name="requests" component={RequestStack} />
        <Stack.Screen name="fleet" component={FleetStack} />
        <Stack.Screen name="settings" component={SettingsStack} />
      </Stack.Navigator>
      {/* ) : (
        <AuthStack />
      )} */}
    </NavigationContainer>
  );
};

export default Business;
