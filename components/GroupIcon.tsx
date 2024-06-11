import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

export type GroupIconType = {
  style?: StyleProp<ViewStyle>;
};

const GroupIcon = ({ style }: GroupIconType) => {
  return (
    <Image
      style={[styles.groupIcon, style]}
      contentFit="cover"
      source={require("../assets/group-16.png")}
    />
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    width: 24,
    height: 22,
  },
});

export default GroupIcon;
