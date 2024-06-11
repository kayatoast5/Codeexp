import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

export type Image11IconType = {
  style?: StyleProp<ViewStyle>;
};

const Image11Icon = ({ style }: Image11IconType) => {
  return (
    <Image
      style={[styles.image11Icon, style]}
      contentFit="cover"
      source={require("../assets/group-16.png")}
    />
  );
};

const styles = StyleSheet.create({
  image11Icon: {
    width: 24,
    height: 22,
  },
});

export default Image11Icon;
