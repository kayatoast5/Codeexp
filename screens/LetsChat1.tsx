import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const LetsChat1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.letsChat}>
      <View style={[styles.letsChatChild, styles.letsLayout]} />
      <View style={styles.letsChatItem} />
      <View style={[styles.letsChatInner, styles.letsLayout]} />
      <View style={[styles.rectangleView, styles.letsLayout]} />
      <Text style={[styles.shouldIBuy, styles.shouldIBuyTypo]}>
        Should i buy tissue refills or tissue boxes?
      </Text>
      <Text style={[styles.whichMineralBottle, styles.shouldIBuyTypo]}>
        Which mineral bottle is better?
      </Text>
      <Text style={[styles.arePacketDrinks, styles.whatDoWithTypo]}>
        Are packet drinks more sustainable than bottled?
      </Text>
      <Text style={[styles.whatDoWith, styles.whatDoWithTypo]}>
        What do with the glass bottle I bought?Can it be recycled?
      </Text>
      <Text style={[styles.username1, styles.usernameTypo]}>username 1</Text>
      <Text style={[styles.username2, styles.username2Typo]}>username 2</Text>
      <Text style={[styles.username3, styles.usernameTypo]}>username 3</Text>
      <Text style={[styles.username4, styles.usernameTypo]}>username 4</Text>
      <View style={[styles.letsChatChild1, styles.letsChildLayout]} />
      <View style={[styles.letsChatChild2, styles.letsChildLayout]} />
      <View style={[styles.letsChatChild3, styles.letsChildLayout]} />
      <View style={[styles.letsChatChild4, styles.letsChildLayout]} />
      <Image
        style={[styles.image2Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <Image
        style={[styles.image3Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
      <Image
        style={[styles.image4Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
      <Image
        style={[styles.image5Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
      <Text style={styles.comments}>comments</Text>
      <Text style={styles.comments1}>comments</Text>
      <Text style={[styles.comments2, styles.commentsTypo]}>comments</Text>
      <Text style={[styles.comments3, styles.commentsTypo]}>comments</Text>
      <Image
        style={[styles.ellipseIcon, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Image
        style={[styles.iconmonstrShoppingBag56, styles.iconmonstrLayout2]}
        contentFit="cover"
        source={require("../assets/iconmonstrshoppingbag5-6.png")}
      />
      <Pressable
        style={[styles.iconmonstrBuilding57, styles.iconmonstrLayout]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconmonstrbuilding5-71.png")}
        />
      </Pressable>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("ContinueChat")}
      />
      <Text style={[styles.askQuestion, styles.username2Typo]}>
        +Ask question
      </Text>
      <Pressable
        style={[styles.leaderboard, styles.challengesPosition]}
        onPress={() => navigation.navigate("JoinLeaderboard")}
      >
        <Text style={[styles.leaderboard1, styles.home1Typo]}>Leaderboard</Text>
      </Pressable>
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
        style={[styles.groupIcon, styles.iconmonstrLayout]}
        contentFit="cover"
        source={require("../assets/group-16.png")}
      />
      <Pressable
        style={[styles.home, styles.homePosition]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
      </Pressable>
      <Image
        style={[styles.ellipseIcon, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
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
        style={[styles.iconmonstrShoppingBag57, styles.iconmonstrLayout2]}
        onPress={() => navigation.navigate("Challenges2")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconmonstrshoppingbag5-6.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.challenges, styles.challengesPosition]}
        onPress={() => navigation.navigate("Challenges2")}
      >
        <Text style={[styles.home1, styles.home1Typo]}>Challenges</Text>
      </Pressable>
      <Pressable
        style={[styles.iconmonstrBuilding57, styles.iconmonstrLayout]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconmonstrbuilding5-71.png")}
        />
      </Pressable>
      <Image
        style={[styles.letsChatChild6, styles.framePosition]}
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
        style={[styles.letsChat1, styles.homePosition]}
        onPress={() => navigation.navigate("LetsChat1")}
      >
        <Text style={[styles.letsChat2, styles.search1Typo]}>Let’s Chat</Text>
      </Pressable>
      <Pressable
        style={[styles.iconmonstrBinoculars84, styles.iconmonstrLayout]}
        onPress={() => navigation.navigate("SearchPage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconmonstrbinoculars8-4.png")}
        />
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
    </View>
  );
};

const styles = StyleSheet.create({
  letsLayout: {
    height: 136,
    width: 375,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  shouldIBuyTypo: {
    width: 312,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    left: 12,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  whatDoWithTypo: {
    fontSize: FontSize.size_mini,
    width: 312,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    left: 12,
    position: "absolute",
  },
  usernameTypo: {
    height: 17,
    width: 110,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  username2Typo: {
    height: 19,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  letsChildLayout: {
    height: 20,
    width: 63,
    backgroundColor: Color.colorGainsboro_300,
    left: 12,
    position: "absolute",
  },
  iconPosition: {
    width: 65,
    left: 12,
    position: "absolute",
  },
  iconLayout1: {
    height: 28,
    width: 65,
    left: 12,
    position: "absolute",
  },
  commentsTypo: {
    height: 15,
    left: 92,
    width: 89,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  wrapperLayout: {
    height: 33,
    top: 617,
    width: 32,
    position: "absolute",
  },
  iconmonstrLayout2: {
    width: 21,
    height: 22,
    position: "absolute",
  },
  iconmonstrLayout: {
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  challengesPosition: {
    top: 651,
    position: "absolute",
  },
  home1Typo: {
    width: 47,
    textAlign: "center",
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
    color: Color.colorBlack,
  },
  homePosition: {
    top: 650,
    position: "absolute",
  },
  framePosition: {
    top: 616,
    height: 33,
    position: "absolute",
  },
  search1Typo: {
    height: 13,
    textAlign: "center",
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
    color: Color.colorBlack,
  },
  letsChatChild: {
    top: 138,
  },
  letsChatItem: {
    top: 0,
    height: 134,
    width: 375,
    left: 0,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  letsChatInner: {
    top: 277,
  },
  rectangleView: {
    top: 416,
  },
  shouldIBuy: {
    top: 32,
    height: 24,
  },
  whichMineralBottle: {
    top: 168,
    height: 23,
  },
  arePacketDrinks: {
    top: 305,
    height: 24,
  },
  whatDoWith: {
    top: 447,
    height: 25,
  },
  username1: {
    top: 9,
    left: 36,
    height: 17,
  },
  username2: {
    top: 143,
    width: 110,
    fontSize: FontSize.size_3xs,
    height: 19,
    left: 36,
  },
  username3: {
    top: 285,
    left: 39,
  },
  username4: {
    top: 424,
    left: 34,
  },
  letsChatChild1: {
    top: 104,
    height: 20,
    width: 63,
    backgroundColor: Color.colorGainsboro_300,
  },
  letsChatChild2: {
    top: 243,
  },
  letsChatChild3: {
    top: 382,
  },
  letsChatChild4: {
    top: 519,
  },
  image2Icon: {
    top: 102,
    height: 25,
  },
  image3Icon: {
    top: 237,
    height: 26,
  },
  image4Icon: {
    top: 376,
  },
  image5Icon: {
    top: 515,
  },
  comments: {
    left: 95,
    height: 16,
    width: 89,
    top: 104,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  comments1: {
    top: 241,
    left: 92,
    height: 16,
    width: 89,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  comments2: {
    top: 379,
  },
  comments3: {
    top: 518,
  },
  ellipseIcon: {
    left: 113,
  },
  iconmonstrShoppingBag56: {
    top: 622,
    left: 119,
    overflow: "hidden",
    height: 22,
  },
  icon: {
    overflow: "hidden",
  },
  iconmonstrBuilding57: {
    left: 179,
    top: 620,
    width: 24,
    height: 24,
  },
  rectanglePressable: {
    top: 566,
    left: 51,
    width: 263,
    height: 34,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  askQuestion: {
    top: 574,
    left: 129,
    width: 216,
    height: 19,
    fontSize: FontSize.size_smi,
  },
  leaderboard1: {
    height: 14,
  },
  leaderboard: {
    left: 38,
  },
  wrapper: {
    left: 45,
  },
  groupIcon: {
    top: 624,
    left: 49,
    height: 22,
  },
  home1: {
    height: 12,
  },
  home: {
    left: 168,
  },
  container: {
    left: 175,
    width: 32,
    top: 616,
  },
  iconmonstrShoppingBag57: {
    left: 121,
    top: 621,
    height: 22,
  },
  challenges: {
    left: 106,
  },
  letsChatChild6: {
    left: 236,
    width: 32,
    top: 616,
  },
  search1: {
    width: 46,
  },
  search: {
    left: 229,
  },
  letsChat2: {
    width: 48,
  },
  letsChat1: {
    left: 289,
  },
  iconmonstrBinoculars84: {
    left: 240,
    top: 620,
    width: 24,
    height: 24,
  },
  frame: {
    left: 297,
    width: 33,
  },
  letsChat: {
    backgroundColor: Color.colorLightcyan,
    flex: 1,
    height: 667,
    width: "100%",
  },
});

export default LetsChat1;
