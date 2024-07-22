import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../../utils/colors";
import { images } from "../../assets/images";

const ScreenLayout = ({ children, color }: any) => {
  return (
    <>
     <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />

<SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "50%",
          top: Platform.OS == "ios" ? 50 : 0,
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={images.gradient}
        />
      </View>

      {children}
    </SafeAreaView>
    </>
   
  );
};
export default ScreenLayout;

const styles = StyleSheet.create({});

// const
