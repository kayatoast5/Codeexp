import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ContinueChat = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.continueChat}>
      <View style={[styles.continueChatChild, styles.continueChildBorder]} />
      <Image
        style={styles.continueChatItem}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Image
        style={[styles.image7Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Text style={[styles.username1, styles.username1Typo]}>username 1</Text>
      <Text style={styles.shouldIBuy}>
        Should i buy tissue refills or tissue boxes?
      </Text>
      <View style={styles.continueChatInner} />
      <Text style={[styles.addComment, styles.username1Typo]}>
        + Add comment
      </Text>
      <View style={[styles.rectangleView, styles.continueChildBorder]} />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Text style={[styles.username2, styles.usernameTypo]}>username 2</Text>
      <View style={[styles.continueChatChild1, styles.continueChildBorder]} />
      <Text style={[styles.ifYoureLooking, styles.ifYoureLookingTypo]}>
        If you're looking to save money and reduce waste, tissue refills are a
        better option. They often come in larger quantities and use less
        packaging than individual tissue boxes. However, if convenience and
        aesthetics are important, especially if you have guests often, tissue
        boxes might be the way to go.
      </Text>
      <Image
        style={[styles.image8Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Image
        style={[styles.continueChatChild2, styles.username3Position]}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Text style={[styles.username3, styles.username3Position]}>
        username 3
      </Text>
      <Text
        style={[styles.tissueRefillsAre, styles.ifYoureLookingTypo]}
      >{`Tissue refills are great if you're environmentally conscious and looking to minimize waste. They often cost less per tissue, too. However, if you value convenience and ease of access, tissue boxes might be more suitable. `}</Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("JoinLeaderboard")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-24.png")}
        />
      </Pressable>
      <Image
        style={[styles.continueChatChild3, styles.wrapperPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={[styles.continueChatChild4, styles.continueChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-16.png")}
      />
      <Image
        style={[styles.iconmonstrShoppingBag58, styles.iconmonstrLayout1]}
        contentFit="cover"
        source={require("../assets/iconmonstrshoppingbag5-6.png")}
      />
      <Image
        style={[styles.iconmonstrBuilding59, styles.iconmonstrLayout]}
        contentFit="cover"
        source={require("../assets/iconmonstrbuilding5-71.png")}
      />
      <Image
        style={[styles.continueChatChild5, styles.continueChildPosition]}
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
        style={[styles.iconmonstrBuilding510, styles.iconmonstrLayout]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconmonstrbuilding5-71.png")}
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
        style={[styles.container, styles.continueChildPosition]}
        onPress={() => navigation.navigate("LetsChat1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-27.png")}
        />
      </Pressable>
      <Image
        style={[styles.continueChatChild3, styles.wrapperPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Pressable
        style={[styles.iconmonstrShoppingBag59, styles.iconmonstrLayout1]}
        onPress={() => navigation.navigate("Challenges2")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconmonstrshoppingbag5-6.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.iconmonstrBinoculars85, styles.iconmonstrLayout]}
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
  continueChildBorder: {
    width: 375,
    left: 0,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  iconLayout1: {
    height: 35,
    width: 74,
    left: 12,
    position: "absolute",
  },
  username1Typo: {
    height: 23,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  ellipseIconLayout: {
    left: 11,
    height: 20,
    width: 19,
  },
  usernameTypo: {
    left: 35,
    height: 23,
    width: 125,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
  },
  ifYoureLookingTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  username3Position: {
    top: 469,
    position: "absolute",
  },
  wrapperPosition: {
    top: 616,
    width: 32,
    height: 33,
    position: "absolute",
  },
  continueChildPosition: {
    top: 615,
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
    top: 619,
    width: 24,
    position: "absolute",
  },
  homePosition: {
    top: 649,
    position: "absolute",
  },
  search1Typo: {
    height: 13,
    textAlign: "center",
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
    color: Color.colorBlack,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  challengesPosition: {
    top: 650,
    position: "absolute",
  },
  homeTypo: {
    height: 12,
    width: 47,
    textAlign: "center",
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
    color: Color.colorBlack,
  },
  continueChatChild: {
    top: 4,
    height: 191,
  },
  continueChatItem: {
    height: 20,
    width: 19,
    left: 12,
    top: 16,
    position: "absolute",
  },
  image7Icon: {
    top: 143,
  },
  username1: {
    width: 125,
    height: 23,
    fontSize: FontSize.size_mini,
    left: 36,
    top: 16,
  },
  shouldIBuy: {
    top: 47,
    fontSize: FontSize.size_5xl,
    width: 353,
    height: 33,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    left: 12,
    position: "absolute",
  },
  continueChatInner: {
    top: 153,
    left: 103,
    width: 209,
    height: 25,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  addComment: {
    marginTop: -178,
    top: "50%",
    left: 135,
    fontSize: FontSize.size_base,
    width: 207,
  },
  rectangleView: {
    top: 205,
    height: 241,
  },
  ellipseIcon: {
    top: 215,
    position: "absolute",
  },
  username2: {
    top: 215,
    position: "absolute",
  },
  continueChatChild1: {
    top: 455,
    height: 152,
  },
  ifYoureLooking: {
    top: 253,
    left: 22,
    width: 313,
    height: 46,
  },
  image8Icon: {
    top: 401,
  },
  continueChatChild2: {
    left: 11,
    height: 20,
    width: 19,
  },
  username3: {
    left: 35,
    height: 23,
    width: 125,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
  },
  tissueRefillsAre: {
    top: 496,
    left: 27,
    width: 308,
    height: 106,
  },
  wrapper: {
    left: 43,
    width: 32,
  },
  continueChatChild3: {
    left: 111,
    width: 32,
  },
  continueChatChild4: {
    left: 234,
    width: 32,
  },
  groupIcon: {
    top: 623,
    left: 47,
    height: 22,
    width: 24,
    position: "absolute",
  },
  iconmonstrShoppingBag58: {
    top: 621,
    left: 117,
    overflow: "hidden",
  },
  iconmonstrBuilding59: {
    left: 177,
    height: 24,
    top: 619,
    overflow: "hidden",
  },
  continueChatChild5: {
    left: 173,
    width: 32,
  },
  search1: {
    width: 46,
  },
  search: {
    left: 227,
  },
  icon1: {
    overflow: "hidden",
  },
  iconmonstrBuilding510: {
    left: 177,
    height: 24,
    top: 619,
  },
  challenges: {
    left: 104,
  },
  leaderboard1: {
    height: 14,
    width: 47,
    textAlign: "center",
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
    color: Color.colorBlack,
  },
  leaderboard: {
    left: 36,
    top: 650,
  },
  home: {
    left: 166,
    top: 649,
    position: "absolute",
  },
  container: {
    left: 295,
    width: 33,
  },
  iconmonstrShoppingBag59: {
    left: 119,
    top: 620,
  },
  iconmonstrBinoculars85: {
    left: 238,
    height: 24,
    top: 619,
  },
  letsChat1: {
    width: 48,
  },
  letsChat: {
    left: 287,
  },
  continueChat: {
    backgroundColor: Color.colorLightcyan,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default ContinueChat;
