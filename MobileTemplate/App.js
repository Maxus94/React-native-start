import { ActivityIndicator, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import StackNavigator from "./navigation/StackNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }
  // return <RegistrationScreen />;
  // return <LoginScreen />;
  return (
    <NavigationContainer>
      {/* <BottomTabNavigator /> */}
      <StackNavigator />
    </NavigationContainer>
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
