import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import JoinScreen from "../../screens/auth/JoinScreen";
import Login from "../../screens/auth/Login";
import Signup from "../../screens/auth/Signup";
import ProfileSetup from "../../screens/auth/ProfileSetup";
import LostPassword from "../../screens/auth/LostPassword";
import ResetPassword from "../../screens/auth/ResetPassword";
import GetStarted from "../../screens/auth/GetStarted";


const AppStack = () => {
  const Stack = createStackNavigator();



 



  return (
    <Stack.Navigator
      //  screenOptions={{ headerShown: false }
      screenOptions={{
        headerShown: false,

        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress,
            },
          };
        },
      }}
    >
          <Stack.Screen name={"GetStarted"} component={GetStarted} />
         <Stack.Screen name={"Join"} component={JoinScreen} />
          <Stack.Screen name={"Login"} component={Login} />
          <Stack.Screen name={"Signup"} component={Signup} />
          <Stack.Screen name={"ProfileSetup"} component={ProfileSetup} />
          <Stack.Screen name={"LostPassword"} component={LostPassword} />
          <Stack.Screen name={"ResetPassword"} component={ResetPassword} />

     
    </Stack.Navigator>
  );
};
export default AppStack;
