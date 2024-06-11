import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const JoinLeaderboard = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      style={styles.joinLeaderboardIcon}
      resizeMode="cover"
      source={require("../assets/joinleaderboard.png")}
    >
      <Pressable
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate("TroposphereLeaderboard")}
      >
        <Text style={styles.joinLeaderboard}>Join Leaderboard</Text>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  joinLeaderboard: {
    fontSize: FontSize.size_5xl,
    lineHeight: 36,
    fontWeight: "500",
    fontFamily: FontFamily.changaMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
  buttonPrimary: {
    position: "absolute",
    top: 581,
    left: 16,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: "#989898",
    width: 343,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 14,
  },
  joinLeaderboardIcon: {
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default JoinLeaderboard;
