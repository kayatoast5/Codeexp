import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const HomeText = () => {
  return <Text style={styles.home}>Home</Text>;
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

export default HomeText;
