import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const Image1 = () => {
  return (
    <ImageBackground
      style={styles.image12Icon}
      resizeMode="cover"
      source={require("../assets/image12.png")}
    />
  );
};

const styles = StyleSheet.create({
  image12Icon: {
    borderRadius: Border.br_4xs,
    flex: 1,
    width: "100%",
    height: 60,
  },
});

export default Image1;
