import { ActivityIndicator, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import StackNavigator from "./navigation/StackNavigator";
import PostsScreen from "./screens/PostsScreen";
import CreatePostsScreen from "./screens/CreatePostsScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CommentsScreen from "./screens/CommentsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }
  // return <RegistrationScreen />;
  // return <LoginScreen />;
  return (
    // <PostsScreen />
    <CommentsScreen />
    // <NavigationContainer>
    //   {/* <BottomTabNavigator /> */}
    //   <StackNavigator />
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
