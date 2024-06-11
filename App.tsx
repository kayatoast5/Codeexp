const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomeText from "./components/HomeText";
import SearchPage from "./screens/SearchPage";
import JoinLeaderboard from "./screens/JoinLeaderboard";
import IndividualChallenges from "./screens/IndividualChallenges";
import HelpCentre from "./screens/HelpCentre";
import TroposphereLeaderboard from "./screens/TroposphereLeaderboard";
import CommunityChallenges from "./screens/CommunityChallenges";
import Reporting from "./screens/Reporting";
import StratosphereLeaderboard from "./screens/StratosphereLeaderboard";
import MesosphereLeaderboard from "./screens/MesosphereLeaderboard";
import ThermosphereLeaderboard from "./screens/ThermosphereLeaderboard";
import Image1 from "./screens/Image1";
import Image11Icon from "./components/Image11Icon";
import GroupIcon from "./components/GroupIcon";
import IconmonstrBuilding5 from "./components/IconmonstrBuilding5";
import EllipseIcon from "./components/EllipseIcon";
import EllipseIcon1 from "./components/EllipseIcon1";
import EllipseIcon2 from "./components/EllipseIcon2";
import EllipseIcon3 from "./components/EllipseIcon3";
import Home from "./components/Home";
import GroupIcon1 from "./components/GroupIcon1";
import IconmonstrShoppingBag5 from "./components/IconmonstrShoppingBag5";
import IconmonstrBuilding51 from "./components/IconmonstrBuilding51";
import EllipseIcon4 from "./components/EllipseIcon4";
import IconmonstrBinoculars8 from "./components/IconmonstrBinoculars8";
import IconmonstrShoppingBag51 from "./components/IconmonstrShoppingBag51";
import Search from "./components/Search";
import Challenges from "./components/Challenges";
import Leaderboard from "./components/Leaderboard";
import LetsChat from "./components/LetsChat";
import IsMyProduct from "./components/IsMyProduct";
import SearchText from "./components/SearchText";
import ChallengesText from "./components/ChallengesText";
import LeaderboardText from "./components/LeaderboardText";
import ExosphereLeaderboard from "./screens/ExosphereLeaderboard";
import EllipseIcon from "./components/EllipseIcon5";
import EllipseIcon1 from "./components/EllipseIcon11";
import EllipseIcon2 from "./components/EllipseIcon21";
import EllipseIcon3 from "./components/EllipseIcon31";
import IconmonstrBuilding5 from "./components/IconmonstrBuilding52";
import IconmonstrBuilding51 from "./components/IconmonstrBuilding511";
import GroupIcon from "./components/GroupIcon2";
import EllipseIcon4 from "./components/EllipseIcon41";
import IconmonstrBinoculars8 from "./components/IconmonstrBinoculars81";
import IconmonstrShoppingBag5 from "./components/IconmonstrShoppingBag52";
import QRCode from "./screens/QRCode";
import LetsChat1 from "./screens/LetsChat1";
import ContinueChat from "./screens/ContinueChat";
import IPhone8 from "./screens/IPhone8";
import Frame from "./screens/Frame";
import Frame1 from "./screens/Frame1";
import HomePage from "./screens/HomePage";
import StartScreen from "./screens/StartScreen";
import SignIn from "./screens/SignIn";
import Challenges2 from "./screens/Challenges2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Changa-ExtraLight": require("./assets/fonts/Changa-ExtraLight.ttf"),
    "Changa-Regular": require("./assets/fonts/Changa-Regular.ttf"),
    "Changa-Medium": require("./assets/fonts/Changa-Medium.ttf"),
    "Changa-Bold": require("./assets/fonts/Changa-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    LilitaOne: require("./assets/fonts/LilitaOne.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 5000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="SearchPage"
              component={SearchPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JoinLeaderboard"
              component={JoinLeaderboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IndividualChallenges"
              component={IndividualChallenges}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HelpCentre"
              component={HelpCentre}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TroposphereLeaderboard"
              component={TroposphereLeaderboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CommunityChallenges"
              component={CommunityChallenges}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reporting"
              component={Reporting}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StratosphereLeaderboard"
              component={StratosphereLeaderboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MesosphereLeaderboard"
              component={MesosphereLeaderboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ThermosphereLeaderboard"
              component={ThermosphereLeaderboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Image1"
              component={Image1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ExosphereLeaderboard"
              component={ExosphereLeaderboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="QRCode"
              component={QRCode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LetsChat1"
              component={LetsChat1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContinueChat"
              component={ContinueChat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone8"
              component={IPhone8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StartScreen"
              component={StartScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Challenges2"
              component={Challenges2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <StartScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
