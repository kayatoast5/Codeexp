import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, ImageBackground } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const StratosphereLeaderboard = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.stratosphereLeaderboard}
      onPress={() => navigation.navigate("MesosphereLeaderboard")}
    >
      <ImageBackground
        style={[styles.icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/stratosphereleaderboard.png")}
      >
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("JoinLeaderboard")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/ellipse-24.png")}
          />
        </Pressable>
        <Image
          style={[styles.stratosphereLeaderboardChild, styles.wrapperLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-24.png")}
        />
        <Image
          style={[styles.stratosphereLeaderboardItem, styles.framePosition]}
          contentFit="cover"
          source={require("../assets/ellipse-24.png")}
        />
        <Image
          style={styles.stratosphereLeaderboardInner}
          contentFit="cover"
          source={require("../assets/group-16.png")}
        />
        <Image
          style={[styles.iconmonstrShoppingBag56, styles.iconmonstrLayout1]}
          contentFit="cover"
          source={require("../assets/iconmonstrshoppingbag5-6.png")}
        />
        <Pressable
          style={[styles.iconmonstrBuilding57, styles.iconmonstrLayout]}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/iconmonstrbuilding5-7.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.container, styles.framePosition]}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/ellipse-24.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.search, styles.homePosition]}
          onPress={() => navigation.navigate("SearchPage")}
        >
          <Text style={[styles.search1, styles.search1Typo]}>Search</Text>
        </Pressable>
        <Pressable
          style={[styles.iconmonstrBuilding57, styles.iconmonstrLayout]}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/iconmonstrbuilding5-7.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.challenges, styles.challengesPosition]}
          onPress={() => navigation.navigate("Challenges2")}
        >
          <Text style={[styles.challenges1, styles.challenges1Typo]}>
            Challenges
          </Text>
        </Pressable>
        <Pressable
          style={[styles.leaderboard, styles.challengesPosition]}
          onPress={() => navigation.navigate("JoinLeaderboard")}
        >
          <Text style={[styles.leaderboard1, styles.challenges1Typo]}>
            Leaderboard
          </Text>
        </Pressable>
        <Pressable
          style={[styles.home, styles.homePosition]}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Text style={[styles.challenges1, styles.challenges1Typo]}>Home</Text>
        </Pressable>
        <Pressable
          style={[styles.frame, styles.framePosition]}
          onPress={() => navigation.navigate("LetsChat1")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/ellipse-27.png")}
          />
        </Pressable>
        <Image
          style={[styles.stratosphereLeaderboardChild, styles.wrapperLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-24.png")}
        />
        <Pressable
          style={[styles.iconmonstrShoppingBag57, styles.iconmonstrLayout1]}
          onPress={() => navigation.navigate("Challenges2")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/iconmonstrshoppingbag5-6.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.iconmonstrBinoculars84, styles.iconmonstrLayout]}
          onPress={() => navigation.navigate("SearchPage")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/iconmonstrbinoculars8-4.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.letsChat, styles.homePosition]}
          onPress={() => navigation.navigate("LetsChat1")}
        >
          <Text style={[styles.letsChat1, styles.search1Typo]}>Let’s Chat</Text>
        </Pressable>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  wrapperLayout: {
    height: 33,
    top: 610,
    position: "absolute",
    width: 32,
  },
  framePosition: {
    top: 609,
    height: 33,
    position: "absolute",
  },
  iconmonstrLayout1: {
    width: 21,
    height: 22,
    position: "absolute",
  },
  iconmonstrLayout: {
    height: 24,
    top: 613,
    width: 24,
    position: "absolute",
  },
  homePosition: {
    top: 643,
    position: "absolute",
  },
  search1Typo: {
    height: 13,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
  },
  challengesPosition: {
    top: 644,
    position: "absolute",
  },
  challenges1Typo: {
    width: 47,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
  },
  wrapper: {
    left: 45,
  },
  stratosphereLeaderboardChild: {
    left: 113,
  },
  stratosphereLeaderboardItem: {
    left: 236,
    width: 32,
    top: 609,
  },
  stratosphereLeaderboardInner: {
    top: 617,
    left: 49,
    height: 22,
    width: 24,
    position: "absolute",
  },
  iconmonstrShoppingBag56: {
    top: 615,
    left: 119,
    overflow: "hidden",
  },
  icon2: {
    overflow: "hidden",
  },
  iconmonstrBuilding57: {
    left: 179,
  },
  container: {
    left: 175,
    width: 32,
    top: 609,
  },
  search1: {
    width: 46,
  },
  search: {
    left: 229,
  },
  challenges1: {
    height: 12,
  },
  challenges: {
    left: 106,
  },
  leaderboard1: {
    height: 14,
  },
  leaderboard: {
    left: 38,
  },
  home: {
    left: 168,
  },
  frame: {
    left: 297,
    width: 33,
  },
  iconmonstrShoppingBag57: {
    left: 121,
    top: 614,
  },
  iconmonstrBinoculars84: {
    left: 240,
  },
  letsChat1: {
    width: 48,
  },
  letsChat: {
    left: 289,
  },
  icon: {
    flex: 1,
    overflow: "hidden",
  },
  stratosphereLeaderboard: {
    height: 667,
    width: "100%",
  },
});

export default StratosphereLeaderboard;
