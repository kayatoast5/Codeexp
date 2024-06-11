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

export type ChallengesType = {
  style?: StyleProp<ViewStyle>;
};

const Challenges = ({ style }: ChallengesType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable onPress={() => navigation.navigate("Challenges2")}>
      <Text style={styles.challenges1}>Challenges</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  challenges1: {
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.changaRegular,
    color: Color.colorBlack,
    textAlign: "center",
    width: 47,
    height: 12,
  },
});

export default Challenges;
