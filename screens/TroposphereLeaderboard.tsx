import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, ImageBackground } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const TroposphereLeaderboard = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.troposphereLeaderboard}
      onPress={() => navigation.navigate("StratosphereLeaderboard")}
    >
      <ImageBackground
        style={[styles.icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/troposphereleaderboard.png")}
      >
        <Image
          style={[styles.troposphereLeaderboardChild, styles.wrapperLayout]}
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
          style={styles.search}
          onPress={() => navigation.navigate("SearchPage")}
        >
          <Text style={[styles.search1, styles.search1Typo]}>Search</Text>
        </Pressable>
        <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        <Pressable
          style={styles.search}
          onPress={() => navigation.navigate("Challenges2")}
        >
          <Text style={styles.homeTypo}>Challenges</Text>
        </Pressable>
        <Pressable
          style={styles.search}
          onPress={() => navigation.navigate("JoinLeaderboard")}
        >
          <Text style={styles.leaderboard1}>Leaderboard</Text>
        </Pressable>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("JoinLeaderboard")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/group-151.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("HomePage")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/ellipse-26.png")}
          />
        </Pressable>
        <Image
          style={[styles.wrapper, styles.wrapperLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-26.png")}
        />
        <Image
          style={styles.troposphereLeaderboardInner}
          contentFit="cover"
          source={require("../assets/ellipse-271.png")}
        />
        <Pressable
          style={[styles.iconmonstrBinoculars84, styles.frameLayout]}
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
          source={require("../assets/vector5.png")}
        />
        <Pressable
          style={[styles.frame, styles.frameLayout]}
          onPress={() => navigation.navigate("JoinLeaderboard")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/group-161.png")}
          />
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
    width: 32,
    height: 33,
  },
  search1Typo: {
    height: 13,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
  },
  homeTypo: {
    height: 12,
    width: 47,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
  },
  frameLayout: {
    width: 24,
    marginLeft: 15,
  },
  troposphereLeaderboardChild: {
    height: 33,
  },
  iconmonstrShoppingBag56: {
    width: 21,
    marginLeft: 15,
    height: 22,
    overflow: "hidden",
  },
  letsChat: {
    width: 48,
    marginLeft: 15,
  },
  search1: {
    width: 46,
  },
  search: {
    marginLeft: 15,
  },
  home: {
    marginLeft: 15,
  },
  leaderboard1: {
    height: 14,
    width: 47,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
  },
  wrapper: {
    marginLeft: 15,
    height: 33,
  },
  troposphereLeaderboardInner: {
    width: 33,
    marginLeft: 15,
    height: 33,
  },
  icon3: {
    overflow: "hidden",
  },
  iconmonstrBinoculars84: {
    height: 24,
  },
  vectorIcon: {
    width: 23,
    height: 21,
    marginLeft: 15,
  },
  frame: {
    height: 22,
  },
  icon: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 31,
    paddingRight: 30,
    paddingBottom: 591,
    overflow: "hidden",
  },
  troposphereLeaderboard: {
    height: 640,
    width: "100%",
  },
});

export default TroposphereLeaderboard;
