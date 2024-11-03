import { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../styles/global";
import Svg, { Path } from "react-native-svg";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
const comments = [
  {
    ID: 1,
    userPicture: require("../assets/images/user1-avatar.png"),
    commentText:
      "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    commentDate: "09 червня, 2020",
    commentTime: "08:40",
  },
  {
    ID: 2,
    userPicture: require("../assets/images/user2-avatar.png"),
    commentText:
      "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    commentDate: "09 червня, 2020",
    commentTime: "09:14",
  },
  {
    ID: 3,
    userPicture: require("../assets/images/user1-avatar.png"),
    commentText: "Thank you! That was very helpful!",
    commentDate: "09 червня, 2020",
    commentTime: "09:20",
  },
];

export default function CommentsScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.picture}
        source={require("../assets/images/sunset.png")}
      />
      <View style={styles.commentsContainer}>
        {comments.map((comment) => (
          <View style={styles.commentWrapper} key={comment.ID}>
            <Image source={comment.userPicture} />
            <View>
              <Text>{comment.commentText}</Text>
              <Text>
                {comment.commentDate}|{comment.commentTime}
              </Text>
            </View>
          </View>
        ))}
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
    gap: 32,
  },
  picture: {
    maxWidth: SCREEN_WIDTH - 32,
    // height: 240,
    backgroundColor: colors.lightestGray,
    borderRadius: 8,
    borderColor: colors.lightGray,
    borderWidth: 1,
    marginBottom: 8,
  },
  commentsContainer: {
    gap: 24,
  },
  commentWrapper: {
    flexDirection: "row",
    gap: 16,
  },
});
