import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const SearchBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchBar}>
      <Image
        style={[styles.normalDownBarIcon, styles.barPosition]}
        contentFit="cover"
        source={require("../assets/normal-down-bar.png")}
      />
      <View style={styles.time}>
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
        source={require("../assets/battery1.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>100 %</Text>
      <Pressable
        style={styles.arrow}
        onPress={() => navigation.navigate("MainPage1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow1.png")}
        />
      </Pressable>
      <View style={[styles.searchBarChild, styles.barPosition]} />
      <Text style={[styles.searchNews, styles.searchTypo]}>Search News</Text>
      <Pressable
        style={styles.close}
        onPress={() => navigation.navigate("MainPage1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/close.png")}
        />
      </Pressable>
      <Image
        style={styles.circleSearchIcon}
        contentFit="cover"
        source={require("../assets/circle-search.png")}
      />
      <Text style={[styles.searchForNews, styles.searchTypo]}>{`Search for news
`}</Text>
      <Text
        style={[styles.youHaventSearched, styles.searchTypo]}
      >{`you haven’t searched for any news yet `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  barPosition: {
    width: 430,
    left: 0,
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
    position: "absolute",
    overflow: "hidden",
  },
  searchTypo: {
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    position: "absolute",
  },
  normalDownBarIcon: {
    top: 882,
    height: 50,
  },
  text: {
    width: "147.96%",
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_xl,
  },
  time: {
    top: 8,
    left: 16,
    width: 108,
    height: 45,
    position: "absolute",
  },
  wifiIcon: {
    height: "1.41%",
    width: "4.65%",
    top: "1.29%",
    right: "22.56%",
    bottom: "97.31%",
    left: "72.79%",
  },
  batteryIcon: {
    height: "1.59%",
    width: "5.91%",
    top: "1.18%",
    right: "15.72%",
    bottom: "97.23%",
    left: "78.37%",
  },
  text1: {
    top: "0.86%",
    left: "85.12%",
    fontSize: FontSize.size_lg,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrow: {
    left: 17,
    top: 41,
    width: 26,
    height: 22,
    position: "absolute",
  },
  searchBarChild: {
    top: 87,
    backgroundColor: Color.mildSiment,
    height: 798,
  },
  searchNews: {
    left: 60,
    color: Color.colorGray_700,
    top: 46,
    fontSize: FontSize.size_xl,
  },
  close: {
    left: 387,
    width: 15,
    height: 15,
    top: 46,
    position: "absolute",
  },
  circleSearchIcon: {
    top: 316,
    left: 136,
    width: 150,
    height: 150,
    position: "absolute",
  },
  searchForNews: {
    top: 502,
    left: 149,
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_xl,
  },
  youHaventSearched: {
    top: 538,
    left: 82,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_400,
  },
  searchBar: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default SearchBar;
