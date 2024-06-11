import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Challenges2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.challenges}>
      <View style={[styles.challengesChild, styles.challengesLayout]} />
      <View style={[styles.challengesItem, styles.challengesLayout]} />
      <View style={[styles.challengesInner, styles.challengesLayout]} />
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleLayout]}
        onPress={() => navigation.navigate("IndividualChallenges")}
      />
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <Text style={[styles.challenges1, styles.challengesTypo]}>
        Challenges
      </Text>
      <Text style={[styles.individual, styles.communityTypo]}>Individual</Text>
      <Text style={[styles.community, styles.communityTypo]}>Community</Text>
      <Image
        style={[styles.frameIcon, styles.activeLayout]}
        contentFit="cover"
        source={require("../assets/frame-103.png")}
      />
      <Text style={[styles.activeChallenges1, styles.activeLayout]}>
        Active Challenges 1
      </Text>
      <View style={[styles.challengesChild1, styles.activeLayout]} />
      <Text
        style={[styles.bringYourOwn, styles.historyLayout]}
      >{`Bring Your Own Bag Challenge `}</Text>
      <Image
        style={[styles.challengesChild2, styles.challengesChildLayout1]}
        contentFit="cover"
        source={require("../assets/frame-15.png")}
      />
      <Image
        style={[styles.challengesChild3, styles.challengesChildLayout1]}
        contentFit="cover"
        source={require("../assets/frame-16.png")}
      />
      <Text style={styles.individual1}>Individual</Text>
      <Text style={[styles.forTheDuration, styles.forTheDurationTypo]}>
        For the duration of this challenge, commit to using reusable bags
        instead of single-use plastic bags when shopping. Let’s make a positive
        impact, one bag at a time!
      </Text>
      <Text style={[styles.history, styles.historyLayout]}>History ^</Text>
      <View style={styles.challengesChild4} />
      <Text style={[styles.activeFor5d19h, styles.forTheDurationTypo]}>
        Active for 5D19H
      </Text>
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
        style={[styles.ellipseIcon, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={[styles.challengesChild5, styles.challengesChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-16.png")}
      />
      <Image
        style={[styles.iconmonstrShoppingBag56, styles.iconmonstrLayout1]}
        contentFit="cover"
        source={require("../assets/iconmonstrshoppingbag5-6.png")}
      />
      <Image
        style={[styles.iconmonstrBuilding57, styles.iconmonstrLayout]}
        contentFit="cover"
        source={require("../assets/iconmonstrbuilding5-71.png")}
      />
      <Image
        style={[styles.challengesChild6, styles.challengesChildPosition]}
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
        style={[styles.iconmonstrBuilding58, styles.iconmonstrLayout]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconmonstrbuilding5-71.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.challenges2, styles.challenges2Position]}
        onPress={() => navigation.navigate("Challenges2")}
      >
        <Text style={styles.homeTypo}>Challenges</Text>
      </Pressable>
      <Pressable
        style={[styles.leaderboard, styles.challenges2Position]}
        onPress={() => navigation.navigate("JoinLeaderboard")}
      >
        <Text style={styles.leaderboard1}>Leaderboard</Text>
      </Pressable>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Pressable
        style={[styles.container, styles.challengesChildPosition]}
        onPress={() => navigation.navigate("LetsChat1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-27.png")}
        />
      </Pressable>
      <Image
        style={[styles.ellipseIcon, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Pressable
        style={[styles.iconmonstrShoppingBag57, styles.iconmonstrLayout1]}
        onPress={() => navigation.navigate("Challenges2")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconmonstrshoppingbag5-6.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.iconmonstrBinoculars84, styles.iconmonstrLayout]}
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
  challengesLayout: {
    height: 42,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 375,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 43,
    width: 188,
    top: 41,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_200,
    position: "absolute",
  },
  challengesTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  communityTypo: {
    height: 19,
    width: 136,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  activeLayout: {
    width: 374,
    left: 0,
  },
  historyLayout: {
    height: 29,
    width: 374,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
    position: "absolute",
  },
  challengesChildLayout1: {
    width: 36,
    left: 18,
    height: 43,
    position: "absolute",
    overflow: "hidden",
  },
  forTheDurationTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
    position: "absolute",
  },
  wrapperLayout: {
    height: 33,
    top: 612,
    width: 32,
    position: "absolute",
  },
  challengesChildPosition: {
    top: 611,
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
    top: 615,
    width: 24,
    position: "absolute",
  },
  homePosition: {
    top: 645,
    position: "absolute",
  },
  search1Typo: {
    fontSize: FontSize.size_6xs,
    height: 13,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  challenges2Position: {
    top: 646,
    position: "absolute",
  },
  homeTypo: {
    height: 12,
    width: 47,
    fontSize: FontSize.size_6xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
  },
  challengesChild: {
    top: 0,
  },
  challengesItem: {
    top: 251,
  },
  challengesInner: {
    top: 453,
  },
  rectanglePressable: {
    left: 0,
    width: 188,
    top: 41,
  },
  rectangleView: {
    left: 187,
  },
  challenges1: {
    top: 13,
    width: 323,
    height: 57,
    left: 25,
  },
  individual: {
    top: 53,
    left: 25,
  },
  community: {
    top: 54,
    left: 212,
  },
  frameIcon: {
    top: 83,
    height: 168,
    position: "absolute",
    width: 374,
    overflow: "hidden",
  },
  activeChallenges1: {
    top: 262,
    height: 31,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  challengesChild1: {
    top: 292,
    backgroundColor: Color.colorWhite,
    height: 161,
    position: "absolute",
    width: 374,
  },
  bringYourOwn: {
    top: 298,
    left: -8,
    fontSize: FontSize.size_mini,
  },
  challengesChild2: {
    top: 306,
  },
  challengesChild3: {
    top: 363,
  },
  individual1: {
    top: 400,
    left: 20,
    fontSize: FontSize.size_7xs,
    fontFamily: FontFamily.interRegular,
    height: 13,
    width: 33,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  forTheDuration: {
    top: 327,
    left: 76,
    width: 222,
    height: 65,
  },
  history: {
    top: 464,
    fontSize: FontSize.size_mid,
    height: 29,
    left: 0,
  },
  challengesChild4: {
    top: 419,
    backgroundColor: "#b3ffb1",
    height: 34,
    width: 375,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  activeFor5d19h: {
    top: 427,
    height: 21,
    width: 374,
    left: 0,
  },
  wrapper: {
    left: 33,
  },
  ellipseIcon: {
    left: 101,
  },
  challengesChild5: {
    left: 224,
    width: 32,
    top: 611,
  },
  groupIcon: {
    top: 619,
    left: 37,
    height: 22,
    width: 24,
    position: "absolute",
  },
  iconmonstrShoppingBag56: {
    top: 617,
    left: 107,
    overflow: "hidden",
  },
  iconmonstrBuilding57: {
    left: 167,
    height: 24,
    top: 615,
    overflow: "hidden",
  },
  challengesChild6: {
    left: 163,
    width: 32,
    top: 611,
  },
  search1: {
    width: 46,
  },
  search: {
    left: 217,
  },
  icon1: {
    overflow: "hidden",
  },
  iconmonstrBuilding58: {
    left: 167,
    height: 24,
    top: 615,
  },
  challenges2: {
    left: 94,
  },
  leaderboard1: {
    height: 14,
    width: 47,
    fontSize: FontSize.size_6xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
  },
  leaderboard: {
    left: 26,
  },
  home: {
    left: 156,
    top: 645,
    position: "absolute",
  },
  container: {
    left: 285,
    top: 611,
    width: 33,
  },
  iconmonstrShoppingBag57: {
    left: 109,
    top: 616,
  },
  iconmonstrBinoculars84: {
    left: 228,
    height: 24,
    top: 615,
  },
  letsChat1: {
    width: 48,
  },
  letsChat: {
    left: 277,
  },
  challenges: {
    backgroundColor: Color.colorLightcyan,
    flex: 1,
    height: 667,
    overflow: "hidden",
    width: "100%",
  },
});

export default Challenges2;
