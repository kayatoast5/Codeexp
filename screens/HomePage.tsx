import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Property1Default from "./Property1Default";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homePage}>
      <View style={styles.homePageChild} />
      <View style={styles.thisWeeksProgressWrapper}>
        <Text style={styles.thisWeeksProgress}>This Week’s Progress</Text>
      </View>
      <Image
        style={[styles.homePageItem, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("HelpCentre")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
      </Pressable>
      <Text style={[styles.helloUsername, styles.economicalTypo]}>
        Hello username!
      </Text>
      <View style={[styles.homePageInner, styles.progressBar1Layout]} />
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame-102.png")}
      />
      <Text style={[styles.qrCode, styles.qrCodeTypo]}>Qr code</Text>
      <Text style={[styles.helpCentre, styles.qrCodeTypo]}>Help Centre</Text>
      <Text style={[styles.economical, styles.economicalTypo]}>EcoNomical</Text>
      <View style={[styles.progressBar, styles.progressBarSpaceBlock]}>
        <View style={styles.progressBarChild} />
      </View>
      <View style={[styles.progressBar1, styles.progressBar1Layout]}>
        <Property1Default />
        <View
          style={[styles.property1default, styles.property1defaultShadowBox]}
        >
          <View style={styles.progressBarChild} />
        </View>
        <View
          style={[styles.property1variant3, styles.property1defaultShadowBox]}
        >
          <View style={styles.progressBarChild} />
        </View>
      </View>
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../assets/image-21.png")}
      />
      <Image
        style={styles.graphicIcon}
        contentFit="cover"
        source={require("../assets/graphic.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.frameLayout]}
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
        style={[styles.container, styles.frameLayout]}
        onPress={() => navigation.navigate("JoinLeaderboard")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-152.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
      </Pressable>
      <Image
        style={[styles.homePageChild1, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={styles.homePageChild2}
        contentFit="cover"
        source={require("../assets/ellipse-33.png")}
      />
      <Pressable
        style={[styles.iconmonstrBinoculars84, styles.groupPressableLayout]}
        onPress={() => navigation.navigate("SearchPage")}
      >
        <Image
          style={[styles.icon3, styles.iconLayout]}
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
        style={[styles.groupPressable, styles.groupPressableLayout]}
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
  wrapperLayout: {
    height: 112,
    width: 119,
    top: 277,
    position: "absolute",
  },
  economicalTypo: {
    textAlign: "left",
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  progressBar1Layout: {
    borderWidth: 1,
    position: "absolute",
  },
  qrCodeTypo: {
    fontSize: FontSize.size_xs,
    top: 397,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
    position: "absolute",
  },
  progressBarSpaceBlock: {
    paddingBottom: Padding.p_11xs,
    paddingRight: Padding.p_231xl,
    paddingTop: Padding.p_11xs,
    paddingLeft: Padding.p_11xs,
  },
  property1defaultShadowBox: {
    left: 19,
    height: 19,
    width: 300,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    width: 32,
    top: 583,
    height: 33,
    position: "absolute",
  },
  search1Typo: {
    height: 13,
    fontSize: FontSize.size_6xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
  },
  homePosition: {
    top: 617,
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
  challengesPosition: {
    top: 618,
    position: "absolute",
  },
  groupPressableLayout: {
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  homePageChild: {
    marginLeft: -172,
    top: 99,
    backgroundColor: Color.colorGainsboro_400,
    width: 343,
    height: 80,
    left: "50%",
    position: "absolute",
  },
  thisWeeksProgress: {
    fontSize: FontSize.size_mini,
    width: 175,
    height: 18,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
  },
  thisWeeksProgressWrapper: {
    top: 90,
    left: 30,
    width: 323,
    height: 87,
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: 11,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  homePageItem: {
    left: 41,
    width: 119,
    top: 277,
  },
  wrapper: {
    left: 196,
    width: 119,
    top: 277,
  },
  helloUsername: {
    top: 201,
    left: 74,
    width: 239,
    height: 57,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_13xl,
  },
  homePageInner: {
    top: 471,
    left: 47,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    width: 280,
    height: 95,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  frameIcon: {
    top: 461,
    left: 45,
    borderRadius: 11,
    width: 283,
    height: 106,
    position: "absolute",
    overflow: "hidden",
  },
  qrCode: {
    left: 62,
    width: 77,
    height: 17,
  },
  helpCentre: {
    left: 209,
    width: 93,
    height: 22,
  },
  economical: {
    marginLeft: -102,
    top: 57,
    fontFamily: FontFamily.nicoMoji,
    width: 218,
    height: 36,
    left: "50%",
  },
  progressBarChild: {
    alignSelf: "stretch",
    backgroundColor: Color.colorPalegreen,
    borderRadius: Border.br_xl,
    flex: 1,
  },
  progressBar: {
    top: 132,
    height: 19,
    width: 300,
    paddingBottom: Padding.p_11xs,
    paddingRight: Padding.p_231xl,
    paddingTop: Padding.p_11xs,
    paddingLeft: Padding.p_11xs,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    left: 41,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    overflow: "hidden",
  },
  property1default: {
    top: 15,
    paddingBottom: Padding.p_11xs,
    paddingRight: Padding.p_231xl,
    paddingTop: Padding.p_11xs,
    paddingLeft: Padding.p_11xs,
  },
  property1variant3: {
    top: 78,
    padding: Padding.p_11xs,
  },
  progressBar1: {
    top: -22,
    left: 378,
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: "#9747ff",
    width: 340,
    height: 117,
    display: "none",
    overflow: "hidden",
  },
  image2Icon: {
    top: 307,
    left: 72,
    width: 56,
    height: 58,
    position: "absolute",
  },
  graphicIcon: {
    top: 20,
    left: 325,
    height: 33,
    width: 33,
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  ellipseIcon: {
    left: 111,
  },
  iconmonstrShoppingBag56: {
    top: 588,
    left: 119,
    width: 21,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  letsChat: {
    left: 285,
    width: 48,
    top: 617,
    position: "absolute",
  },
  search1: {
    width: 46,
  },
  search: {
    left: 228,
  },
  home: {
    left: 164,
    top: 617,
    position: "absolute",
  },
  challenges: {
    left: 105,
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
    left: 39,
  },
  container: {
    left: 46,
  },
  frame: {
    left: 173,
  },
  homePageChild1: {
    left: 235,
  },
  homePageChild2: {
    left: 296,
    top: 583,
    height: 33,
    width: 33,
    position: "absolute",
  },
  icon3: {
    overflow: "hidden",
  },
  iconmonstrBinoculars84: {
    left: 239,
    top: 587,
    height: 24,
  },
  vectorIcon: {
    height: "3.3%",
    width: "6.39%",
    top: "91.67%",
    right: "44.5%",
    bottom: "5.03%",
    left: "49.11%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPressable: {
    left: 50,
    top: 590,
    height: 22,
  },
  homePage: {
    backgroundColor: Color.colorLightcyan,
    height: 640,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default HomePage;
