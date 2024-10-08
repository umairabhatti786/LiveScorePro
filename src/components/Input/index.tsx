import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import { windowWidth } from "../../utils/Dimensions";
import DropDownPicker from "react-native-dropdown-picker";
import { images } from "../../assets/images";
import { verticalScale } from "react-native-size-matters";
import NewText from "../NewText";
type Props = {
  label?: string;
  placeholder?: string;
  error?: string;
  isPassword?: boolean;
  source?: any;
  keyboard?: any;
  phoneInputValue?: any;
  setPhoneInputValue?: any;
  phoneInputRef?: any;
  props?: any;
  value?: any;
  onChangeText?: any;
  onBlur?: any;
  isCenter?: boolean;
  isPhoneField?: boolean;
  onShowPassword?: any;
  editable?: boolean;
  complusory?: boolean;
  color?: string;
  onChangeCountry?: any;
  countryFlag?: string;
  maxLength?: number;
  onChangeFormattedText?: any;
  leftSource?: any;
  fontWeight?: any;
  marginTop?: any;
  multiline?: boolean;
  height?: any;
  dropdown?: boolean;
  items?: any;
  setItems?: any;
  dropdownValue?: any;
  setDropdownValue?: any;
  open?: any;
  setOpen?: any;
  zIndex?: any;
  onOpen?: any;
  onClose?: any;
  disabled?: boolean;
  labelSize?:any
};

const Input = ({
  label,
  placeholder,
  keyboard,
  isPassword,
  source,
  props,
  isCenter,
  fontWeight,
  marginTop,
  multiline,
  height,
  dropdown,
  open,
  isPhoneField,
  phoneInputValue,
  setPhoneInputValue,
  phoneInputRef,
  value,
  onChangeText,
  onBlur,
  error,
  onShowPassword,
  editable,
  complusory,
  color,
  onChangeCountry,
  countryFlag,
  maxLength,
  onChangeFormattedText,
  leftSource,
  items,
  setItems,
  dropdownValue,
  setDropdownValue,
  setOpen,
  zIndex,
  onOpen,
  onClose,
  disabled,
  labelSize,
}: Props) => {
  const CustomArrowIcon = () => (
    <View>
      <Image source={images.arrowdown} />
    </View>
  );
  return (
    <View style={{ ...props, marginTop: marginTop || 15 }}>
      <View style={{ flexDirection: "row" }}>
        <NewText
          fontWeight={"500"}
          fontFam="Poppins-Medium"
          size={labelSize|| 15}
          style={{ marginBottom: verticalScale(5) }}
          text={label}
          color={colors.white}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingVertical:2,
        //  height: verticalScale(height || 49),

          alignItems:"center",
          borderRadius: 10,
          backgroundColor: colors.primary,
        }}
      >
        {leftSource && (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              // marginRight: 10,
            }}
          >
            <Image
              source={leftSource}
              style={{
                width: 22,
                height: 22,
                tintColor: "#CCCCCC",
              }}
              resizeMode={"contain"}
            />
          </View>
        )}
        <View style={{ flex: 1 }}>
       
            <TextInput
              value={value}
              editable={editable}
              style={{
                fontSize: 16,
                width:source?windowWidth / 1.3: windowWidth / 1.2,
                alignItems:"center",
                flex:1,
                // paddingTop:20,
                fontFamily:"Poppins-Regular",
                fontWeight: fontWeight,
                color: color || colors.grey400,
                ...(isCenter && { alignSelf: "center" }),
              }}
              placeholder={placeholder}
              multiline={multiline}
              placeholderTextColor={colors.grey400}
              keyboardType={keyboard}
              maxLength={maxLength}
              secureTextEntry={isPassword || false}
              onChangeText={onChangeText}
              onBlur={onBlur}
              autoCapitalize="none"
            />
   
        </View>
        {source && (
          <TouchableOpacity
            onPress={onShowPassword}
            activeOpacity={0.6}
            disabled={!onShowPassword}
            style={{ justifyContent: "center", alignItems: "center",   width: 30,
            paddingVertical:5,

            // height: verticalScale(height || 49)  ,
           }}
          >
            <Image
              source={source}
              style={{
                width: 22,
                height: 22,
              }}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        )}
      </View>

      
    </View>
  );
};
export default Input;
