import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/global";
import Svg, { Path } from "react-native-svg";

export default function HomeScreen() {
  const [userPicture, setUserPicture] = useState(
    require("../assets/images/my_pict.jpg")
  );
  const [userEmail, setUserEmail] = useState("maxus@zeos.net");
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <View style={styles.userPicture}>
          {userPicture && (
            <Image source={userPicture} style={styles.userPicture} />
          )}
        </View>
        <View>
          <Text style={styles.userName}>Maxim Krygin</Text>
          <Text>maxus@zeos.net</Text>
        </View>
      </View>
      <View style={styles.pictureContainer}>
        <View style={styles.picture}></View>
        <Text style={styles.pictureText}>Завантажте фото</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
    height: "100%",
    overflow: "hidden",
    gap: 32,
  },
  userInfoContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
  },
  userPicture: {
    width: 60,
    height: 60,
    backgroundColor: colors.lightestGray,
    borderRadius: 16,
  },
  userName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },
  pictureContainer: { gap: 8 },
  picture: {
    maxWidth: 343,
    height: 240,
    backgroundColor: colors.lightestGray,
    borderRadius: 8,
    borderColor: colors.lightGray,
    borderWidth: 1,
    marginBottom: 8,
  },
});
