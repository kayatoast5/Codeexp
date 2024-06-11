import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type LetsChatType = {
  style?: StyleProp<ViewStyle>;
};

const LetsChat = ({ style }: LetsChatType) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable onPress={() => navigation.navigate("LetsChat1")}>
      <Text style={styles.letsChat1}>Let’s Chat</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  letsChat1: {
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.changaRegular,
    color: Color.colorBlack,
    textAlign: "center",
    width: 48,
    height: 13,
  },
});

export default LetsChat;
