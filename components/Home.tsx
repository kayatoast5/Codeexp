import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type HomeType = {
  style?: StyleProp<ViewStyle>;
};

const Home = ({ style }: HomeType) => {
  return <Text style={[styles.home, style]}>Home</Text>;
};

const styles = StyleSheet.create({
  home: {
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.changaRegular,
    color: Color.colorBlack,
    textAlign: "center",
    width: 47,
    height: 12,
  },
});

export default Home;
