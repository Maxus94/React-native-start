import { useFonts } from "expo-font";

import RegistrationScreen from "../../components/Screens/RegistrationScreen";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <RegistrationScreen />;
}
