import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

export type GroupIconType = {
  style?: StyleProp<ViewStyle>;
};

const GroupIcon = ({ style }: GroupIconType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.parent, style]}
      onPress={() => navigation.navigate("JoinLeaderboard")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
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
    width: 32,
    height: 33,
  },
});

export default GroupIcon;
