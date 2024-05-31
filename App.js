import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import GetStarted from "./screens/GetStarted";
import LoginPage from "./screens/LoginPage";
import SignUp from "./screens/SignUp";
import Arrow from "./screens/Arrow";
import WelcomePage from "./screens/WelcomePage";
import Troley from "./components/Troley";
import MainPage from "./components/MainPage";
import SearchBar from "./screens/SearchBar";
import SideBar from "./screens/SideBar";
import HeartPage from "./screens/HeartPage";
import SettingPage from "./screens/SettingPage";
import Suggestion from "./screens/Suggestion";
import TrolleyPage from "./screens/TrolleyPage";
import Favourtie from "./screens/Favourtie";
import Hackathon from "./screens/Hackathon";
import CommunityPade from "./screens/CommunityPade";
import MainPage1 from "./screens/MainPage1";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import PrivacyPolicy from "./screens/PrivacyPlicy";
import ContactScreen from "./ContactScreen";
import FeedbackScreen from "./FeedbackScreen";
import TermsOfUseScreen from "./TermsOfUseScreen";
import GiveUs5StarScreen from "./GiveUs5StarScreen";
import AboutAppScreen from "./AboutAppScreen";
const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Itim-Regular": require("./assets/fonts/Itim-Regular.ttf"),
    "JosefinSans-Light": require("./assets/fonts/JosefinSans-Light.ttf"),
    "JosefinSans-Regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
    "JosefinSans-Medium": require("./assets/fonts/JosefinSans-Medium.ttf"),
    "JosefinSans-SemiBold": require("./assets/fonts/JosefinSans-SemiBold.ttf"),
    "JosefinSans-Bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="GetStarted"
              component={GetStarted}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Arrow"
              component={Arrow}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WelcomePage"
              component={WelcomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchBar"
              component={SearchBar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SideBar"
              component={SideBar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HeartPage"
              component={HeartPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingPage"
              component={SettingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Suggestion"
              component={Suggestion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TrolleyPage"
              component={TrolleyPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Favourtie"
              component={Favourtie}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Hackathon"
              component={Hackathon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CommunityPade"
              component={CommunityPade}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainPage1"
              component={MainPage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PrivacyPolicy" 
              component={PrivacyPolicy}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FeedbackScreen" 
              component={FeedbackScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TermsOfUseScreen" 
              component={TermsOfUseScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GiveUs5StarScreen" 
              component={GiveUs5StarScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContactScreen" 
              component={ContactScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutAppScreen" 
              component={AboutAppScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};

export default App;
