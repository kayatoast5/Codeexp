import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const HomePageContainer = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.letsChatParent}>
      <Text style={[styles.letsChat, styles.searchTypo]}>Let’s Chat</Text>
      <Image
        style={[styles.groupChild, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={styles.image11Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <Image
        style={[styles.groupItem, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
      </Pressable>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.groupInner, styles.wrapperPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.wrapperPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-33.png")}
      />
      <Text style={[styles.search, styles.searchTypo]}>Search</Text>
      <Pressable
        style={[styles.challenges, styles.homePosition]}
        onPress={() => navigation.navigate("Challenges2")}
      >
        <Text style={styles.homeTypo}>Challenges</Text>
      </Pressable>
      <Pressable
        style={[styles.leaderboard, styles.homePosition]}
        onPress={() => navigation.navigate("JoinLeaderboard")}
      >
        <Text style={styles.leaderboard1}>Leaderboard</Text>
      </Pressable>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchTypo: {
    height: 13,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
    top: 37,
    position: "absolute",
  },
  groupLayout: {
    height: 33,
    top: 1,
    width: 32,
    position: "absolute",
  },
  wrapperPosition: {
    top: 0,
    height: 33,
    position: "absolute",
  },
  vectorIconLayout: {
    width: "8.03%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  homePosition: {
    top: 37,
    position: "absolute",
  },
  homeTypo: {
    height: 12,
    width: 47,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
  },
  letsChat: {
    left: 251,
    width: 48,
  },
  groupChild: {
    left: 8,
  },
  image11Icon: {
    top: 8,
    left: 12,
    width: 24,
    height: 22,
    position: "absolute",
  },
  groupItem: {
    left: 76,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    left: 138,
    width: 32,
    top: 0,
  },
  vectorIcon: {
    width: "7.02%",
    right: "64.88%",
    left: "28.09%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "47.06%",
    top: "9.8%",
    height: "43.14%",
    position: "absolute",
  },
  vectorIcon1: {
    right: "44.48%",
    left: "47.49%",
    bottom: "47.06%",
    top: "9.8%",
    height: "43.14%",
    width: "8.03%",
  },
  groupInner: {
    left: 199,
    width: 32,
    top: 0,
  },
  vectorIcon2: {
    height: "35.29%",
    top: "13.73%",
    right: "24.08%",
    bottom: "50.98%",
    left: "67.89%",
  },
  ellipseIcon: {
    left: 260,
    width: 33,
  },
  search: {
    left: 191,
    width: 46,
  },
  challenges: {
    left: 68,
  },
  leaderboard1: {
    height: 14,
    width: 47,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
  },
  leaderboard: {
    left: 0,
  },
  home: {
    left: 130,
    top: 37,
    position: "absolute",
  },
  letsChatParent: {
    top: 580,
    left: 31,
    width: 299,
    height: 51,
    position: "absolute",
  },
});

export default HomePageContainer;
