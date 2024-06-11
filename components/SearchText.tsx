import * as React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SearchText = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable onPress={() => navigation.navigate("SearchPage")}>
      <Text style={styles.search1}>Search</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  search1: {
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.changaRegular,
    color: Color.colorBlack,
    textAlign: "center",
    width: 46,
    height: 13,
  },
});

export default SearchText;
