import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

export type EllipseIconType = {
  style?: StyleProp<ViewStyle>;
};

const EllipseIcon = ({ style }: EllipseIconType) => {
  return (
    <Image
      style={[styles.ellipseIcon, style]}
      contentFit="cover"
      source={require("../assets/ellipse-24.png")}
    />
  );
};

const styles = StyleSheet.create({
  ellipseIcon: {
    width: 32,
    height: 33,
  },
});

export default EllipseIcon;
