import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Reporting = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.reporting}>
      <Text style={[styles.wasThisHelpful, styles.wasThisHelpfulFlexBox]}>
        Was this helpful ?
      </Text>
      <View style={styles.reportingChild} />
      <Text style={[styles.howToReportContainer, styles.wasThisHelpfulFlexBox]}>
        <Text style={styles.howToReportThings}>
          <Text style={styles.howToReport}>How to report things?</Text>
          <Text style={styles.text}>{` 

`}</Text>
        </Text>
        <Text style={styles.ifSomeoneGainsAccessToYou}>
          <Text style={styles.howToReportThings}>
            If someone gains access to your account or you're unable to log in, 
          </Text>
          <Text style={styles.reportHere}>Report here</Text>
          <Text style={styles.howToReportThings}>{` to secure your account.

If you're experiencing a technical problem on Instagram, you can `}</Text>
          <Text style={styles.reportHere}>report it here</Text>
          <Text style={styles.howToReportThings}>{`.

If you would like to report abusive content `}</Text>
          <Text style={styles.reportHere}>report the profile here</Text>
          <Text style={styles.howToReportThings}>{`.
`}</Text>
        </Text>
      </Text>
      <Image
        style={styles.image12Icon}
        contentFit="cover"
        source={require("../assets/image-12.png")}
      />
      <Image
        style={[styles.reportingItem, styles.reportingPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={styles.iconmonstrShoppingBag56}
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
        style={[styles.wrapper, styles.reportingPosition]}
        onPress={() => navigation.navigate("JoinLeaderboard")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-15.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.reportingPosition]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
      </Pressable>
      <Image
        style={[styles.reportingInner, styles.reportingPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.reportingPosition]}
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
        style={styles.vectorIcon}
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
    </View>
  );
};

const styles = StyleSheet.create({
  wasThisHelpfulFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  reportingPosition: {
    height: 33,
    top: 591,
    position: "absolute",
  },
  search1Typo: {
    height: 13,
    textAlign: "center",
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.changaRegular,
    color: Color.colorBlack,
  },
  homePosition: {
    top: 625,
    position: "absolute",
  },
  homeTypo: {
    height: 12,
    width: 47,
    textAlign: "center",
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.changaRegular,
    color: Color.colorBlack,
  },
  challengesPosition: {
    top: 626,
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
  wasThisHelpful: {
    marginLeft: -96,
    top: 481,
    left: "50%",
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    fontFamily: FontFamily.bodyText,
    width: 222,
    height: 29,
  },
  reportingChild: {
    top: 475,
    left: 63,
    backgroundColor: Color.colorGainsboro_400,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 258,
    height: 41,
    position: "absolute",
  },
  howToReport: {
    fontSize: FontSize.size_21xl,
  },
  text: {
    fontSize: FontSize.bodyText_size,
  },
  howToReportThings: {
    fontFamily: FontFamily.changaRegular,
  },
  reportHere: {
    fontWeight: "200",
    fontFamily: FontFamily.changaExtraLight,
  },
  ifSomeoneGainsAccessToYou: {
    fontSize: FontSize.size_base,
  },
  howToReportContainer: {
    top: 24,
    left: 45,
    width: 314,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  image12Icon: {
    top: 528,
    left: 130,
    borderRadius: Border.br_4xs,
    width: 116,
    height: 60,
    position: "absolute",
  },
  reportingItem: {
    left: 105,
    width: 32,
    height: 33,
    top: 591,
  },
  iconmonstrShoppingBag56: {
    top: 596,
    left: 113,
    width: 21,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  letsChat: {
    left: 279,
    width: 48,
    top: 625,
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
    top: 625,
    position: "absolute",
  },
  challenges: {
    left: 99,
  },
  leaderboard1: {
    height: 14,
    width: 47,
    textAlign: "center",
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.changaRegular,
    color: Color.colorBlack,
  },
  leaderboard: {
    left: 33,
  },
  wrapper: {
    left: 40,
    width: 32,
    height: 33,
    top: 591,
  },
  container: {
    left: 167,
    width: 32,
    height: 33,
    top: 591,
  },
  reportingInner: {
    left: 229,
    width: 32,
    height: 33,
    top: 591,
  },
  ellipseIcon: {
    left: 290,
    width: 33,
    height: 33,
    top: 591,
  },
  icon2: {
    overflow: "hidden",
  },
  iconmonstrBinoculars84: {
    left: 233,
    top: 595,
    height: 24,
  },
  vectorIcon: {
    height: "3.3%",
    width: "6.39%",
    top: "92.92%",
    right: "46.17%",
    bottom: "3.78%",
    left: "47.44%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frame: {
    left: 44,
    top: 598,
    height: 22,
  },
  reporting: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorLightcyan,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default Reporting;
