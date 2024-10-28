import { useFonts } from "expo-font";

import RegistrationScreen from "../../components/Screens/RegistrationScreen";
// import LoginScreen from "../../components/Screens/LoginScreen";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  // return <LoginScreen />;
  return <RegistrationScreen />;
}
