import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

export type IconmonstrBinoculars8Type = {
  style?: StyleProp<ViewStyle>;
};

const IconmonstrBinoculars8 = ({ style }: IconmonstrBinoculars8Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.iconmonstrBinoculars81, style]}
      onPress={() => navigation.navigate("SearchPage")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/iconmonstrbinoculars8-4.png")}
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
  iconmonstrBinoculars81: {
    width: 24,
    height: 24,
  },
});

export default IconmonstrBinoculars8;
