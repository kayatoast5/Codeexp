import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

export type IconmonstrBuilding51Type = {
  style?: StyleProp<ViewStyle>;
};

const IconmonstrBuilding51 = ({ style }: IconmonstrBuilding51Type) => {
  return (
    <Image
      style={[styles.iconmonstrBuilding52, style]}
      contentFit="cover"
      source={require("../assets/iconmonstrbuilding5-7.png")}
    />
  );
};

const styles = StyleSheet.create({
  iconmonstrBuilding52: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default IconmonstrBuilding51;
