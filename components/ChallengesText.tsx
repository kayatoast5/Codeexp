import * as React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ChallengesText = () => {
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

export default ChallengesText;
