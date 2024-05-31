import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Troley = () => {
  return (
    <View style={styles.troley}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon: {
    right: "82.63%",
    left: "2.11%",
    bottom: "0%",
    top: "80.53%",
    width: "15.26%",
    height: "19.47%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "77.37%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "22.63%",
    left: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon2: {
    right: "23.68%",
    left: "61.05%",
    bottom: "0%",
    top: "80.53%",
    width: "15.26%",
    height: "19.47%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  troley: {
    width: 19,
    height: 19,
  },
});

export default Troley;
