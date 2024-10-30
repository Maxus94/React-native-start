import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "../../components/navigation/BottomTabNavigator";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();
import RegistrationScreen from "../../components/Screens/RegistrationScreen";

import LoginScreen from "../../components/Screens/LoginScreen";

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
  // return (
  //   <NavigationContainer>
  //     <MainStack.Navigator initialRouteName="Login">
  //       <MainStack.Screen name="Registration" component={RegistrationScreen} />
  //       <MainStack.Screen name="Login" component={LoginScreen} />
  //     </MainStack.Navigator>
  //   </NavigationContainer>
  // );
}
