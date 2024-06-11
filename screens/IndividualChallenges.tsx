import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const IndividualChallenges = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.individualChallenges}>
      <View
        style={[styles.individualChallengesChild, styles.individualLayout]}
      />
      <View
        style={[styles.individualChallengesItem, styles.individualLayout]}
      />
      <View
        style={[
          styles.individualChallengesInner,
          styles.rectanglePressableLayout,
        ]}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("CommunityChallenges")}
      />
      <Text style={[styles.challenges, styles.challengesTypo]}>Challenges</Text>
      <Text style={[styles.individual, styles.communityTypo]}>Individual</Text>
      <Text style={[styles.community, styles.communityTypo]}>Community</Text>
      <Image
        style={[styles.frameIcon, styles.frameIconPosition]}
        contentFit="cover"
        source={require("../assets/frame-10.png")}
      />
      <Text
        style={[styles.availableIndividualChallenge, styles.frameIconPosition]}
      >
        Available Individual Challenges
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text
        style={[styles.bringYourOwn, styles.bringLayout]}
      >{`Bring Your Own Bag Challenge `}</Text>
      <Image
        style={[
          styles.individualChallengesChild1,
          styles.individualChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-15.png")}
      />
      <Image
        style={[
          styles.individualChallengesChild2,
          styles.individualChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-16.png")}
      />
      <Text style={[styles.individual1, styles.individualTypo]}>
        Individual
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Image
        style={[
          styles.individualChallengesChild1,
          styles.individualChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-15.png")}
      />
      <Image
        style={[
          styles.individualChallengesChild5,
          styles.individualChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-16.png")}
      />
      <Text style={[styles.individual2, styles.community1Position]}>
        Individual
      </Text>
      <View
        style={[
          styles.individualChallengesChild6,
          styles.individualChildLayout1,
        ]}
      />
      <Text style={[styles.forTheDuration, styles.forTypo]}>
        For the duration of this challenge, commit to using reusable bags
        instead of single-use plastic bags when shopping. Let’s make a positive
        impact, one bag at a time!
      </Text>
      <View
        style={[
          styles.individualChallengesChild7,
          styles.individualChildPosition,
        ]}
      />
      <Text
        style={[styles.bringYourOwn1, styles.bringLayout]}
      >{`Bring Your Own Bag Week Challenge `}</Text>
      <Image
        style={[
          styles.individualChallengesChild1,
          styles.individualChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-15.png")}
      />
      <Image
        style={[
          styles.individualChallengesChild5,
          styles.individualChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-20.png")}
      />
      <Text style={[styles.community1, styles.community1Position]}>
        Community
      </Text>
      <Text style={[styles.forTheDuration1, styles.forTypo]}>
        For the duration of this challenge, commit to using reusable bags
        instead of single-use plastic bags when shopping. Let’s make a positive
        impact, one bag at a time!
      </Text>
      <View
        style={[
          styles.individualChallengesChild10,
          styles.individualChildLayout,
        ]}
      />
      <Text style={[styles.join1234People, styles.join1234Layout]}>
        Join 1234 people!
      </Text>
      <Image
        style={[
          styles.individualChallengesChild11,
          styles.individualChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-16.png")}
      />
      <Text style={[styles.individual3, styles.individualTypo]}>
        Individual
      </Text>
      <Image
        style={[
          styles.individualChallengesChild12,
          styles.individualChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-16.png")}
      />
      <Text style={[styles.individual4, styles.community2Position]}>
        Individual
      </Text>
      <View
        style={[
          styles.individualChallengesChild13,
          styles.individualChildLayout1,
        ]}
      />
      <Text style={[styles.forTheDuration2, styles.forTypo]}>
        For the duration of this challenge, commit to using reusable bags
        instead of single-use plastic bags when shopping. Let’s make a positive
        impact, one bag at a time!
      </Text>
      <Image
        style={[
          styles.individualChallengesChild12,
          styles.individualChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-20.png")}
      />
      <Text style={[styles.community2, styles.community2Position]}>
        Community
      </Text>
      <View
        style={[
          styles.individualChallengesChild15,
          styles.individualChildLayout,
        ]}
      />
      <Text style={[styles.join1234People1, styles.join1234Layout]}>
        Join 1234 people!
      </Text>
      <View
        style={[styles.individualChallengesChild16, styles.rectangleViewLayout]}
      />
      <Text
        style={[styles.bringYourOwn2, styles.bringLayout]}
      >{`Bring Your Own Bag Challenge `}</Text>
      <Image
        style={[
          styles.individualChallengesChild17,
          styles.individualChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-15.png")}
      />
      <Image
        style={[
          styles.individualChallengesChild18,
          styles.individualChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-16.png")}
      />
      <Text style={[styles.individual5, styles.individualTypo]}>
        Individual
      </Text>
      <View
        style={[styles.individualChallengesChild16, styles.rectangleViewLayout]}
      />
      <Image
        style={[
          styles.individualChallengesChild17,
          styles.individualChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-15.png")}
      />
      <Image
        style={[
          styles.individualChallengesChild21,
          styles.individualChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-16.png")}
      />
      <Text style={[styles.individual6, styles.community3Position]}>
        Individual
      </Text>
      <View
        style={[
          styles.individualChallengesChild22,
          styles.individualChildLayout1,
        ]}
      />
      <Text style={[styles.forTheDuration3, styles.forTypo]}>
        For the duration of this challenge, commit to using reusable bags
        instead of single-use plastic bags when shopping. Let’s make a positive
        impact, one bag at a time!
      </Text>
      <View
        style={[
          styles.individualChallengesChild23,
          styles.individualChildPosition,
        ]}
      />
      <Text
        style={[styles.plasticFreeWeekChallenge, styles.bringLayout]}
      >{`Plastic-Free Week Challenge `}</Text>
      <Text
        style={[styles.bringYourOwn3, styles.bringLayout]}
      >{`Bring Your Own Bag Challenge `}</Text>
      <Image
        style={[
          styles.individualChallengesChild17,
          styles.individualChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-25.png")}
      />
      <Image
        style={[
          styles.individualChallengesChild21,
          styles.individualChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-20.png")}
      />
      <Text style={[styles.community3, styles.community3Position]}>
        Community
      </Text>
      <Text style={styles.forTheDuration4}>
        For the duration of this challenge, avoid using single-use plastic
        bottles and opt to use reusable water bottles. Every small eco-friendly
        choice counts!
      </Text>
      <View
        style={[
          styles.individualChallengesChild26,
          styles.individualChildLayout,
        ]}
      />
      <Text style={[styles.join1234People2, styles.join1234Layout]}>
        Join 1234 people!
      </Text>
      <Pressable
        style={[styles.wrapper, styles.ellipseLayout]}
        onPress={() => navigation.navigate("Challenges2")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-24.png")}
        />
      </Pressable>
      <Image
        style={styles.iconmonstrShoppingBag56}
        contentFit="cover"
        source={require("../assets/iconmonstrshoppingbag5-6.png")}
      />
      <Pressable
        style={[styles.letsChat, styles.homePosition]}
        onPress={() => navigation.navigate("LetsChat1")}
      >
        <Text style={[styles.letsChat1, styles.search1Typo]}>Let’s Chat</Text>
      </Pressable>
      <Pressable
        style={[styles.search, styles.homePosition]}
        onPress={() => navigation.navigate("SearchPage")}
      >
        <Text style={[styles.search1, styles.search1Typo]}>Search</Text>
      </Pressable>
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Pressable
        style={[styles.challenges1, styles.challenges1Position]}
        onPress={() => navigation.navigate("Challenges2")}
      >
        <Text style={styles.homeTypo}>Challenges</Text>
      </Pressable>
      <Pressable
        style={[styles.leaderboard, styles.challenges1Position]}
        onPress={() => navigation.navigate("JoinLeaderboard")}
      >
        <Text style={styles.leaderboard1}>Leaderboard</Text>
      </Pressable>
      <Pressable
        style={[styles.container, styles.ellipseLayout]}
        onPress={() => navigation.navigate("JoinLeaderboard")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-24.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.frame, styles.ellipseLayout]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-24.png")}
        />
      </Pressable>
      <Image
        style={[styles.ellipseIcon, styles.ellipseLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <Pressable
        style={[styles.ellipsePressable, styles.ellipseLayout]}
        onPress={() => navigation.navigate("LetsChat1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-27.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.iconmonstrBinoculars84, styles.iconmonstrLayout]}
        onPress={() => navigation.navigate("SearchPage")}
      >
        <Image
          style={[styles.icon4, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconmonstrbinoculars8-4.png")}
        />
      </Pressable>
      <View style={[styles.iconmonstrBuilding58, styles.iconmonstrLayout]} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-16.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  individualLayout: {
    height: 42,
    width: 375,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhitesmoke_200,
    left: 0,
    position: "absolute",
  },
  rectanglePressableLayout: {
    height: 43,
    width: 188,
    top: 41,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  challengesTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.changaRegular,
  },
  communityTypo: {
    height: 19,
    width: 136,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  frameIconPosition: {
    width: 374,
    left: 0,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 161,
    backgroundColor: Color.colorWhite,
    width: 374,
    left: 0,
    position: "absolute",
  },
  bringLayout: {
    height: 29,
    fontSize: FontSize.size_mini,
    width: 374,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  individualChildLayout2: {
    width: 36,
    left: 18,
    overflow: "hidden",
    height: 43,
    position: "absolute",
  },
  individualTypo: {
    height: 13,
    left: 20,
    width: 33,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  community1Position: {
    top: 400,
    height: 13,
    width: 33,
    left: 20,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  individualChildLayout1: {
    height: 28,
    backgroundColor: Color.colorGainsboro_300,
    width: 375,
    left: 0,
    position: "absolute",
  },
  forTypo: {
    height: 65,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  individualChildPosition: {
    left: 1,
    height: 161,
    backgroundColor: Color.colorWhite,
    width: 374,
    position: "absolute",
  },
  individualChildLayout: {
    height: 35,
    width: 376,
    backgroundColor: Color.colorPowderblue,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  join1234Layout: {
    height: 21,
    fontSize: FontSize.size_sm,
    width: 374,
    textAlign: "center",
    color: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  community2Position: {
    top: 724,
    height: 13,
    width: 33,
    left: 20,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  community3Position: {
    top: 561,
    height: 13,
    width: 33,
    left: 20,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  ellipseLayout: {
    height: 33,
    position: "absolute",
  },
  homePosition: {
    top: 652,
    position: "absolute",
  },
  search1Typo: {
    fontSize: FontSize.size_6xs,
    height: 13,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
  },
  homeTypo: {
    height: 12,
    width: 47,
    fontSize: FontSize.size_6xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
  },
  challenges1Position: {
    top: 653,
    position: "absolute",
  },
  iconmonstrLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  individualChallengesChild: {
    top: 0,
  },
  individualChallengesItem: {
    top: 251,
  },
  individualChallengesInner: {
    backgroundColor: Color.colorDarkgray_100,
    left: 0,
  },
  rectanglePressable: {
    left: 187,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 188,
    top: 41,
  },
  challenges: {
    top: 13,
    width: 323,
    height: 57,
    left: 25,
    position: "absolute",
  },
  individual: {
    top: 53,
    left: 25,
  },
  community: {
    top: 54,
    left: 212,
  },
  frameIcon: {
    top: 83,
    height: 168,
    overflow: "hidden",
  },
  availableIndividualChallenge: {
    top: 262,
    height: 31,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.changaRegular,
  },
  rectangleView: {
    top: 292,
  },
  bringYourOwn: {
    top: 304,
    fontFamily: FontFamily.interRegular,
    left: 0,
  },
  individualChallengesChild1: {
    top: 306,
  },
  individualChallengesChild2: {
    top: 373,
  },
  individual1: {
    top: 412,
  },
  individualChallengesChild5: {
    top: 363,
  },
  individual2: {
    fontSize: FontSize.size_5xs,
  },
  individualChallengesChild6: {
    top: 425,
  },
  forTheDuration: {
    top: 339,
    width: 222,
    left: 91,
    height: 65,
    fontFamily: FontFamily.interRegular,
  },
  individualChallengesChild7: {
    top: 294,
  },
  bringYourOwn1: {
    top: 296,
    fontFamily: FontFamily.changaRegular,
    left: 0,
  },
  community1: {
    fontSize: FontSize.size_7xs,
  },
  forTheDuration1: {
    top: 323,
    left: 60,
    width: 251,
    fontFamily: FontFamily.changaRegular,
  },
  individualChallengesChild10: {
    top: 419,
  },
  join1234People: {
    top: 427,
    fontFamily: FontFamily.changaRegular,
  },
  individualChallengesChild11: {
    top: 697,
  },
  individual3: {
    top: 736,
  },
  individualChallengesChild12: {
    top: 687,
  },
  individual4: {
    fontSize: FontSize.size_5xs,
  },
  individualChallengesChild13: {
    top: 749,
  },
  forTheDuration2: {
    top: 647,
    left: 90,
    width: 222,
    fontFamily: FontFamily.changaRegular,
  },
  community2: {
    fontSize: FontSize.size_7xs,
  },
  individualChallengesChild15: {
    top: 743,
  },
  join1234People1: {
    top: 751,
    fontFamily: FontFamily.interRegular,
  },
  individualChallengesChild16: {
    top: 453,
  },
  bringYourOwn2: {
    top: 465,
    fontFamily: FontFamily.interRegular,
    left: 0,
  },
  individualChallengesChild17: {
    top: 467,
  },
  individualChallengesChild18: {
    top: 534,
  },
  individual5: {
    top: 573,
  },
  individualChallengesChild21: {
    top: 524,
  },
  individual6: {
    fontSize: FontSize.size_5xs,
  },
  individualChallengesChild22: {
    top: 586,
  },
  forTheDuration3: {
    top: 500,
    width: 222,
    left: 91,
    height: 65,
    fontFamily: FontFamily.interRegular,
  },
  individualChallengesChild23: {
    top: 455,
  },
  plasticFreeWeekChallenge: {
    top: 458,
    fontFamily: FontFamily.changaRegular,
    left: 0,
  },
  bringYourOwn3: {
    left: 2,
    top: 622,
    fontFamily: FontFamily.changaRegular,
  },
  community3: {
    fontSize: FontSize.size_7xs,
  },
  forTheDuration4: {
    top: 490,
    left: 78,
    height: 78,
    width: 222,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
    position: "absolute",
  },
  individualChallengesChild26: {
    top: 580,
  },
  join1234People2: {
    top: 588,
    fontFamily: FontFamily.changaRegular,
  },
  wrapper: {
    left: 114,
    width: 32,
    height: 33,
    top: 619,
  },
  iconmonstrShoppingBag56: {
    top: 624,
    left: 120,
    width: 21,
    height: 22,
    overflow: "hidden",
    position: "absolute",
  },
  letsChat1: {
    width: 48,
  },
  letsChat: {
    left: 290,
  },
  search1: {
    width: 46,
  },
  search: {
    left: 230,
  },
  home: {
    left: 169,
    top: 652,
    position: "absolute",
  },
  challenges1: {
    left: 107,
  },
  leaderboard1: {
    height: 14,
    width: 47,
    fontSize: FontSize.size_6xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
  },
  leaderboard: {
    left: 39,
  },
  container: {
    left: 46,
    width: 32,
    height: 33,
    top: 619,
  },
  frame: {
    left: 175,
    top: 618,
    width: 32,
    height: 33,
  },
  ellipseIcon: {
    left: 237,
    top: 618,
    width: 32,
    height: 33,
  },
  ellipsePressable: {
    left: 298,
    top: 618,
    height: 33,
    width: 33,
  },
  icon4: {
    overflow: "hidden",
  },
  iconmonstrBinoculars84: {
    left: 241,
    top: 622,
  },
  iconmonstrBuilding58: {
    left: 218,
    top: 618,
    overflow: "hidden",
  },
  vectorIcon: {
    height: "3.3%",
    width: "6.39%",
    top: "93.11%",
    right: "45.89%",
    bottom: "3.59%",
    left: "47.72%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupIcon: {
    top: 626,
    left: 50,
    width: 24,
    height: 22,
    position: "absolute",
  },
  individualChallenges: {
    backgroundColor: Color.colorLightcyan,
    flex: 1,
    height: 640,
    width: "100%",
  },
});

export default IndividualChallenges;
