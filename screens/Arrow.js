import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Arrow = () => {
  return (
    <View style={[styles.arrow, styles.arrowLayout]}>
      <Image
        style={[styles.vectorIcon, styles.arrowLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  arrowLayout: {
    overflow: "hidden",
    width: "100%",
  },
  vectorIcon: {
    position: "absolute",
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  arrow: {
    flex: 1,
    height: 48,
  },
});

export default Arrow;
