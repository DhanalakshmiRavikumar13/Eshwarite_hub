import * as React from "react";

import { View, Text, Image, Pressable, Linking, StyleSheet } from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const TrolleyPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.trolleyPage}>
      <View style={[styles.time, styles.timePosition]}>
       
      </View>


      
      <Pressable
        style={[styles.arrow, styles.timePosition]}
        onPress={() => navigation.navigate("MainPage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow.png")}
        />
      </Pressable>
      <Image
        style={styles.troleyIcon}
        contentFit="cover"
        source={require("../assets/troley2.png")}
      />
      <Text style={[styles.youDidntPurchase, styles.youDidntPurchaseTypo]}>
        you didn’t purchase anything
      </Text>
      <Text style={[styles.addYourCollection, styles.youDidntPurchaseTypo]}>
        Add your collection here
      </Text>
      <Image
        style={styles.normalDownBarIcon}
        contentFit="cover"
        source={require("../assets/normal-down-bar.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    left: 14,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "1.39%",
    position: "absolute",
    overflow: "hidden",
  },
  youDidntPurchaseTypo: {
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    width: "147.96%",
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  time: {
    top: 10,
    width: 108,
    height: 45,
  },
  wifiIcon: {
    height: "1.41%",
    width: "4.65%",
    right: "22.33%",
    bottom: "97.2%",
    left: "73.02%",
  },
  batteryIcon: {
    height: "1.59%",
    width: "5.91%",
    right: "14.79%",
    bottom: "97.02%",
    left: "79.3%",
  },
  text1: {
    top: "0.97%",
    left: "86.74%",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  arrow: {
    top: 44,
    width: 26,
    height: 22,
  },
  troleyIcon: {
    top: 316,
    left: 152,
    width: 150,
    height: 150,
    position: "absolute",
  },
  youDidntPurchase: {
    top: 509,
    left: 100,
    color: Color.colorBlack,
    fontFamily: FontFamily.josefinSansRegular,
  },
  addYourCollection: {
    top: 542,
    left: 117,
    color: Color.siment,
  },
  normalDownBarIcon: {
    top: 882,
    left: 0,
    width: 430,
    height: 50,
    position: "absolute",
  },
  trolleyPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default TrolleyPage;
