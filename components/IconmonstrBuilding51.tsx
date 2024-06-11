import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

export type IconmonstrBuilding51Type = {
  style?: StyleProp<ViewStyle>;
};

const IconmonstrBuilding51 = ({ style }: IconmonstrBuilding51Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.iconmonstrBuilding54, style]}
      onPress={() => navigation.navigate("HomePage")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/iconmonstrbuilding5-7.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  iconmonstrBuilding54: {
    width: 24,
    height: 24,
  },
});

export default IconmonstrBuilding51;
