import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const IPhone8 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone82}>
      <Image
        style={styles.confettiIcon}
        contentFit="cover"
        source={require("../assets/confetti.png")}
      />
      <Image
        style={styles.confettiIcon1}
        contentFit="cover"
        source={require("../assets/confetti1.png")}
      />
      <View style={styles.iphone82Child} />
      <Text style={styles.congratulationsYouveEarned}>{`Congratulations!
You’ve earned 10 points!`}</Text>
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
        style={[styles.iphone82Item, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={[styles.iphone82Inner, styles.containerPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-16.png")}
      />
      <Pressable
        style={[styles.iconmonstrShoppingBag54, styles.iconmonstrLayout1]}
        onPress={() => navigation.navigate("Challenges2")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconmonstrshoppingbag5-6.png")}
        />
      </Pressable>
      <Image
        style={[styles.iconmonstrBuilding55, styles.iconmonstrLayout]}
        contentFit="cover"
        source={require("../assets/iconmonstrbuilding5-7.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.containerPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Pressable
        style={[styles.search, styles.homePosition]}
        onPress={() => navigation.navigate("SearchPage")}
      >
        <Text style={[styles.search1, styles.search1Typo]}>Search</Text>
      </Pressable>
      <Pressable
        style={[styles.iconmonstrBuilding56, styles.iconmonstrLayout]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconmonstrbuilding5-7.png")}
        />
      </Pressable>
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
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Pressable
        style={[styles.container, styles.containerPosition]}
        onPress={() => navigation.navigate("LetsChat1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-27.png")}
        />
      </Pressable>
      <Image
        style={[styles.iphone82Item, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Pressable
        style={[styles.iconmonstrShoppingBag55, styles.iconmonstrLayout1]}
        onPress={() => navigation.navigate("Challenges2")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconmonstrshoppingbag5-6.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.iconmonstrBinoculars83, styles.iconmonstrLayout]}
        onPress={() => navigation.navigate("SearchPage")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 33,
    top: 604,
    width: 32,
    position: "absolute",
  },
  containerPosition: {
    top: 603,
    height: 33,
    position: "absolute",
  },
  iconmonstrLayout1: {
    width: 21,
    height: 22,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  iconmonstrLayout: {
    height: 24,
    top: 607,
    width: 24,
    position: "absolute",
  },
  homePosition: {
    top: 637,
    position: "absolute",
  },
  search1Typo: {
    height: 13,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
    textAlign: "center",
    color: Color.colorBlack,
  },
  challengesPosition: {
    top: 638,
    position: "absolute",
  },
  homeTypo: {
    height: 12,
    width: 47,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
    textAlign: "center",
    color: Color.colorBlack,
  },
  confettiIcon: {
    top: 0,
    left: -86,
    width: 532,
    height: 555,
    position: "absolute",
  },
  confettiIcon1: {
    top: 543,
    left: -102,
    width: 539,
    height: 514,
    position: "absolute",
  },
  iphone82Child: {
    top: 353,
    left: 67,
    width: 234,
    height: 57,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  congratulationsYouveEarned: {
    top: 349,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.changaBold,
    width: 286,
    height: 94,
    textAlign: "center",
    color: Color.colorBlack,
    left: 46,
    position: "absolute",
  },
  wrapper: {
    left: 42,
  },
  iphone82Item: {
    left: 110,
  },
  iphone82Inner: {
    left: 233,
    width: 32,
    top: 603,
  },
  groupIcon: {
    top: 611,
    height: 22,
    width: 24,
    left: 46,
    position: "absolute",
  },
  icon1: {
    overflow: "hidden",
  },
  iconmonstrShoppingBag54: {
    left: 116,
    top: 609,
  },
  iconmonstrBuilding55: {
    left: 176,
    height: 24,
    top: 607,
    overflow: "hidden",
  },
  ellipseIcon: {
    left: 172,
    width: 32,
    top: 603,
  },
  search1: {
    width: 46,
  },
  search: {
    left: 226,
  },
  iconmonstrBuilding56: {
    left: 176,
    height: 24,
    top: 607,
  },
  challenges: {
    left: 103,
  },
  leaderboard1: {
    height: 14,
    width: 47,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
    textAlign: "center",
    color: Color.colorBlack,
  },
  leaderboard: {
    left: 35,
  },
  home: {
    left: 165,
    top: 637,
    position: "absolute",
  },
  container: {
    left: 294,
    width: 33,
  },
  iconmonstrShoppingBag55: {
    left: 118,
    top: 608,
  },
  iconmonstrBinoculars83: {
    left: 237,
    height: 24,
    top: 607,
  },
  letsChat1: {
    width: 48,
  },
  letsChat: {
    left: 286,
  },
  iphone82: {
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone8;
