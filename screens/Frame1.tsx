import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Frame1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.rectangleParent}>
      <View style={styles.frameChild} />
      <View style={[styles.frameItem, styles.frameLayout]} />
      <View style={[styles.frameInner, styles.frameLayout]} />
      <View style={[styles.rectangleView, styles.frameLayout]} />
      <Text style={[styles.d, styles.dTypo]}>D</Text>
      <Text style={[styles.b, styles.bTypo]}>B</Text>
      <Text style={[styles.a, styles.aTypo]}>A</Text>
      <View style={styles.frameChild1} />
      <View style={[styles.frameChild2, styles.frameChildBg2]} />
      <View style={[styles.frameChild3, styles.frameChildPosition]} />
      <View style={[styles.frameChild4, styles.frameChildBg1]} />
      <Text style={[styles.c, styles.cPosition]}>C</Text>
      <Text style={[styles.b1, styles.bTypo]}>B</Text>
      <Text style={[styles.a1, styles.aTypo]}>A</Text>
      <View style={[styles.frameChild5, styles.frameChildLayout1]} />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={[styles.frameChild6, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={[styles.frameChild7, styles.frameChildPosition]} />
      <Text style={[styles.d1, styles.dTypo]}>D</Text>
      <Text style={[styles.c1, styles.c1Typo]}>C</Text>
      <Text style={[styles.b2, styles.dTypo]}>B</Text>
      <Text style={[styles.a2, styles.aTypo]}>A</Text>
      <View style={[styles.frameChild8, styles.frameChildLayout1]} />
      <Image
        style={[styles.frameChild9, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-20.png")}
      />
      <View style={[styles.frameChild10, styles.frameChildBg2]} />
      <View style={[styles.frameChild11, styles.cPosition]} />
      <Text style={[styles.tissuePaperRefills, styles.searchForAnswersTypo]}>
        Tissue paper refills
      </Text>
      <Text style={[styles.d2, styles.d2Position]}>D</Text>
      <Text style={[styles.c2, styles.d2Position]}>C</Text>
      <Text style={[styles.b3, styles.d2Position]}>B</Text>
      <Text style={[styles.a3, styles.a3Position]}>A</Text>
      <Image
        style={[styles.frameChild12, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-20.png")}
      />
      <Text style={styles.pregoSpaghettiSauce}>{`Prego spaghetti sauce `}</Text>
      <Image
        style={[styles.rectangleIcon, styles.d2Position]}
        contentFit="cover"
        source={require("../assets/rectangle-53.png")}
      />
      <Text style={[styles.d3, styles.dTypo]}>D</Text>
      <Text style={styles.tissueBoxes}>Tissue boxes</Text>
      <Image
        style={[styles.image18Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-18.png")}
      />
      <Text style={styles.pregoSpaghettiSauce1}>Prego Spaghetti sauce</Text>
      <Image
        style={[styles.image14Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-14.png")}
      />
      <Image
        style={styles.image16Icon}
        contentFit="cover"
        source={require("../assets/image-16.png")}
      />
      <Image
        style={[styles.image15Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-15.png")}
      />
      <View style={[styles.frameChild13, styles.frameChildLayout1]} />
      <View style={[styles.frameChild14, styles.frameChildBg]} />
      <Text style={[styles.c3, styles.cPosition]}>C</Text>
      <Image
        style={styles.frameChild15}
        contentFit="cover"
        source={require("../assets/rectangle-52.png")}
      />
      <View style={[styles.frameChild16, styles.frameChildBg2]} />
      <View style={[styles.frameChild17, styles.frameChildBg1]} />
      <View style={[styles.frameChild18, styles.frameChildBg]} />
      <Pressable
        style={[styles.leaderboard, styles.challengesPosition]}
        onPress={() => navigation.navigate("JoinLeaderboard")}
      >
        <Text style={[styles.leaderboard1, styles.home1Typo]}>Leaderboard</Text>
      </Pressable>
      <Pressable
        style={[styles.home, styles.homePosition]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
      </Pressable>
      <Pressable
        style={[styles.challenges, styles.challengesPosition]}
        onPress={() => navigation.navigate("Challenges2")}
      >
        <Text style={[styles.home1, styles.home1Typo]}>Challenges</Text>
      </Pressable>
      <Pressable
        style={[styles.search, styles.homePosition]}
        onPress={() => navigation.navigate("SearchPage")}
      >
        <Text style={[styles.search1, styles.search1Typo]}>Search</Text>
      </Pressable>
      <Pressable
        style={[styles.letsChat, styles.homePosition]}
        onPress={() => navigation.navigate("LetsChat1")}
      >
        <Text style={[styles.letsChat1, styles.search1Typo]}>Let’s Chat</Text>
      </Pressable>
      <Image
        style={styles.frameChild19}
        contentFit="cover"
        source={require("../assets/rectangle-481.png")}
      />
      <Image
        style={styles.frameChild20}
        contentFit="cover"
        source={require("../assets/ellipse-181.png")}
      />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-21.png")}
      />
      <Text style={[styles.searchForAnswers, styles.searchForAnswersTypo]}>
        Search for answers
      </Text>
      <Image
        style={[styles.frameChild21, styles.wrapperPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Pressable
        style={[styles.iconmonstrBinoculars84, styles.iconmonstrLayout]}
        onPress={() => navigation.navigate("SearchPage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconmonstrbinoculars8-4.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.iconmonstrBuilding58, styles.iconmonstrLayout]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconmonstrbuilding5-71.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.iconmonstrShoppingBag57, styles.frameChildLayout]}
        onPress={() => navigation.navigate("Challenges2")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconmonstrshoppingbag5-6.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-24.png")}
        />
      </Pressable>
      <Image
        style={[styles.frameChild22, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Pressable
        style={[styles.container, styles.wrapperPosition]}
        onPress={() => navigation.navigate("LetsChat1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-27.png")}
        />
      </Pressable>
      <Image
        style={[styles.groupIcon, styles.iconmonstrLayout]}
        contentFit="cover"
        source={require("../assets/group-16.png")}
      />
      <Pressable
        style={[styles.frame, styles.framePosition]}
        onPress={() => navigation.navigate("JoinLeaderboard")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-24.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.iconmonstrBuilding58, styles.iconmonstrLayout]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconmonstrbuilding5-71.png")}
        />
      </Pressable>
      <Image
        style={[styles.iconmonstrShoppingBag56, styles.a3Position]}
        contentFit="cover"
        source={require("../assets/iconmonstrshoppingbag5-6.png")}
      />
      <Image
        style={[styles.frameChild22, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 111,
    width: 349,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    left: 13,
    position: "absolute",
  },
  dTypo: {
    height: 10,
    width: 9,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.lilitaOne,
    fontSize: FontSize.size_smi,
  },
  bTypo: {
    left: 129,
    height: 10,
    width: 9,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.lilitaOne,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  aTypo: {
    width: 8,
    height: 10,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.lilitaOne,
    fontSize: FontSize.size_smi,
  },
  frameChildBg2: {
    backgroundColor: Color.colorFirebrick,
    height: 17,
    position: "absolute",
  },
  frameChildPosition: {
    backgroundColor: Color.colorDarkgreen,
    left: 102,
    width: 18,
    height: 17,
    position: "absolute",
  },
  frameChildBg1: {
    backgroundColor: Color.colorPalegreen,
    height: 17,
  },
  cPosition: {
    left: 150,
    position: "absolute",
  },
  frameChildLayout1: {
    width: 93,
    height: 28,
    backgroundColor: Color.colorGainsboro_400,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  frameChildLayout: {
    width: 21,
    height: 22,
  },
  c1Typo: {
    left: 176,
    width: 8,
    height: 10,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.lilitaOne,
    fontSize: FontSize.size_smi,
  },
  searchForAnswersTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  d2Position: {
    top: 209,
    position: "absolute",
  },
  a3Position: {
    left: 130,
    position: "absolute",
  },
  iconPosition: {
    left: 22,
    position: "absolute",
  },
  frameChildBg: {
    backgroundColor: Color.colorKhaki,
    height: 17,
    position: "absolute",
  },
  challengesPosition: {
    top: 648,
    position: "absolute",
  },
  home1Typo: {
    width: 47,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
    textAlign: "center",
    color: Color.colorBlack,
  },
  homePosition: {
    top: 647,
    position: "absolute",
  },
  search1Typo: {
    height: 13,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_6xs,
    textAlign: "center",
    color: Color.colorBlack,
  },
  wrapperPosition: {
    height: 33,
    top: 604,
    position: "absolute",
  },
  iconmonstrLayout: {
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  framePosition: {
    top: 605,
    height: 33,
    width: 32,
    position: "absolute",
  },
  frameChild: {
    top: 493,
    height: 109,
    width: 349,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    left: 13,
    position: "absolute",
  },
  frameItem: {
    top: 373,
  },
  frameInner: {
    top: 253,
  },
  rectangleView: {
    top: 133,
  },
  d: {
    left: 168,
    height: 10,
    width: 9,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.lilitaOne,
    fontSize: FontSize.size_smi,
    position: "absolute",
    top: 560,
  },
  b: {
    top: 560,
  },
  a: {
    left: 107,
    width: 8,
    position: "absolute",
    top: 560,
  },
  frameChild1: {
    top: 554,
    left: 95,
    width: 92,
    height: 28,
    backgroundColor: Color.colorGainsboro_400,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  frameChild2: {
    height: 17,
    width: 17,
    left: 164,
    backgroundColor: Color.colorFirebrick,
    top: 560,
  },
  frameChild3: {
    width: 18,
    top: 560,
  },
  frameChild4: {
    left: 124,
    width: 17,
    top: 560,
    position: "absolute",
  },
  c: {
    top: 452,
    width: 8,
    height: 10,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.lilitaOne,
    fontSize: FontSize.size_smi,
  },
  b1: {
    top: 452,
  },
  a1: {
    transform: [
      {
        rotate: "1.7deg",
      },
    ],
    top: 452,
    left: 107,
    width: 8,
    position: "absolute",
  },
  frameChild5: {
    top: 446,
    left: 94,
  },
  ellipseIcon: {
    top: 557,
    left: 142,
    width: 22,
    height: 22,
    position: "absolute",
  },
  frameChild6: {
    top: 449,
    left: 122,
    position: "absolute",
  },
  frameChild7: {
    top: 452,
    width: 18,
  },
  d1: {
    left: 194,
    top: 329,
    position: "absolute",
  },
  c1: {
    top: 329,
    position: "absolute",
  },
  b2: {
    left: 155,
    top: 329,
    position: "absolute",
  },
  a2: {
    left: 133,
    top: 329,
    position: "absolute",
  },
  frameChild8: {
    top: 323,
    left: 121,
  },
  frameChild9: {
    top: 326,
    left: 127,
    position: "absolute",
  },
  frameChild10: {
    left: 190,
    top: 329,
    width: 18,
    height: 17,
  },
  frameChild11: {
    top: 329,
    backgroundColor: Color.colorPalegreen,
    height: 17,
    width: 17,
  },
  tissuePaperRefills: {
    top: 274,
    left: 123,
    width: 171,
    height: 14,
  },
  d2: {
    left: 196,
    height: 10,
    width: 9,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.lilitaOne,
    fontSize: FontSize.size_smi,
  },
  c2: {
    left: 176,
    width: 8,
    height: 10,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.lilitaOne,
    fontSize: FontSize.size_smi,
  },
  b3: {
    left: 154,
    height: 10,
    width: 9,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.lilitaOne,
    fontSize: FontSize.size_smi,
  },
  a3: {
    top: 208,
    width: 8,
    height: 10,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.lilitaOne,
    fontSize: FontSize.size_smi,
  },
  frameChild12: {
    top: 205,
    left: 124,
    position: "absolute",
  },
  pregoSpaghettiSauce: {
    marginLeft: -120,
    top: 167,
    left: "50%",
    width: 165,
    height: 25,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  rectangleIcon: {
    left: 191,
    width: 18,
    height: 17,
  },
  d3: {
    top: 452,
    left: 168,
    height: 10,
    width: 9,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.lilitaOne,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  tissueBoxes: {
    top: 516,
    width: 117,
    height: 24,
    left: 100,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  image18Icon: {
    top: 141,
    width: 55,
    height: 95,
  },
  pregoSpaghettiSauce1: {
    top: 392,
    width: 122,
    height: 20,
    left: 100,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  image14Icon: {
    top: 260,
    width: 79,
    height: 101,
  },
  image16Icon: {
    top: 510,
    left: 15,
    width: 74,
    height: 76,
    position: "absolute",
  },
  image15Icon: {
    top: 378,
    width: 61,
    height: 96,
  },
  frameChild13: {
    top: 203,
    left: 120,
  },
  frameChild14: {
    left: 170,
    top: 329,
    width: 17,
  },
  c3: {
    width: 8,
    height: 10,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.lilitaOne,
    fontSize: FontSize.size_smi,
    top: 560,
  },
  frameChild15: {
    left: 171,
    top: 208,
    width: 18,
    height: 17,
    position: "absolute",
  },
  frameChild16: {
    top: 452,
    height: 17,
    width: 17,
    left: 164,
    backgroundColor: Color.colorFirebrick,
  },
  frameChild17: {
    left: 149,
    top: 208,
    width: 18,
    position: "absolute",
  },
  frameChild18: {
    left: 144,
    top: 452,
    width: 18,
  },
  leaderboard1: {
    height: 14,
  },
  leaderboard: {
    left: 49,
  },
  home1: {
    height: 12,
  },
  home: {
    left: 179,
  },
  challenges: {
    left: 117,
  },
  search1: {
    width: 46,
  },
  search: {
    left: 240,
  },
  letsChat1: {
    width: 48,
  },
  letsChat: {
    left: 300,
  },
  frameChild19: {
    top: 34,
    left: 24,
    width: 338,
    height: 43,
    position: "absolute",
  },
  frameChild20: {
    top: 46,
    left: 36,
    width: 14,
    height: 14,
    position: "absolute",
  },
  lineIcon: {
    top: 58,
    left: 47,
    width: 10,
    height: 9,
    position: "absolute",
  },
  searchForAnswers: {
    top: 47,
    left: 65,
    width: 156,
    height: 26,
  },
  frameChild21: {
    left: 247,
    width: 32,
    height: 33,
    top: 604,
  },
  icon: {
    overflow: "hidden",
  },
  iconmonstrBinoculars84: {
    left: 251,
    top: 608,
    width: 24,
    height: 24,
  },
  iconmonstrBuilding58: {
    top: 608,
    width: 24,
    height: 24,
    left: 190,
  },
  iconmonstrShoppingBag57: {
    left: 132,
    top: 609,
    position: "absolute",
  },
  wrapper: {
    left: 186,
    width: 32,
    height: 33,
    top: 604,
  },
  frameChild22: {
    left: 124,
  },
  container: {
    left: 308,
    width: 33,
    height: 33,
    top: 604,
  },
  groupIcon: {
    top: 612,
    left: 60,
    height: 22,
  },
  frame: {
    left: 56,
  },
  iconmonstrShoppingBag56: {
    top: 610,
    width: 21,
    height: 22,
    overflow: "hidden",
  },
  rectangleParent: {
    backgroundColor: Color.colorLightcyan,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame1;
