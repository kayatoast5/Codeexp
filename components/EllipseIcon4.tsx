import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

export type EllipseIcon4Type = {
  style?: StyleProp<ViewStyle>;
};

const EllipseIcon4 = ({ style }: EllipseIcon4Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.parent, style]}
      onPress={() => navigation.navigate("LetsChat1")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/ellipse-27.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  parent: {
    width: 33,
    height: 33,
  },
});

export default EllipseIcon4;
