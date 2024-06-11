import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const QRCode = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.qrCode}>
      <Pressable
        style={styles.image1}
        onPress={() => navigation.navigate("IPhone8")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
      <Text style={[styles.scanQrCode, styles.scanQrCodeTypo]}>
        Scan qr code to redeem points
      </Text>
      <View style={styles.qrCodeInner} />
      <Text style={[styles.usernamesAccountQr, styles.scanQrCodeTypo]}>
        Username’s account QR
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    top: 589,
    height: 33,
    width: 32,
    position: "absolute",
  },
  containerPosition: {
    top: 588,
    height: 33,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  scanQrCodeTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  iconmonstrLayout1: {
    width: 21,
    height: 22,
    position: "absolute",
  },
  iconmonstrLayout: {
    height: 24,
    top: 592,
    width: 24,
    position: "absolute",
  },
  homePosition: {
    top: 622,
    position: "absolute",
  },
  search1Typo: {
    height: 13,
    textAlign: "center",
    fontSize: FontSize.size_6xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
  },
  challengesPosition: {
    top: 623,
    position: "absolute",
  },
  homeTypo: {
    height: 12,
    width: 47,
    textAlign: "center",
    fontSize: FontSize.size_6xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.changaRegular,
  },
  icon1: {
    borderRadius: 29,
  },
  image1: {
    left: 63,
    top: 181,
    width: 240,
    height: 238,
    position: "absolute",
  },
  scanQrCode: {
    top: 152,
    left: 99,
    width: 163,
    height: 33,
  },
  qrCodeInner: {
    top: 121,
    left: 35,
    backgroundColor: Color.colorGainsboro_300,
    width: 301,
    height: 31,
    position: "absolute",
  },
  usernamesAccountQr: {
    marginLeft: -72,
    top: 126,
    left: "50%",
    width: 128,
    height: 20,
  },
  qrCode: {
    backgroundColor: Color.colorLightcyan,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default QRCode;
