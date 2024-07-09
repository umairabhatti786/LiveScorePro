import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { images } from "../../assets/images";;
import { colors } from "../../utils/colors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserData,
  setDisableBottomTab,
  setProfileActiveBar,
} from "../../redux/reducers/authReducer";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Login from "../../screens/auth/Login";
import Signup from "../../screens/auth/Signup";
import LostPassword from "../../screens/auth/LostPassword";
import ResetPassword from "../../screens/auth/ResetPassword";

const BottomTab = ({}: any) => {
  const Bottom = createBottomTabNavigator();
;

  const navigation = useNavigation();

  // useEffect()

  const Dot = () => (
    <View style={style.dot} />
  );

  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        animationEnabled: false,
        keyboardHidesTabBar: true,

        // tabBarColor: ({focused, size, color}) => {},
        // tabBarStyle:()=>{innerHeight:1000},
        tabBarStyle: {
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          borderTopWidth: -1,
          display:  "flex",
          // paddingTop: 8,
          height: 48,
          // display: route.name === "Home" ? "none" : "flex",
        },
        headerShown: false,
      })}
      // screenOptions= {{
      //   tabBarHideOnKeyboard: true,

      //   tabBarShowLabel: false,
      //   tabBarStyle: {
      //     backgroundColor: "black",
      //     justifyContent: "center",
      //     alignItems: "center",
      //     borderTopWidth: -1,
      //     paddingTop: 8,
      //     height: 55,
      //   },
      // }}
    >
      <Bottom.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,
                }}
              >
                {/* <Image
                  source={focused ? images.fillhome : images.home}
                  style={{
                    height: focused ? 27 : 20,
                    width: focused ? 27 : 20,
                  }}
                /> */}
              </View>
            );
          },
        }}
      />

      <Bottom.Screen
        name="SearchStack"
        component={Signup}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,

                  paddingTop: 22,
                }}
              >
                {/* <Image
                  source={focused ? images.searchfill : images.search}
                  style={{ height: 22, width: 22 }}
                /> */}
              </View>
            );
          },
        }}
      />
      <Bottom.Screen
        name="ChannelScreen"
        // component={AddStatus}
        // component={ProfileScreen}
        component={LostPassword}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
               
                style={{
                  ...style?.itemStyle,

                  paddingTop: 22,
                }}
              >
                {/* <Image
                  source={focused ? images.add : images.add}
                  style={{ height: 20, width: 20 }}
                /> */}
              </View>
            );
          },
        }}
      />

      <Bottom.Screen
        name="MessageScreen"
        component={ResetPassword}
        
        options={{
          headerShown: false,
          // tabBarBadge: () => <Dot />,

          // ...(notificationAlert && {
          //   tabBarBadge: () => <Dot />,
          //   // tabBarBadgeStyle: { backgroundColor: colors.sky,width:5,height:5,borderRadius:999 },
          // }),
          
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,

                  paddingTop: 22,
                }}
              >
                <View>
               
                  <Image
                    source={focused ? images.message : images.message}
                    style={{ height: 20, width: 20, tintColor: colors.white }}
                  />
                  {focused && (
                    // <Image
                    //   source={images.fillmesssage}
                    //   style={{
                    //     height: 14,
                    //     width: 14,
                    //     position: "absolute",
                    //     left: 3,
                    //     top: 1,
                    //     tintColor: colors.white,
                    //   }}
                    //   resizeMode="contain"
                    // />
                  )}
                </View>
              </View>
            );
          },
        }}

        
      />
    
    </Bottom.Navigator>
  );
};
export default BottomTab;

const style = StyleSheet.create({
  itemStyle: {
    width: "100%",
    height: Platform.OS === "ios" ? 65 : 75,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    gap: 7,
  },
  text: {
    color: colors.white,
  },
  dot: {

    width: scale(7.5),
    height: scale(7.5),
    borderRadius: 999,
    backgroundColor: colors.sky,
    marginBottom: verticalScale(3),
    right: scale(-7),
    top: -4,
    bottom: verticalScale(9),
    position: "absolute",

    // position: 'absolute',
    // top: -5,
    // right: -5,
    // width: 10,
    // height: 10,
    // borderRadius: 5,
    // backgroundColor: colors.sky,
  },
});
