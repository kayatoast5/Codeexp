import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const StartScreen = () => {
  return (
    <View style={styles.startScreen}>
      <View style={styles.iconmonstrShoppingCartThin} />
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/group-3.png")}
        />
        <View style={styles.groupWrapper}>
          <View style={styles.groupPosition}>
            <View style={styles.groupPosition}>
              <View style={styles.groupPosition}>
                <View style={styles.groupPosition}>
                  <View style={styles.groupPosition}>
                    <View style={styles.groupPosition}>
                      <Image
                        style={[styles.groupChild, styles.groupPosition]}
                        contentFit="cover"
                        source={require("../assets/group-1.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.economical}>EcoNomical</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconmonstrShoppingCartThin: {
    top: 207,
    left: 111,
    width: 92,
    height: 83,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  groupWrapper: {
    height: "54.97%",
    width: "41.34%",
    top: "21.84%",
    right: "34.77%",
    bottom: "23.19%",
    left: "23.9%",
    position: "absolute",
  },
  groupParent: {
    height: "10.38%",
    width: "24.53%",
    top: "37.19%",
    right: "33.61%",
    bottom: "52.44%",
    left: "41.86%",
    position: "absolute",
  },
  economical: {
    top: 333,
    left: 0,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.nicoMoji,
    color: Color.colorBlack,
    textAlign: "center",
    width: 375,
    height: 91,
    position: "absolute",
  },
  startScreen: {
    backgroundColor: Color.colorLightcyan,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default StartScreen;
