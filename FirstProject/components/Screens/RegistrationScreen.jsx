import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

import { colors } from "../styles/global";

export default function RegistrationScreen() {
  const showPassword = (
    <TouchableOpacity>
      <Text style={styles.showPassword}>Показати</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Image source={require("./BackgroundPicture.jpg")} style={styles.image} />
      <View style={styles.formContainer}>
        <View style={styles.pictureContainer}>
          <View style={styles.userPicture}></View>
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
        <Text style={styles.formTitle}>Реєстрація</Text>
        <View style={styles.inputsContainer}>
          <TextInput placeholder="Логін" style={styles.inputStyle} />
          <TextInput
            placeholder="Адреса електронної пошти"
            style={styles.inputStyle}
          />
          <View style={[styles.inputStyle, styles.inputPasswordStyle]}>
            <TextInput placeholder="Пароль" style={styles.showPassword} />
            {showPassword}
          </View>
        </View>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Зареєструватися</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.haveAccount}>Вже є акаунт? Увійти</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    height: "67%",
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFF",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    // height: "100%",
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
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addContainer: {
    position: "absolute",
    right: 0,
    bottom: "10%",
    width: 25,
    height: 25,
    borderColor: "#FF6C00",
    borderRadius: 25,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  addIcon: {
    width: 13,
    height: 13,
    borderColor: "#FF6C00",
    borderWidth: 1,
  },
  formTitle: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: 0.3,
  },
  inputsContainer: { gap: 16 },
  inputStyle: {
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    padding: 16,
    borderColor: colors.darkGray,
    borderWidth: 1,
    borderRadius: 8,
  },
  showPassword: { fontSize: 16 },
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
    color: "#FFF",
    fontSize: 16,
    lineHeight: 19,
  },
  haveAccount: {
    textAlign: "center",
  },
});
