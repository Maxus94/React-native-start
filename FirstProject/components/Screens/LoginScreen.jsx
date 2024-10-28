import { useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

import { colors } from "../styles/global";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsVisible, setPasswordIsVisible] = useState(true);
  const [userPicture, setUserPicture] = useState(require("./my_pict.jpg"));
  //   const [userPicture, setUserPicture] = useState(null);
  const showPassword = (
    <TouchableOpacity onPress={() => setPasswordIsVisible((prev) => !prev)}>
      <Text style={styles.showPassword}>Показати</Text>
    </TouchableOpacity>
  );

  const handleEmailChange = (value) => setEmail(value);
  const handlePasswordChange = (value) => setPassword(value);
  const onLogin = () => console.log(`email: ${email}, password: ${password}`);
  const onRegister = () => console.log("Go to registration page");
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image
          source={require("./BackgroundPicture.jpg")}
          style={styles.image}
        />
        <KeyboardAvoidingView
          style={styles.formContainer}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.pictureContainer}>
            <View style={styles.userPicture}>
              {userPicture && (
                <Image source={userPicture} style={styles.userPicture} />
              )}
            </View>
            <View style={styles.addContainer}>
              <View>
                <Svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 0H6V6H0V7H6V13H7V7H13V6H7V0Z"
                    fill="#FF6C00"
                  />
                </Svg>
              </View>
            </View>
          </View>
          <Text style={styles.formTitle}>Увійти</Text>
          <View style={styles.inputsContainer}>
            <TextInput
              placeholder="Адреса електронної пошти"
              style={styles.inputStyle}
              value={email}
              autoFocus={true}
              onChangeText={handleEmailChange}
            />
            <View style={[styles.inputStyle, styles.inputPasswordStyle]}>
              <TextInput
                placeholder="Пароль"
                style={styles.showPassword}
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry={passwordIsVisible}
              />
              {showPassword}
            </View>
          </View>
          <TouchableOpacity style={styles.buttonStyle} onPress={onLogin}>
            <Text style={styles.buttonTextStyle}>Увійти</Text>
          </TouchableOpacity>
          <View style={styles.noAccountContainer}>
            <Text style={styles.haveAccount}>Немає акаунту?</Text>
            <TouchableOpacity onPress={onRegister}>
              <Text style={[styles.haveAccount, styles.haveAccountLink]}>
                {"\u00A0"} Зареєструватися
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  formContainer: {
    position: "relative",
    height: "60%",
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: colors.white,
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  },
  pictureContainer: {
    position: "absolute",
    width: 132,
    height: 120,
    alignSelf: "center",
    top: -60,
    zIndex: 10,
  },
  userPicture: {
    width: 120,
    height: 120,
    backgroundColor: colors.lightestGray,
    borderRadius: 16,
  },
  userPictureStyle: { width: "100%" },
  addContainer: {
    position: "absolute",
    right: 0,
    bottom: "10%",
    width: 25,
    height: 25,
    borderColor: colors.orange,
    borderRadius: 25,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  addIcon: {
    width: 13,
    height: 13,
    borderColor: colors.orange,
    borderWidth: 1,
  },
  formTitle: {
    marginBottom: 32,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: 0.3,
    color: colors.black,
  },
  inputsContainer: { gap: 16 },
  inputStyle: {
    backgroundColor: colors.lightestGray,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
    height: 50,
    borderColor: colors.darkGray,
    borderWidth: 1,
    borderRadius: 8,
  },
  showPassword: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: colors.blue,
    lineHeight: 19,
  },
  inputPasswordStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonStyle: {
    marginTop: 43,
    marginBottom: 16,
    paddingBottom: 16,
    paddingTop: 16,
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },

  buttonTextStyle: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
  },
  haveAccount: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: colors.blue,
    lineHeight: 19,
  },
  haveAccountLink: { textDecorationLine: "underline" },
  noAccountContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
