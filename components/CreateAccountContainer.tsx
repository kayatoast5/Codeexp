import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const CreateAccountContainer = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.content, styles.label1Position]}>
      <View style={styles.copy}>
        <Text style={styles.createAnAccount}>Create an account</Text>
        <Text style={styles.enterYourEmail}>
          Enter your email to sign up for this app
        </Text>
      </View>
      <Pressable
        style={styles.dividerSpaceBlock}
        onPress={() => navigation.navigate("StartScreen")}
      >
        <View style={[styles.field, styles.fieldLayout]}>
          <Text style={styles.label} numberOfLines={1}>
            email@domain.com
          </Text>
        </View>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={[styles.primary, styles.googleTypo]}>
            Sign up with email
          </Text>
        </View>
      </Pressable>
      <View style={[styles.divider, styles.buttonFlexBox]}>
        <View style={styles.dividerLayout} />
        <Text style={styles.orContinueWith}>or continue with</Text>
        <View style={[styles.divider2, styles.dividerLayout]} />
      </View>
      <View style={styles.button1}>
        <View style={[styles.label1, styles.fieldFlexBox]}>
          <Image
            style={styles.googleIcon}
            contentFit="cover"
            source={require("../assets/google.png")}
          />
          <Text style={[styles.google, styles.googleTypo]}>Google</Text>
        </View>
      </View>
      <Text style={styles.byClickingContinueContainer}>
        <Text
          style={styles.byClickingContinue}
        >{`By clicking continue, you agree to our `}</Text>
        <Text style={styles.termsOfService}>Terms of Service</Text>
        <Text style={styles.byClickingContinue}>{` and `}</Text>
        <Text style={styles.termsOfService}>Privacy Policy</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label1Position: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  fieldLayout: {
    paddingHorizontal: Padding.p_base,
    height: 40,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  googleTypo: {
    fontFamily: FontFamily.bodyText,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
  },
  dividerLayout: {
    height: 1,
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
  },
  fieldFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  createAnAccount: {
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    color: Color.colorBlack,
  },
  enterYourEmail: {
    lineHeight: 21,
    marginTop: 2,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorBlack,
  },
  copy: {
    alignItems: "center",
  },
  label: {
    overflow: "hidden",
    textAlign: "left",
    flex: 1,
    color: Color.colorGray,
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  field: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  primary: {
    color: Color.colorWhite,
  },
  button: {
    backgroundColor: Color.colorBlack,
    marginTop: 16,
    paddingHorizontal: Padding.p_base,
    height: 40,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    paddingVertical: 0,
  },
  dividerSpaceBlock: {
    marginTop: 24,
    width: 327,
  },
  orContinueWith: {
    marginLeft: 8,
    color: Color.colorGray,
    lineHeight: 20,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  divider2: {
    marginLeft: 8,
  },
  divider: {
    marginTop: 24,
    width: 327,
  },
  googleIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  google: {
    marginLeft: 8,
    color: Color.colorBlack,
  },
  label1: {
    marginTop: -10,
    marginLeft: -37.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  button1: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 40,
    borderRadius: Border.br_5xs,
    marginTop: 24,
    width: 327,
  },
  byClickingContinue: {
    color: Color.colorGray,
  },
  termsOfService: {
    color: Color.colorBlack,
  },
  byClickingContinueContainer: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    alignSelf: "stretch",
    marginTop: 24,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  content: {
    marginTop: -28,
    marginLeft: -188,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    alignItems: "center",
  },
});

export default CreateAccountContainer;
