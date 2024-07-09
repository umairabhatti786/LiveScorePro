import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Tabs from "../BottomTabs/Tabs";
import SplashScreen from "react-native-splash-screen";

import HomeScreen from "../../screens/main/HomeScreen";
import MessageScreen from "../../screens/main/MessageScreen";
import ProfileScreen from "../../screens/main/ProfileScreen";
import SearchScreen from "../../screens/main/SearchScreen";
import BottomTab from "../BottomTabs";
import Chat from "../../screens/main/MessageScreen/Chat";
import Settings from "../../screens/main/SettingsScreen";
import JoinScreen from "../../screens/auth/JoinScreen";
import Login from "../../screens/auth/Login";
import Signup from "../../screens/auth/Signup";
import ProfileSetup from "../../screens/auth/ProfileSetup";
import LostPassword from "../../screens/auth/LostPassword";
import ResetPassword from "../../screens/auth/ResetPassword";
import Notifications from "../../screens/main/NotificationScreen";
import SentRequest from "../../screens/main/NotificationScreen/SentRequest";
import Post from "../../screens/main/PostScreen";
import OthersProfile from "../../screens/main/SearchScreen/OthersProfile";
import EditProfile from "../../screens/main/ProfileScreen/EditProfile";
import AddStatus from "../../screens/main/AddStatus";
import EditGifs from "../../screens/main/EditGifs";
import ConfirmationCode from "../../screens/auth/ConfirmationCode";
import BlockedAccount from "../../screens/main/BlockedAccount";
import ChangeEmail from "../../screens/main/ChangeEmail";
import ChangePassword from "../../screens/main/ChangePassword";
import AccountDeletion from "../../screens/main/AccountDeletion";
import SearchMember from "../../screens/main/SearchMember";
import NewMessage from "../../screens/main/NewMessage";
import ResetPasswordConfirmation from "../../screens/auth/ResetPasswordConfirmation";
import { useDispatch, useSelector } from "react-redux";
import {
  getRemember,
  getUserData,
  setNotificationAlert,
  setRemember,
  setToken,
  setUserData,
} from "../../redux/reducers/authReducer";
import {
  AUTH,
  REMEMBER,
  StorageServices,
  TOKEN,
} from "../../utils/hooks/StorageServices";
import OneSignal from "react-native-onesignal";
import ChannelScreen from "../../screens/main/ChannelScreen";
import OtherUserChannel from "../../screens/main/OtherUserChannel";
import { Pusher, PusherEvent } from "@pusher/pusher-websocket-react-native";
import { Alert } from "react-native";

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
