import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

export type IconmonstrBuilding5Type = {
  style?: StyleProp<ViewStyle>;
};

const IconmonstrBuilding5 = ({ style }: IconmonstrBuilding5Type) => {
  return (
    <Image
      style={[styles.iconmonstrBuilding51, style]}
      contentFit="cover"
      source={require("../assets/iconmonstrbuilding5-7.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconmonstrBuilding51: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default IconmonstrBuilding5;
