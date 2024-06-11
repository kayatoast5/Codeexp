import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const IsMyProduct = () => {
  return <Text style={styles.isMyProduct}>Is my product sustainable?</Text>;
};

const styles = StyleSheet.create({
  isMyProduct: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.changaRegular,
    color: Color.colorBlack,
    textAlign: "center",
    width: 348,
    height: 31,
  },
});

export default IsMyProduct;
