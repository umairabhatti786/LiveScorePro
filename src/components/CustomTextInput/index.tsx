import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import { windowWidth } from "../../utils/Dimensions";
import { images } from "../../assets/images";
import { scale, verticalScale } from "react-native-size-matters";
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
  labelSize?: any;
  labelImage?: any;
};

const CustomTextInput = ({
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
  labelImage,
}: Props) => {
  const CustomArrowIcon = () => (
    <View>
      <Image source={images.arrowdown} />
    </View>
  );
  return (
    <View style={{ ...props, marginTop: marginTop || 15 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: scale(7),
          marginBottom: verticalScale(5),
        }}
      >
        {labelImage && (
          <Image
            source={labelImage}
            style={{
              width: 18,
              height: 18,
            }}
            resizeMode={"contain"}
          />
        )}

        <CustomText
          fontWeight={"500"}
          fontFam="Poppins-Medium"
          size={labelSize || 14}
          text={label}
          color={colors.black}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          height: verticalScale(height || 42),
          borderColor: colors.gray200,
          borderWidth: 1,

          alignItems: "center",
          borderRadius: scale(10),
          backgroundColor: colors.gray300,
        }}
      >
        {leftSource && (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <Image
              source={leftSource}
              style={{
                width: 25,
                height: 25,
                tintColor: "#CCCCCC",
              }}
              resizeMode={"contain"}
            />
          </View>
        )}
        <View style={{ flex: 1, }}>
          <TextInput
            value={value}
            editable={editable}
            style={{
              fontSize: 13,
              width: windowWidth / 1.2,
              alignItems: "center",
              paddingTop:15,
              fontFamily: "Poppins-Regular",
              fontWeight: fontWeight,
              color: color || colors.black,
              ...(isCenter && { alignSelf: "center" }),
            }}
            placeholder={placeholder}
            multiline={multiline}
            placeholderTextColor={colors.gray200}
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
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={source}
              style={{
                width: 17,
                height: 17,
              }}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default CustomTextInput;
