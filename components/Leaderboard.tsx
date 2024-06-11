import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type LeaderboardType = {
  style?: StyleProp<ViewStyle>;
};

const Leaderboard = ({ style }: LeaderboardType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable onPress={() => navigation.navigate("JoinLeaderboard")}>
      <Text style={styles.leaderboard1}>Leaderboard</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  leaderboard1: {
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.changaRegular,
    color: Color.colorBlack,
    textAlign: "center",
    width: 47,
    height: 14,
  },
});

export default Leaderboard;
