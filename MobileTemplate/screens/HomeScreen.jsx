import { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/global";
import Svg, { Path } from "react-native-svg";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

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
      <View style={styles.pictureInfoContainer}>
        <Image
          style={styles.picture}
          source={require("../assets/images/forest.png")}
        />
        <Text style={styles.pictureText}>Ліс</Text>
        <View style={styles.pictureDescription}>
          <View style={styles.pictureReviewContainer}>
            <Svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 11.5C2.99656 12.8199 3.30493 14.1219 3.9 15.3C5.33904 18.1793 8.28109 19.9988 11.5 20C12.8199 20.0034 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0034 12.8199 20 11.5C19.9988 8.28109 18.1793 5.33904 15.3 3.9C14.1219 3.30493 12.8199 2.99656 11.5 3H11C6.68419 3.2381 3.2381 6.68419 3 11V11.5V11.5Z"
                stroke="#BDBDBD"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
            <Text style={styles.pictureReviewsNumber}>0</Text>
          </View>
          <View style={styles.pictureLocationContainer}>
            <Svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z"
                stroke="#BDBDBD"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                stroke="#BDBDBD"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
            <Text style={styles.pictureLocation}>
              Ivano-Frankivs'k Region, Ukraine
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.pictureInfoContainer}>
        <Image
          style={styles.picture}
          source={require("../assets/images/sunset.png")}
        />
        <Text style={styles.pictureText}>Ліс</Text>
        <View style={styles.pictureDescription}>
          <View style={styles.pictureReviewContainer}>
            <Svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 11.5C2.99656 12.8199 3.30493 14.1219 3.9 15.3C5.33904 18.1793 8.28109 19.9988 11.5 20C12.8199 20.0034 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0034 12.8199 20 11.5C19.9988 8.28109 18.1793 5.33904 15.3 3.9C14.1219 3.30493 12.8199 2.99656 11.5 3H11C6.68419 3.2381 3.2381 6.68419 3 11V11.5V11.5Z"
                stroke="#BDBDBD"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
            <Text style={styles.pictureReviewsNumber}>0</Text>
          </View>
          <View style={styles.pictureLocationContainer}>
            <Svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z"
                stroke="#BDBDBD"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                stroke="#BDBDBD"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
            <Text style={styles.pictureLocation}>
              Ivano-Frankivs'k Region, Ukraine
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
    paddingLeft: 16,
    paddingRight: 16,
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
  pictureInfoContainer: {
    gap: 8,
  },
  picture: {
    width: SCREEN_WIDTH - 32,
    borderRadius: 8,
  },
  pictureText: {
    color: colors.black,
    fontSize: 16,
    fontFamily: "Roboto-Medium",
  },
  pictureDescription: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pictureReviewContainer: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  pictureReviewsNumber: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: colors.darkGray,
  },
  pictureLocationContainer: {
    flexDirection: "row",
    gap: 4,
  },
  pictureLocation: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: colors.darkGray,
    textDecorationLine: "underline",
  },
});
