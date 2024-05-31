import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Favourtie = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.favourtie, styles.iconLayout1]}>
      <View style={[styles.time, styles.timePosition]}>
        <Text style={[styles.text, styles.textTypo]}>12:00</Text>
      </View>
      <Image
        style={[styles.wifiIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <Image
        style={[styles.batteryIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/battery4.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>100 %</Text>
      <Image
        style={[styles.downBarIcon, styles.downIconLayout]}
        contentFit="cover"
        source={require("../assets/down-bar5.png")}
      />
      <Image
        style={[styles.normalDownBarIcon, styles.downIconLayout]}
        contentFit="cover"
        source={require("../assets/normal-down-bar.png")}
      />
      <Text style={[styles.bookmarks, styles.javaIsATypo]}>Bookmarks</Text>
      <Pressable
        style={styles.clearAll}
        onPress={() => navigation.navigate("MainPage")}
      >
        <Text style={[styles.clearAll1, styles.javaIsATypo]}>clear all</Text>
      </Pressable>
      <Image
        style={styles.favourtieChild}
        contentFit="cover"
        source={require("../assets/rectangle-42.png")}
      />
      <Text
        style={[styles.javaIsA, styles.javaIsATypo]}
      >{`Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It was developed by James Gosling and his team at Sun Microsystems, which is now a subsidiary of Oracle Corporation. Java was first released in 1995, and it has since become one of the most widely used programming languages in the world. Here are some key features and aspects of Java:
Key Features of Java:

Object-Oriented
Platform Independence
Simple and Familiar
Robust and Secure
Multithreaded
Rich Standard Library
`}</Text>
      <Text style={[styles.thisOneIs, styles.text2Typo]}>
        This one is added to your favourite
      </Text>
      <Image
        style={styles.loveIcon}
        contentFit="cover"
        source={require("../assets/love1.png")}
      />
      <Text style={[styles.text2, styles.text2Typo]}>!!!</Text>
      <Pressable
        style={[styles.community, styles.communityLayout]}
        onPress={() => navigation.navigate("CommunityPade")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/community.png")}
        />
      </Pressable>
      <Image
        style={[styles.heartIcon, styles.communityLayout]}
        contentFit="cover"
        source={require("../assets/heart2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  timePosition: {
    left: 25,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "2.15%",
    position: "absolute",
    overflow: "hidden",
  },
  downIconLayout: {
    height: 50,
    width: 430,
    position: "absolute",
  },
  javaIsATypo: {
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
  },
  text2Typo: {
    color: Color.siment,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  communityLayout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  text: {
    width: "147.96%",
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
  },
  time: {
    top: 12,
    width: 108,
    height: 45,
  },
  wifiIcon: {
    height: "1.41%",
    width: "4.65%",
    right: "23.49%",
    bottom: "96.45%",
    left: "71.86%",
  },
  batteryIcon: {
    height: "1.59%",
    width: "5.91%",
    right: "16.19%",
    bottom: "96.27%",
    left: "77.91%",
  },
  text1: {
    top: "1.61%",
    left: "84.65%",
    fontSize: FontSize.size_lg,
  },
  downBarIcon: {
    top: 832,
    left: -9,
  },
  normalDownBarIcon: {
    top: 882,
    left: 0,
  },
  bookmarks: {
    top: 52,
    color: Color.colorGray_300,
    fontSize: FontSize.size_lg,
    left: 25,
    position: "absolute",
  },
  clearAll1: {
    color: Color.colorGray_700,
    fontSize: FontSize.size_lg,
  },
  clearAll: {
    left: 347,
    top: 48,
    position: "absolute",
  },
  favourtieChild: {
    top: 86,
    left: 13,
    borderRadius: Border.br_8xs,
    width: 404,
    height: 285,
    position: "absolute",
  },
  javaIsA: {
    top: 389,
    width: 397,
    left: 20,
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  thisOneIs: {
    top: 795,
    left: 20,
  },
  loveIcon: {
    top: 796,
    left: 348,
    width: 21,
    height: 18,
    position: "absolute",
  },
  text2: {
    top: 799,
    left: 373,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  community: {
    left: 360,
    top: 847,
  },
  heartIcon: {
    top: 846,
    left: 178,
    overflow: "hidden",
  },
  favourtie: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
  },
});

export default Favourtie;
