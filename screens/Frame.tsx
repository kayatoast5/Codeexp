import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Frame = () => {
  return <View style={styles.image11Parent} />;
};

const styles = StyleSheet.create({
  image11Parent: {
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default Frame;
