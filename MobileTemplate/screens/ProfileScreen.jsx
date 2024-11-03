import { useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

import { colors } from "../styles/global";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ProfileScreen({ navigation }) {
  const [userName, setUserName] = useState("Maxim Krygin");
  const [userPicture, setUserPicture] = useState(
    require("../assets/images/my_pict.jpg")
  );
  const publications = [
    {
      ID: 1,
      picture: require("../assets/images/forest.png"),
      reviews: 8,
      likes: 153,
      location: "Ukraine",
    },
    {
      ID: 2,
      picture: require("../assets/images/sunset.png"),
      reviews: 3,
      likes: 200,
      location: "Ukraine",
    },
    {
      ID: 3,
      picture: require("../assets/images/house.png"),
      reviews: 50,
      likes: 200,
      location: "Italy",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Image
            source={require("../assets/images/BackgroundPicture.jpg")}
            style={styles.image}
          />
          <View
            style={styles.formContainer}
            // behavior={Platform.OS == "ios" ? "padding" : "height"}
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
            <Text style={styles.formTitle}>{userName}</Text>
            {publications.map((publication) => (
              <View key={publication.ID}>
                <Image source={publication.picture} />
                <Text>{publication.likes}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    height: "82%",
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
});
