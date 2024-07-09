import React, { useState, useEffect } from "react";
import { StatusBar, AppState } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  DefaultTheme,
  useNavigation,
} from "@react-navigation/native";

import AppStack from "./AppStack/AppStack";
import SplashScreen from "react-native-splash-screen";

const RootNavigator = () => {
  const Stack = createStackNavigator();

  useEffect(() => {
    console.log("SpalsjRunning");
    const timer = setTimeout(() => {
      SplashScreen.hide(); // Hide splash screen after two seconds
    }, 2000);

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

;

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#yourStatusBarColor"
        barStyle="light-content"
      />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AppStack" component={AppStack} />
        {/* Add your Login screen here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
