import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const CommunityChallenges = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.communityChallenges}>
      <View style={[styles.communityChallengesChild, styles.communityLayout]} />
      <View style={[styles.communityChallengesItem, styles.communityLayout]} />
      <Pressable
        style={[styles.communityChallengesInner, styles.rectangleViewBorder]}
        onPress={() => navigation.navigate("IndividualChallenges")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewBorder]} />
      <Text style={styles.challenges}>Challenges</Text>
      <Text style={[styles.individual, styles.communityTypo]}>Individual</Text>
      <Text style={[styles.community, styles.communityTypo]}>Community</Text>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame-101.png")}
      />
      <Text style={styles.availableCommunityChallenges}>
        Available Community Challenges
      </Text>
      <View
        style={[styles.communityChallengesChild1, styles.communityChildLayout3]}
      />
      <Text
        style={[styles.bringYourOwn, styles.bringLayout]}
      >{`Bring Your Own Bag Challenge `}</Text>
      <Image
        style={[styles.communityChallengesChild2, styles.communityChildLayout2]}
        contentFit="cover"
        source={require("../assets/frame-151.png")}
      />
      <Image
        style={[styles.communityChallengesChild3, styles.communityChildLayout2]}
        contentFit="cover"
        source={require("../assets/frame-161.png")}
      />
      <Text style={[styles.individual1, styles.individualTypo]}>
        Individual
      </Text>
      <View
        style={[styles.communityChallengesChild1, styles.communityChildLayout3]}
      />
      <Image
        style={[styles.communityChallengesChild2, styles.communityChildLayout2]}
        contentFit="cover"
        source={require("../assets/frame-151.png")}
      />
      <Image
        style={[styles.communityChallengesChild6, styles.communityChildLayout2]}
        contentFit="cover"
        source={require("../assets/frame-161.png")}
      />
      <Text style={[styles.individual2, styles.community1Position]}>
        Individual
      </Text>
      <View
        style={[styles.communityChallengesChild7, styles.communityChildLayout1]}
      />
      <Text style={[styles.forTheDuration, styles.forTypo]}>
        For the duration of this challenge, commit to using reusable bags
        instead of single-use plastic bags when shopping. Let’s make a positive
        impact, one bag at a time!
      </Text>
      <View
        style={[
          styles.communityChallengesChild8,
          styles.communityChildPosition1,
        ]}
      />
      <Text
        style={[styles.buyLocalChallenge, styles.bringLayout]}
      >{`Buy Local Challenge `}</Text>
      <Image
        style={[styles.communityChallengesChild2, styles.communityChildLayout2]}
        contentFit="cover"
        source={require("../assets/frame-151.png")}
      />
      <Image
        style={[styles.communityChallengesChild6, styles.communityChildLayout2]}
        contentFit="cover"
        source={require("../assets/frame-201.png")}
      />
      <Text style={[styles.community1, styles.community1Position]}>
        Community
      </Text>
      <Text style={[styles.forTheDuration1, styles.forTypo]}>
        For the duration of this challenge, try purchasing groceries from local
        businesses such as The Local Farm. Supporting local businesses reduces
        the carbon footprint produced during transportation!
      </Text>
      <View
        style={[styles.communityChallengesChild11, styles.communityChildLayout]}
      />
      <Text style={[styles.join1234People, styles.join1234Layout]}>
        Join 1234 people!
      </Text>
      <Image
        style={[
          styles.communityChallengesChild12,
          styles.communityChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-161.png")}
      />
      <Text style={[styles.individual3, styles.individualTypo]}>
        Individual
      </Text>
      <Image
        style={[
          styles.communityChallengesChild13,
          styles.communityChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-161.png")}
      />
      <Text style={[styles.individual4, styles.community2Position]}>
        Individual
      </Text>
      <View
        style={[
          styles.communityChallengesChild14,
          styles.communityChildLayout1,
        ]}
      />
      <Image
        style={[
          styles.communityChallengesChild13,
          styles.communityChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-201.png")}
      />
      <Text style={[styles.community2, styles.community2Position]}>
        Community
      </Text>
      <View
        style={[styles.communityChallengesChild16, styles.communityChildLayout]}
      />
      <Text style={[styles.join1234People1, styles.join1234Layout]}>
        Join 1234 people!
      </Text>
      <Text
        style={[styles.bringYourOwn1, styles.bringLayout]}
      >{`Bring Your Own Bag Challenge `}</Text>
      <Image
        style={[
          styles.communityChallengesChild17,
          styles.communityChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-151.png")}
      />
      <Image
        style={[
          styles.communityChallengesChild18,
          styles.communityChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-161.png")}
      />
      <Text style={[styles.individual5, styles.individualTypo]}>
        Individual
      </Text>
      <View
        style={[
          styles.communityChallengesChild19,
          styles.communityChildPosition2,
        ]}
      />
      <Image
        style={[
          styles.communityChallengesChild17,
          styles.communityChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-151.png")}
      />
      <Image
        style={[
          styles.communityChallengesChild21,
          styles.communityChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-161.png")}
      />
      <Text style={[styles.individual6, styles.community3Position]}>
        Individual
      </Text>
      <Text style={[styles.forTheDuration2, styles.forTypo]}>
        For the duration of this challenge, commit to using reusable bags
        instead of single-use plastic bags when shopping. Let’s make a positive
        impact, one bag at a time!
      </Text>
      <View
        style={[
          styles.communityChallengesChild22,
          styles.communityChildPosition1,
        ]}
      />
      <Text
        style={[styles.thriftWeekChallenge, styles.bringLayout]}
      >{`Thrift Week Challenge `}</Text>
      <Image
        style={[
          styles.communityChallengesChild17,
          styles.communityChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-251.png")}
      />
      <Image
        style={[
          styles.communityChallengesChild21,
          styles.communityChildLayout2,
        ]}
        contentFit="cover"
        source={require("../assets/frame-201.png")}
      />
      <Text style={[styles.community3, styles.community3Position]}>
        Community
      </Text>
      <Text style={styles.forTheDuration3}>
        For the duration of this challenge, purchase items from thrift stores,
        consignment shops, or online resale platforms. Give pre-loved items a
        new lease on life!
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.communityChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[styles.iconmonstrShoppingBag56, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.letsChat, styles.search1Typo]}>Let’s Chat</Text>
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
        style={[styles.wrapper, styles.communityChildPosition]}
        onPress={() => navigation.navigate("JoinLeaderboard")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/group-15.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.communityChildPosition]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
      </Pressable>
      <Image
        style={[
          styles.communityChallengesChild25,
          styles.communityChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <Image
        style={[
          styles.communityChallengesChild26,
          styles.communityChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-33.png")}
      />
      <Pressable
        style={[styles.iconmonstrBinoculars84, styles.frameLayout]}
        onPress={() => navigation.navigate("SearchPage")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconmonstrbinoculars8-41.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Pressable
        style={[styles.frame, styles.frameLayout]}
        onPress={() => navigation.navigate("JoinLeaderboard")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/image-11.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  communityLayout: {
    height: 42,
    borderWidth: 1,
    borderStyle: "solid",
    width: 361,
    borderColor: Color.colorGainsboro_300,
    backgroundColor: Color.colorWhitesmoke_200,
    left: 0,
    position: "absolute",
  },
  rectangleViewBorder: {
    height: 43,
    top: 41,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_300,
    borderStyle: "solid",
    position: "absolute",
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
  communityChildLayout3: {
    height: 161,
    width: 374,
  },
  bringLayout: {
    height: 29,
    fontSize: FontSize.size_mini,
    width: 374,
    textAlign: "center",
    color: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  communityChildLayout2: {
    width: 36,
    left: 18,
    overflow: "hidden",
    height: 43,
    position: "absolute",
  },
  individualTypo: {
    height: 13,
    width: 33,
    left: 20,
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
  communityChildLayout1: {
    height: 28,
    width: 375,
    backgroundColor: Color.colorGainsboro_300,
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
  communityChildPosition1: {
    left: 1,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  communityChildLayout: {
    height: 35,
    backgroundColor: Color.colorPowderblue,
    borderWidth: 1,
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
  communityChildPosition2: {
    backgroundColor: Color.colorWhite,
    left: 0,
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
  communityChildPosition: {
    height: 33,
    top: 596,
    position: "absolute",
  },
  vectorIconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  search1Typo: {
    fontSize: FontSize.size_6xs,
    height: 13,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
  },
  homePosition: {
    top: 655,
    position: "absolute",
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
    top: 656,
    position: "absolute",
  },
  frameLayout: {
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  communityChallengesChild: {
    top: 0,
  },
  communityChallengesItem: {
    top: 251,
  },
  communityChallengesInner: {
    width: 188,
    backgroundColor: Color.colorWhitesmoke_200,
    top: 41,
    left: 0,
  },
  rectangleView: {
    left: 187,
    backgroundColor: Color.colorDarkgray_100,
    width: 174,
  },
  challenges: {
    top: 13,
    width: 323,
    height: 57,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.changaRegular,
    left: 25,
    position: "absolute",
  },
  individual: {
    top: 53,
    left: 25,
    width: 136,
  },
  community: {
    top: 54,
    left: 212,
  },
  frameIcon: {
    top: 83,
    height: 168,
    overflow: "hidden",
    width: 360,
    left: 0,
    position: "absolute",
  },
  availableCommunityChallenges: {
    top: 262,
    height: 31,
    width: 374,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_mid,
    left: 0,
    position: "absolute",
  },
  communityChallengesChild1: {
    top: 292,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  bringYourOwn: {
    top: 304,
    fontFamily: FontFamily.interRegular,
  },
  communityChallengesChild2: {
    top: 306,
  },
  communityChallengesChild3: {
    top: 373,
  },
  individual1: {
    top: 412,
  },
  communityChallengesChild6: {
    top: 363,
  },
  individual2: {
    fontSize: FontSize.size_5xs,
  },
  communityChallengesChild7: {
    top: 425,
  },
  forTheDuration: {
    top: 339,
    width: 222,
    left: 91,
    height: 65,
    fontFamily: FontFamily.interRegular,
  },
  communityChallengesChild8: {
    top: 294,
    height: 161,
    width: 374,
  },
  buyLocalChallenge: {
    top: 296,
    fontFamily: FontFamily.changaRegular,
  },
  community1: {
    fontSize: FontSize.size_7xs,
  },
  forTheDuration1: {
    top: 321,
    left: 56,
    width: 270,
    fontFamily: FontFamily.changaRegular,
  },
  communityChallengesChild11: {
    top: 419,
    width: 361,
    borderColor: Color.colorGainsboro_300,
    height: 35,
    backgroundColor: Color.colorPowderblue,
  },
  join1234People: {
    top: 427,
    fontFamily: FontFamily.changaRegular,
  },
  communityChallengesChild12: {
    top: 697,
  },
  individual3: {
    top: 736,
  },
  communityChallengesChild13: {
    top: 687,
  },
  individual4: {
    fontSize: FontSize.size_5xs,
  },
  communityChallengesChild14: {
    top: 749,
  },
  community2: {
    fontSize: FontSize.size_7xs,
  },
  communityChallengesChild16: {
    top: 743,
    borderColor: Color.colorBlack,
    width: 376,
  },
  join1234People1: {
    top: 751,
    fontFamily: FontFamily.interRegular,
  },
  bringYourOwn1: {
    top: 465,
    fontFamily: FontFamily.interRegular,
  },
  communityChallengesChild17: {
    top: 467,
  },
  communityChallengesChild18: {
    top: 534,
  },
  individual5: {
    top: 573,
  },
  communityChallengesChild19: {
    top: 453,
    height: 130,
    width: 360,
  },
  communityChallengesChild21: {
    top: 524,
  },
  individual6: {
    fontSize: FontSize.size_5xs,
  },
  forTheDuration2: {
    top: 500,
    width: 222,
    left: 91,
    height: 65,
    fontFamily: FontFamily.interRegular,
  },
  communityChallengesChild22: {
    top: 455,
    width: 359,
    height: 136,
  },
  thriftWeekChallenge: {
    top: 458,
    fontFamily: FontFamily.changaRegular,
  },
  community3: {
    fontSize: FontSize.size_7xs,
  },
  forTheDuration3: {
    top: 490,
    left: 62,
    width: 253,
    height: 78,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
    position: "absolute",
  },
  ellipseIcon: {
    left: 112,
    width: 32,
    height: 33,
    top: 596,
  },
  iconmonstrShoppingBag56: {
    top: 601,
    left: 120,
    width: 21,
    height: 22,
    overflow: "hidden",
  },
  letsChat: {
    left: 290,
    width: 48,
    top: 655,
    position: "absolute",
  },
  search1: {
    width: 46,
  },
  search: {
    left: 230,
  },
  home: {
    left: 169,
    top: 655,
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
  wrapper: {
    left: 47,
    width: 32,
    height: 33,
    top: 596,
  },
  container: {
    left: 174,
    width: 32,
    height: 33,
    top: 596,
  },
  communityChallengesChild25: {
    left: 236,
    width: 32,
    height: 33,
    top: 596,
  },
  communityChallengesChild26: {
    left: 297,
    height: 33,
    top: 596,
    width: 33,
  },
  icon2: {
    overflow: "hidden",
  },
  iconmonstrBinoculars84: {
    left: 240,
    top: 600,
    height: 24,
  },
  vectorIcon: {
    height: "3.3%",
    width: "6.39%",
    top: "93.7%",
    right: "44.22%",
    bottom: "3%",
    left: "49.39%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  frame: {
    left: 51,
    top: 603,
    height: 22,
  },
  communityChallenges: {
    backgroundColor: Color.colorLightcyan,
    flex: 1,
    height: 640,
    width: "100%",
  },
});

export default CommunityChallenges;
