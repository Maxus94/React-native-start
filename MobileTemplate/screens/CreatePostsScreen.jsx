import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../styles/global";
import Svg, { Path } from "react-native-svg";

export default function CreatePostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.publicationContainer}>
        <View style={styles.pictureContainer}>
          <View style={styles.picture}>
            <View style={styles.addPictureContainer}>
              <View style={styles.addPicture}>
                <Svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M7 0L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2H14.83L13 0H7ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z"
                    fill="#BDBDBD"
                  />
                </Svg>
              </View>
            </View>
          </View>
          <Text style={styles.pictureText}>Завантажте фото</Text>
        </View>
        <View style={styles.inputsContainer}>
          <TextInput
            placeholder="Назва..."
            style={styles.inputStyle}
          ></TextInput>
          <View style={styles.inputWithIconContainer}>
            <Svg
              style={styles.inputWithIcon}
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
            <TextInput
              placeholder="Місцевість..."
              style={[styles.inputStyle, styles.inputWithIcon]}
            ></TextInput>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Опублікувати</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.deleteButtonContainer}>
        <TouchableOpacity style={styles.deleteButton}>
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M3 6H5H21"
              stroke="#BDBDBD"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M19.5 6C19.5 5.72386 19.2761 5.5 19 5.5C18.7239 5.5 18.5 5.72386 18.5 6H19.5ZM5.5 6C5.5 5.72386 5.27614 5.5 5 5.5C4.72386 5.5 4.5 5.72386 4.5 6H5.5ZM7.5 6C7.5 6.27614 7.72386 6.5 8 6.5C8.27614 6.5 8.5 6.27614 8.5 6H7.5ZM15.5 6C15.5 6.27614 15.7239 6.5 16 6.5C16.2761 6.5 16.5 6.27614 16.5 6H15.5ZM18.5 6V20H19.5V6H18.5ZM18.5 20C18.5 20.8284 17.8284 21.5 17 21.5V22.5C18.3807 22.5 19.5 21.3807 19.5 20H18.5ZM17 21.5H7V22.5H17V21.5ZM7 21.5C6.17157 21.5 5.5 20.8284 5.5 20H4.5C4.5 21.3807 5.61929 22.5 7 22.5V21.5ZM5.5 20V6H4.5V20H5.5ZM8.5 6V4H7.5V6H8.5ZM8.5 4C8.5 3.17157 9.17157 2.5 10 2.5V1.5C8.61929 1.5 7.5 2.61929 7.5 4H8.5ZM10 2.5H14V1.5H10V2.5ZM14 2.5C14.8284 2.5 15.5 3.17157 15.5 4H16.5C16.5 2.61929 15.3807 1.5 14 1.5V2.5ZM15.5 4V6H16.5V4H15.5Z"
              fill="#BDBDBD"
            />
            <Path
              d="M10 11V17"
              stroke="#BDBDBD"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M14 11V17"
              stroke="#BDBDBD"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 120,
    paddingBottom: 34,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "space-between",
  },
  publicationContainer: { gap: 32 },
  pictureContainer: { position: "relative" },
  picture: {
    maxWidth: 343,
    height: 240,
    backgroundColor: colors.lightestGray,
    borderRadius: 8,
    borderColor: colors.lightGray,
    borderWidth: 1,
    marginBottom: 8,
  },
  pictureText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: colors.darkGray,
  },
  addPictureContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  addPicture: {
    width: 60,
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  inputsContainer: {
    gap: 16,
  },
  inputStyle: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    alignItems: "center",
    height: 50,
    width: "100%",
    borderColor: colors.lightGray,
    borderBottomWidth: 1,
  },
  inputWithIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    overflow: "hidden",
    borderColor: colors.lightGray,
    borderBottomWidth: 1,
  },
  inputWithIcon: {
    borderBottomWidth: 0,
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: colors.lightestGray,
    height: 51,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: colors.darkGray,
  },
  deleteButtonContainer: {
    width: "100%",
    alignItems: "center",
  },
  deleteButton: {
    width: 70,
    height: 40,
    backgroundColor: colors.lightestGray,
    alignItems: "center",
    justifyContent: "center",
  },
});
