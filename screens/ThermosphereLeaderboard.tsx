import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, ImageBackground } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ThermosphereLeaderboard = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.thermosphereLeaderboard}
      onPress={() => navigation.navigate("ExosphereLeaderboard")}
    >
      <ImageBackground
        style={[styles.icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/thermosphereleaderboard.png")}
      >
        <Image
          style={[
            styles.thermosphereLeaderboardChild,
            styles.thermospherePosition,
          ]}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Image
          style={[styles.iconmonstrShoppingBag56, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.letsChat, styles.search1Typo]}>Let’s Chat</Text>
        <Pressable
          style={[styles.search, styles.homePosition]}
          onPress={() => navigation.navigate("SearchPage")}
        >
          <Text style={[styles.search1, styles.search1Typo]}>Search</Text>
        </Pressable>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Pressable
          style={[styles.challenges, styles.challengesPosition]}
          onPress={() => navigation.navigate("Challenges2")}
        >
          <Text style={styles.homeTypo}>Challenges</Text>
        </Pressable>
        <Pressable
          style={[styles.leaderboard, styles.challengesPosition]}
          onPress={() => navigation.navigate("JoinLeaderboard")}
        >
          <Text style={styles.leaderboard1}>Leaderboard</Text>
        </Pressable>
        <Pressable
          style={[styles.wrapper, styles.thermospherePosition]}
          onPress={() => navigation.navigate("JoinLeaderboard")}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/group-152.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.container, styles.thermospherePosition]}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
        </Pressable>
        <Image
          style={[
            styles.thermosphereLeaderboardItem,
            styles.thermospherePosition,
          ]}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Image
          style={[
            styles.thermosphereLeaderboardInner,
            styles.thermospherePosition,
          ]}
          contentFit="cover"
          source={require("../assets/ellipse-33.png")}
        />
        <Pressable
          style={[styles.iconmonstrBinoculars84, styles.frameLayout]}
          onPress={() => navigation.navigate("SearchPage")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/iconmonstrbinoculars8-41.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <Pressable
          style={[styles.frame, styles.frameLayout]}
          onPress={() => navigation.navigate("JoinLeaderboard")}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/image-11.png")}
          />
        </Pressable>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  thermospherePosition: {
    height: 33,
    top: 578,
    position: "absolute",
  },
  vectorIconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  search1Typo: {
    height: 13,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
  },
  homePosition: {
    top: 612,
    position: "absolute",
  },
  homeTypo: {
    height: 12,
    width: 47,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
  },
  challengesPosition: {
    top: 613,
    position: "absolute",
  },
  frameLayout: {
    width: 24,
    position: "absolute",
  },
  thermosphereLeaderboardChild: {
    left: 105,
    width: 32,
    height: 33,
    top: 578,
  },
  iconmonstrShoppingBag56: {
    top: 583,
    left: 113,
    width: 21,
    height: 22,
  },
  letsChat: {
    left: 279,
    width: 48,
    top: 612,
    position: "absolute",
  },
  search1: {
    width: 46,
  },
  search: {
    left: 222,
  },
  home: {
    left: 158,
    top: 612,
    position: "absolute",
  },
  challenges: {
    left: 99,
  },
  leaderboard1: {
    height: 14,
    width: 47,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
  },
  leaderboard: {
    left: 33,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 40,
    width: 32,
    height: 33,
    top: 578,
  },
  container: {
    left: 167,
    width: 32,
    height: 33,
    top: 578,
  },
  thermosphereLeaderboardItem: {
    left: 229,
    width: 32,
    height: 33,
    top: 578,
  },
  thermosphereLeaderboardInner: {
    left: 290,
    width: 33,
    height: 33,
    top: 578,
  },
  iconmonstrBinoculars84: {
    left: 233,
    top: 582,
    height: 24,
  },
  vectorIcon: {
    height: "3.3%",
    width: "6.39%",
    top: "90.89%",
    right: "46.17%",
    bottom: "5.81%",
    left: "47.44%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  frame: {
    left: 44,
    top: 585,
    height: 22,
  },
  icon: {
    flex: 1,
  },
  thermosphereLeaderboard: {
    height: 640,
    width: "100%",
  },
});

export default ThermosphereLeaderboard;
