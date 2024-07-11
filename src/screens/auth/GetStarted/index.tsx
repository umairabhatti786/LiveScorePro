import React, { useEffect, useState } from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { windowHeight } from "../../../utils/Dimensions";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { scale, verticalScale } from "react-native-size-matters";
import CustomButton from "../../../components/CustomButton";
import { appStyles } from "../../../utils/AppStyles";


const GetStarted = () => {
  const navigation: any = useNavigation();

  return (

    <View
    style={{flex:1,alignItems:"center"}}
    >
        <Image
        style={{width:"100%",height:windowHeight/1.5}}
        source={images.footballBackground}
        />
        <View style={{marginTop:verticalScale(20),gap:verticalScale(10),paddingHorizontal:scale(20)}}>
        <CustomText
              text={"YOUR SPORTS HUB LIVE AND HIGHLIGHT!"}
              color={colors.black100}
              size={22}
              style={{ textAlign: "center" }}
              fontFam="Raleway-Bold"
              lineHeight={25}
              fontWeight="700"
            />
            <CustomText
              text={"Watch sports live or highlights, read every news from your smartphone"}
              color={colors.gray100}
              size={13}
              lineHeight={21}
              style={{ textAlign: "center" }}
            />

<CustomButton
              text="Get Started"
            //   width={"100%"}
              onPress={()=>navigation.navigate("Login")}
              textColor={colors.black}
              bgColor={colors.primary}
            />
            
            <TouchableOpacity
            activeOpacity={0.5}
            style={{...appStyles.row,alignSelf:"center",gap:3}}
            >
                 <CustomText
              text={"Don’t have account?"}
              color={colors.gray100}
              size={13}
              lineHeight={21}
              style={{ textAlign: "center" }}
            />
                <CustomText
              text={"Sign up"}
              color={colors.black}
              size={13}
            />

            </TouchableOpacity>

        </View>



    </View>
  
  );
};

export default GetStarted;
