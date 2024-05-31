import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const WelcomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcomePage}>
      <View style={styles.component1}>
        <View style={styles.component1Child} />
        <Image
          style={[styles.termsAndCondition, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/terms-and-condition.png")}
        />
        <Image
          style={[styles.puzzleIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/puzzle.png")}
        />
        <View style={[styles.notification, styles.flagIconLayout]}>
          <View style={[styles.notificationChild, styles.childPosition]} />
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
        <Image
          style={[styles.ideaIcon, styles.flagIconLayout]}
          contentFit="cover"
          source={require("../assets/idea.png")}
        />
        <View style={[styles.flag, styles.flagIconLayout]}>
          <View style={[styles.flagChild, styles.childPosition]} />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
        <View style={[styles.flag1, styles.flagIconLayout]}>
          <View style={[styles.flagChild, styles.childPosition]} />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
        <View style={[styles.notification1, styles.flagIconLayout]}>
          <View style={[styles.notificationChild, styles.childPosition]} />
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
        <Image
          style={[styles.ideaIcon1, styles.flagIconLayout]}
          contentFit="cover"
          source={require("../assets/idea.png")}
        />
        <View style={[styles.puzzle, styles.puzzlePosition]}>
          <View style={[styles.puzzleChild, styles.childPosition]} />
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
        </View>
        <Image
          style={[styles.notificationIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/notification.png")}
        />
        <View style={[styles.flag2, styles.flagIconLayout]}>
          <View style={[styles.flagChild, styles.childPosition]} />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
        <Image
          style={[styles.ideaIcon2, styles.puzzlePosition]}
          contentFit="cover"
          source={require("../assets/idea.png")}
        />
        <Text style={styles.inOrderTo}>
          {`In order to provide better recommandation service of the app please agree to the privacy terms and condition
          `}
        </Text>
        <View style={[styles.checkBox1, styles.checkPosition]}>
          <View style={[styles.checkBox1Child, styles.checkChildPosition]} />
          <Text
            style={[
              styles.allowAppRecommendation,
              styles.turnOnPersonlizedTypo,
            ]}
          >
            Allow App Recommendation over auto-update ove the data network
          </Text>
          <Image
            style={[styles.checkBoxIcon, styles.checkBoxIconPosition]}
            contentFit="cover"
            source={require("../assets/check-box.png")}
          />
          <Image
            style={[styles.tickIcon, styles.tickIconPosition]}
            contentFit="cover"
            source={require("../assets/tick.png")}
          />
        </View>
        <Pressable
          style={styles.agree}
          onPress={() => navigation.navigate("MainPage1")}
        >
          <View style={[styles.agreeChild, styles.childPosition]} />
          <Text style={[styles.agree1, styles.textTypo1]}>AGREE</Text>
        </Pressable>
        <View style={[styles.checkBox2, styles.checkPosition]}>
          <View style={[styles.checkBox2Child, styles.checkChildPosition]} />
          <Text
            style={[styles.turnOnPersonlized, styles.checkBoxIcon1Position]}
          >{`Turn on personlized app recommandation
          `}</Text>
          <Image
            style={[styles.checkBoxIcon1, styles.checkBoxIcon1Position]}
            contentFit="cover"
            source={require("../assets/check-box.png")}
          />
          <Image
            style={[styles.tickIcon, styles.tickIconPosition]}
            contentFit="cover"
            source={require("../assets/tick.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  childPosition1: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  flagIconLayout: {
    width: "6.63%",
    height: "3.84%",
    position: "absolute",
  },
  childPosition: {
    right: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
  },
  vectorIconPosition: {
    left: "12%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  puzzlePosition: {
    left: "75.86%",
    right: "17.51%",
    width: "6.63%",
    height: "3.84%",
    position: "absolute",
  },
  checkPosition: {
    left: "6.37%",
    position: "absolute",
  },
  checkChildPosition: {
    backgroundColor: Color.colorGray_800,
    borderRadius: Border.br_8xs,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  turnOnPersonlizedTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.josefinSansMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },
  checkBoxIconPosition: {
    top: "20%",
    position: "absolute",
  },
  tickIconPosition: {
    top: "20%",
    left: "4%",
    width: 30,
    height: 30,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  checkBoxIcon1Position: {
    top: "18.18%",
    position: "absolute",
  },
  text: {
    width: "37.16%",
    top: "1.18%",
    left: "3.26%",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  wifiIcon: {
    height: "1.41%",
    width: "4.65%",
    right: "50%",
    bottom: "97.31%",
    left: "71.26%",
    top: "2%",
    maxWidth: "100%",
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
  },
  percentage: {
    height: "1.29%",
    width: "0%",
    top: "1.4%",
    right: "7.44%",
    bottom: "98.07%",
    left: "86.28%",
    position: "absolute",
  },
  batteryIcon: {
    height: "1.59%",
    width: "5.91%",
    right: "15.02%",
    bottom: "97.12%",
    left: "79.07%",
    top: "2%",
    maxWidth: "100%",
    position: "absolute",
  },
  normalDownBarIcon: {
    top: 882,
    left: -1,
    width: 431,
    height: 50,
    position: "absolute",
  },
  component1Child: {
    width: "100.53%",
    right: "-0.53%",
    borderRadius: 50,
    backgroundColor: "rgba(46, 253, 0, 0.66)",
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  termsAndCondition: {
    height: "23.04%",
    width: "39.79%",
    top: "8.91%",
    right: "29.97%",
    bottom: "68.05%",
    left: "26.24%", // Adjusted left position
    position: "absolute",
  },
  puzzleIcon: {
    height: "5.99%",
    width: "10.34%",
    top: "15.51%",
    right: "71.88%",
    bottom: "78.49%",
    left: "17.77%",
    position: "absolute",
  },
  notificationChild: {
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_8xs,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  vectorIcon: {
    height: "80%",
    width: "80%",
    top: "12%",
    right: "8%",
    bottom: "8%",
  },
  notification: {
    top: "16.59%",
    right: "90.19%",
    bottom: "79.57%",
    left: "3.18%",
  },
  ideaIcon: {
    top: "7.37%",
    right: "7.43%",
    bottom: "88.79%",
    left: "85.94%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  flagChild: {
    backgroundColor: Color.colorOrange,
    borderRadius: Border.br_8xs,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "68.4%",
    width: "77.2%",
    top: "16%",
    right: "10.8%",
    bottom: "15.6%",
  },
  flag: {
    top: "3.99%",
    right: "25.2%",
    bottom: "92.17%",
    left: "68.17%",
  },
  flag1: {
    top: "2%",
    right: "66.84%",
    bottom: "94.16%",
    left: "25.53%", // Adjusted left position
  },
  notification1: {
    top: "3.07%",
    right: "46.68%",
    bottom: "93.09%",
    left: "46.68%",
  },
  ideaIcon1: {
    top: "7.68%",
    right: "84.08%",
    bottom: "88.48%",
    left: "9.28%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  puzzleChild: {
    backgroundColor: Color.colorPlum,
    borderRadius: Border.br_8xs,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  puzzle: {
    top: "14.13%",
    bottom: "82.03%",
  },
  notificationIcon: {
    height: "4.87%",
    width: "8.41%",
    top: "18.59%",
    right: "3.26%",
    bottom: "76.54%",
    left: "88.33%",
    position: "absolute",
  },
  flag2: {
    top: "25.19%",
    right: "82.23%",
    bottom: "70.97%",
    left: "11.14%",
  },
  ideaIcon2: {
    top: "25.04%",
    bottom: "71.12%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  inOrderTo: {
    width: "84.62%",
    top: "38.25%",
    left: "6.16%",
    textAlign: "center",
    fontFamily: FontFamily.josefinSansMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  checkBox1Child: {
    right: "0%",
    bottom: "0%",
    height: "100%",
    width: "100%",
  },
  allowAppRecommendation: {
    width: "84.47%",
    left: "15.53%",
    top: "20%",
    position: "absolute",
  },

  tickIcon: {
    height: 30,
    width: 30,
    top: "30%", // Adjust this value as needed
    left: "50%", // Adjust this value as needed
    position: "absolute",
  },
  checkBox1: {
    height: "7.68%",
    width: "85.41%",
    top: "55.45%",
    right: "8.22%",
    bottom: "36.87%",
    borderRadius: Border.br_8xs,
  },
  agreeChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.sriEshwar,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  agree1: {
    top: "33.33%",
    left: "38.67%",
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorWhite,
    textAlign: "right",
  },
  agree: {
    height: "8.76%",
    width: "79.58%",
    top: "81.87%",
    right: "10.88%",
    bottom: "9.37%",
    left: "9.55%",
    position: "absolute",
  },
  checkBox2Child: {
    height: "90.91%",
    width: "98.17%",
    right: "1.83%",
    bottom: "9.09%",
  },
  turnOnPersonlized: {
    width: "76.83%",
    left: "23.17%",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.josefinSansMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
  },

  checkBox2: {
    height: "8.45%",
    width: "87%",
    top: "67.13%",
    right: "6.63%",
    bottom: "24.42%",
  },
  component1: {
    top: 124,
    left: 7,
    width: 377,
    height: 651,
    position: "absolute",
  },
  welcomePage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default WelcomePage;
