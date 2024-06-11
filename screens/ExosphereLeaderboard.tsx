import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, ImageBackground } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ExosphereLeaderboard = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      style={styles.exosphereLeaderboardIcon}
      resizeMode="cover"
      source={require("../assets/exosphereleaderboard.png")}
    >
      <Image
        style={[styles.exosphereLeaderboardChild, styles.exospherePosition]}
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
        style={[styles.wrapper, styles.exospherePosition]}
        onPress={() => navigation.navigate("JoinLeaderboard")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-152.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.exospherePosition]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
      </Pressable>
      <Image
        style={[styles.exosphereLeaderboardItem, styles.exospherePosition]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.exosphereLeaderboardInner, styles.exospherePosition]}
        contentFit="cover"
        source={require("../assets/ellipse-33.png")}
      />
      <Pressable
        style={[styles.iconmonstrBinoculars84, styles.frameLayout]}
        onPress={() => navigation.navigate("SearchPage")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
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
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/image-11.png")}
        />
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  exospherePosition: {
    height: 33,
    top: 581,
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
    top: 615,
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
    top: 616,
    position: "absolute",
  },
  frameLayout: {
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  exosphereLeaderboardChild: {
    left: 114,
    width: 32,
    height: 33,
    top: 581,
  },
  iconmonstrShoppingBag56: {
    top: 586,
    left: 122,
    width: 21,
    height: 22,
  },
  letsChat: {
    left: 291,
    width: 48,
    top: 615,
    position: "absolute",
  },
  search1: {
    width: 46,
  },
  search: {
    left: 231,
  },
  home: {
    left: 167,
    top: 615,
    position: "absolute",
  },
  challenges: {
    left: 108,
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
    left: 42,
  },
  wrapper: {
    left: 49,
    width: 32,
    height: 33,
    top: 581,
  },
  container: {
    left: 176,
    width: 32,
    height: 33,
    top: 581,
  },
  exosphereLeaderboardItem: {
    left: 238,
    width: 32,
    height: 33,
    top: 581,
  },
  exosphereLeaderboardInner: {
    left: 299,
    width: 33,
    height: 33,
    top: 581,
  },
  icon2: {
    overflow: "hidden",
  },
  iconmonstrBinoculars84: {
    left: 242,
    top: 585,
    height: 24,
  },
  vectorIcon: {
    height: "3.3%",
    width: "6.39%",
    top: "91.36%",
    right: "43.67%",
    bottom: "5.34%",
    left: "49.94%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  frame: {
    left: 53,
    top: 588,
    height: 22,
  },
  exosphereLeaderboardIcon: {
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default ExosphereLeaderboard;
