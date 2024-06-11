import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import CreateAccountContainer from "../components/CreateAccountContainer";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.signIn}
      onPress={() => navigation.navigate("StartScreen")}
    >
      <CreateAccountContainer />
      <View
        style={[styles.iconmonstrShoppingCartThin, styles.iconmonstrLayout]}
      />
      <View style={[styles.statusBarIphoneXOrNewe, styles.economicalPosition]}>
        <Image
          style={[styles.notchIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={styles.rightSide}>
          <Image
            style={styles.batteryIcon}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            contentFit="cover"
            source={require("../assets/mobile-signal.png")}
          />
          <Image
            style={[styles.recordingIndicatorIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/recording-indicator.png")}
          />
        </View>
        <Image
          style={styles.leftSideIcon}
          contentFit="cover"
          source={require("../assets/left-side.png")}
        />
      </View>
      <View
        style={[styles.iconmonstrShoppingCartThin1, styles.iconmonstrLayout]}
      />
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/group-31.png")}
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
                        source={require("../assets/group-11.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.economical, styles.economicalPosition]}>
        EcoNomical
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconmonstrLayout: {
    height: 83,
    width: 92,
    position: "absolute",
    overflow: "hidden",
  },
  economicalPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
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
    marginLeft: -77,
    top: 48,
    left: "50%",
  },
  notchIcon: {
    top: -2,
    right: 78,
    bottom: 16,
    left: 78,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
    top: 0,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  statusBarIphoneXOrNewe: {
    height: 44,
    top: 0,
    overflow: "hidden",
  },
  iconmonstrShoppingCartThin1: {
    top: 67,
    left: 111,
  },
  groupChild: {
    maxHeight: "100%",
    maxWidth: "100%",
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
    top: "16.19%",
    right: "33.61%",
    bottom: "73.44%",
    left: "41.86%",
    position: "absolute",
  },
  economical: {
    top: 193,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.nicoMoji,
    color: Color.colorBlack,
    textAlign: "center",
    height: 91,
  },
  signIn: {
    backgroundColor: Color.colorLightcyan,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignIn;
