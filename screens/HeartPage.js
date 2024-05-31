import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const HeartPage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.heartPage, styles.iconLayout1]}>
      <Image
        style={[styles.normalDownBarIcon, styles.downIconLayout]}
        contentFit="cover"
        source={require("../assets/normal-down-bar.png")}
      />
      <View style={styles.heartPageChild} />
      <Text style={[styles.bookmarks, styles.yourTypo]}>Bookmarks</Text>
      <Text style={[styles.clearAll, styles.yourTypo]}>clear all</Text>
      <View style={styles.time}>
        <Text style={[styles.text, styles.textTypo]}>12:00</Text>
      </View>
      <Text style={[styles.text1, styles.textTypo]}>100 %</Text>
      <Image
        style={[styles.batteryIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/battery4.png")}
      />
      <Image
        style={[styles.wifiIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <Image
        style={[styles.downBarIcon, styles.downIconLayout]}
        contentFit="cover"
        source={require("../assets/down-bar2.png")}
      />
      <Image
        style={[styles.favouriteIcon, styles.favouriteIconPosition]}
        contentFit="cover"
        source={require("../assets/favourite.png")}
      />
      <Text style={[styles.yourBookmarkIs, styles.favouriteIconPosition]}>
        Your Bookmark is empty !!
      </Text>
      <Text style={[styles.saveYourFavourite, styles.yourTypo]}>
        save your favourite things here
      </Text>
      <Pressable
        style={styles.community}
        onPress={() => navigation.navigate("CommunityPade")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/community.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  downIconLayout: {
    height: 50,
    left: 0,
    width: 430,
    position: "absolute",
  },
  yourTypo: {
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_lg,
  },
  textTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  favouriteIconPosition: {
    left: 120,
    position: "absolute",
  },
  normalDownBarIcon: {
    top: 882,
  },
  heartPageChild: {
    top: 89,
    left: -9,
    backgroundColor: Color.mildSiment,
    height: 793,
    width: 430,
    position: "absolute",
  },
  bookmarks: {
    left: 12,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    top: 52,
    position: "absolute",
  },
  clearAll: {
    left: 352,
    color: Color.colorGray_700,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
    top: 52,
  },
  text: {
    width: "147.96%",
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_xl,
  },
  time: {
    top: 18,
    left: 25,
    width: 108,
    height: 45,
    position: "absolute",
  },
  text1: {
    top: "1.61%",
    left: "85.81%",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
  },
  batteryIcon: {
    height: "1.59%",
    width: "5.91%",
    top: "1.93%",
    right: "15.26%",
    bottom: "96.48%",
    left: "78.84%",
  },
  wifiIcon: {
    height: "1.41%",
    width: "4.65%",
    top: "2.15%",
    right: "23.26%",
    bottom: "96.45%",
    left: "72.09%",
  },
  downBarIcon: {
    top: 832,
  },
  favouriteIcon: {
    top: 272,
    width: 188,
    height: 194,
    overflow: "hidden",
  },
  yourBookmarkIs: {
    top: 512,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_lg,
    color: Color.colorGray_300,
  },
  saveYourFavourite: {
    top: 543,
    left: 99,
    color: Color.siment,
    textAlign: "left",
    fontFamily: FontFamily.josefinSansRegular,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  community: {
    left: 361,
    top: 844,
    width: 25,
    height: 25,
    position: "absolute",
  },
  heartPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
  },
});

export default HeartPage;
