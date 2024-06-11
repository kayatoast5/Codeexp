import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const HelpCentre = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.helpCentre}>
      <View style={styles.frame}>
        <Text style={styles.helloHowCan}>Hello. How can we help you?</Text>
      </View>
      <Image
        style={[styles.groupIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <View style={styles.frame1}>
        <Pressable
          style={styles.inputFieldWithButton}
          onPress={() => navigation.navigate("Reporting")}
        >
          <View style={[styles.field, styles.fieldShadowBox]}>
            <Text style={[styles.label, styles.labelTypo]}>
              Enter your query
            </Text>
          </View>
          <View style={[styles.buttonNew, styles.fieldShadowBox]}>
            <Text style={[styles.search, styles.labelTypo]}>Search</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  fieldShadowBox: {
    height: 50,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    alignItems: "center",
    flexDirection: "row",
  },
  labelTypo: {
    fontFamily: FontFamily.bodyText,
    fontWeight: "500",
    lineHeight: 30,
    fontSize: FontSize.bodyText_size,
    textAlign: "left",
  },
  helpLayout: {
    height: 33,
    flexDirection: "row",
  },
  search1Layout: {
    height: 13,
    flexDirection: "row",
  },
  search2Typo: {
    textAlign: "center",
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
    color: Color.colorBlack,
  },
  homeLayout: {
    height: 12,
    flexDirection: "row",
  },
  homeTypo: {
    width: 47,
    textAlign: "center",
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
    color: Color.colorBlack,
  },
  groupPressableLayout: {
    width: 24,
    flexDirection: "row",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  helloHowCan: {
    left: 42,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interRegular,
    width: 348,
    textAlign: "left",
    color: Color.colorBlack,
    top: 0,
    height: 31,
    position: "absolute",
  },
  frame: {
    top: 136,
    left: -15,
    width: 390,
    height: 31,
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    top: 20,
    left: 8,
    height: 15,
    position: "absolute",
    maxWidth: "100%",
  },
  label: {
    color: Color.colorGray,
  },
  field: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    width: 250,
    padding: Padding.p_base,
  },
  search: {
    color: Color.colorWhite,
  },
  buttonNew: {
    backgroundColor: Color.colorBlack,
    width: 100,
    paddingHorizontal: 32,
    paddingVertical: Padding.p_5xl,
    marginLeft: 16,
    justifyContent: "center",
  },
  inputFieldWithButton: {
    left: 14,
    width: 400,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 38,
    top: 0,
    position: "absolute",
  },
  frame1: {
    top: 191,
    left: -27,
    width: 414,
    height: 38,
    position: "absolute",
    overflow: "hidden",
  },
  helpCentre: {
    backgroundColor: Color.colorLightcyan,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default HelpCentre;
