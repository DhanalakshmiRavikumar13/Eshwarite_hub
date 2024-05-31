import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.getStarted}>
      <View style={[styles.vectorParent, styles.vectorParentLayout]}>
        <Image
          style={[styles.instanceChild, styles.vectorParentLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.eshwariteHubIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/eshwarite-hub.png")}
        />
        <Text
          style={[styles.leadershipExcellence, styles.textTypo]}
        >{`Leadership & Excellence`}</Text>
      </View>
      <Image
        style={styles.getStartedChild}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Pressable
        style={styles.getStarted1}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Image
          style={styles.getStartedItem}
          contentFit="cover"
          source={require("../assets/rectangle-2.png")}
        />
        <Text style={[styles.getStarted2, styles.text1Typo]}>GET STARTED</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
  },
  text1Typo: {
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  vectorParentLayout: {
    height: 100,
    position: "absolute",
  },
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  getStartedChild: {
    top: 339,
    left: 60,
    width: 294,
    height: 307,
    position: "absolute",
  },
  getStartedItem: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_2xl,
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  getStarted2: {
    top: "37.31%",
    left: "27.97%",
    letterSpacing: 1.4,
    fontWeight: "600",
    fontFamily: FontFamily.josefinSansSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  getStarted1: {
    top: 753,
    left: 20,
    borderRadius: Border.br_xl,
    backgroundColor: Color.sriEshwar,
    width: 354,
    height: 67,
    position: "absolute",
  },
  instanceChild: {
    top: 0,
    left: 156,
    width: 97,
  },
  eshwariteHubIcon: {
    top: 5,
    width: 239,
    height: 45,
    left: "50%", // Center horizontally
    marginLeft: -1.5, // Half of the icon's width
    position: "absolute",
  },
  leadershipExcellence: {
    top: 50,
    left: "50%", // Center horizontally
    marginLeft: -5, // Half of the text's width
    fontSize: FontSize.size_3xs,
    color: Color.sriEshwar,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  vectorParent: {
    top: 151,
    left: 96,
    width: 253,
  },
  getStarted: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default GetStarted;
