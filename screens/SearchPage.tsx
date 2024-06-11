import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import HomePageContainer from "../components/HomePageContainer";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SearchPage = () => {
  return (
    <View style={styles.searchPage}>
      <HomePageContainer />
      <Image
        style={styles.searchPageChild}
        contentFit="cover"
        source={require("../assets/rectangle-48.png")}
      />
      <Image
        style={styles.searchPageItem}
        contentFit="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <Image
        style={styles.searchPageInner}
        contentFit="cover"
        source={require("../assets/line-2.png")}
      />
      <Text style={[styles.searchForAnswers, styles.searchForAnswersFlexBox]}>
        Search for answers
      </Text>
      <View
        style={[styles.sUstainablesearchParent, styles.ustainablesearchLayout]}
      >
        <Text style={[styles.sUstainablesearch, styles.ustainablesearchLayout]}>
          S ustainableSearch
        </Text>
        <Image
          style={styles.pngClipartBlackMagnifyingGIcon}
          contentFit="cover"
          source={require("../assets/pngclipartblackmagnifyingglassillustrationmagnifyingglassiconmagnifierswhiteglasstextphotoroom-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchForAnswersFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  ustainablesearchLayout: {
    height: 56,
    position: "absolute",
  },
  searchPageChild: {
    top: 266,
    left: 15,
    borderRadius: Border.br_xl,
    width: 331,
    height: 43,
    position: "absolute",
  },
  searchPageItem: {
    top: 278,
    width: 14,
    height: 14,
    left: 27,
    position: "absolute",
  },
  searchPageInner: {
    top: 290,
    left: 38,
    width: 6,
    height: 6,
    position: "absolute",
  },
  searchForAnswers: {
    top: 279,
    left: 56,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interRegular,
    width: 152,
    height: 26,
    position: "absolute",
  },
  sUstainablesearch: {
    top: 0,
    left: 32,
    fontSize: 30,
    fontFamily: FontFamily.changaRegular,
    width: 259,
    textAlign: "left",
    color: Color.colorBlack,
  },
  pngClipartBlackMagnifyingGIcon: {
    top: 12,
    left: 0,
    width: 64,
    height: 44,
    position: "absolute",
  },
  sUstainablesearchParent: {
    top: 204,
    width: 291,
    left: 27,
  },
  searchPage: {
    backgroundColor: Color.colorLightcyan,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default SearchPage;
