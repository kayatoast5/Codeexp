import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

export type IconmonstrShoppingBag5Type = {
  style?: StyleProp<ViewStyle>;
};

const IconmonstrShoppingBag5 = ({ style }: IconmonstrShoppingBag5Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.iconmonstrShoppingBag52, style]}
      onPress={() => navigation.navigate("Challenges2")}
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/iconmonstrshoppingbag5-6.png")}
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
  iconmonstrShoppingBag52: {
    width: 21,
    height: 22,
  },
});

export default IconmonstrShoppingBag5;
