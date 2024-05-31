import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const SettingPage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settingPage, styles.iconLayout2]}>
      <View style={[styles.settingPageChild, styles.settingPosition]} />
      <View style={[styles.settingPageItem, styles.settingPosition]} />
      <Text style={styles.text}>100 %</Text>
      <Image
        style={[styles.batteryIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/battery1.png")}
      />
      <Image
        style={[styles.wifiIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <View style={styles.time}>
        <Text style={[styles.text1, styles.text1Typo]}>12:00</Text>
      </View>
      <Text style={[styles.settings, styles.joinUsTypo]}>Settings</Text>
      <Image
        style={[styles.downBarIcon, styles.downIconLayout]}
        contentFit="cover"
        source={require("../assets/down-bar3.png")}
      />
      <View style={[styles.settingPageInner, styles.settingPosition]} />
      <Image
        style={styles.onAndOffIcon}
        contentFit="cover"
        source={require("../assets/on--and-off.png")}
      />
      <Text style={[styles.darkMode, styles.joinUsTypo]}>Dark mode</Text>
      <Image
        style={[styles.modeIcon, styles.greaterLayout]}
        contentFit="cover"
        source={require("../assets/mode.png")}
      />
      <View style={[styles.rectangleView, styles.settingPosition]} />

      <Pressable onPress={() => navigation.navigate('PrivacyPolicy')}>
        <Text style={[styles.privacyPolicy, styles.joinUsTypo]}>Privacy Policy</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("AboutAppScreen")}>
        <Text style={[styles.aboutApp, styles.joinUsTypo]}>About App</Text>
      </Pressable>

      <Image
        style={[styles.privacyIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/privacy.png")}
      />
      <View style={[styles.greaterThan, styles.greaterPosition]}>
        <Text style={[styles.text2, styles.textPosition]}>{`>`}</Text>
      </View>
      <Image
        style={[styles.singleLineIcon, styles.singleIconLayout]}
        contentFit="cover"
        source={require("../assets/single-line.png")}
      />
      <Image
        style={[styles.bookIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/book.png")}
      />

      <Pressable onPress={() => navigation.navigate("TermsOfUseScreen")}>
        <Text style={[styles.termsOfUse, styles.joinUsTypo]}>Terms of Use</Text>
      </Pressable>

      <Image
        style={[styles.singleLineIcon1, styles.singleIconLayout]}
        contentFit="cover"
        source={require("../assets/single-line.png")}
      />
      <View style={[styles.greaterThan1, styles.greaterLayout]}>
        <Text style={[styles.text2, styles.textPosition]}>{`>`}</Text>
      </View>
      <Image
        style={[styles.starIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/star.png")}
      />

      <Pressable onPress={() => navigation.navigate("GiveUs5StarScreen")}>
        <Text style={[styles.giveUs5, styles.joinUsTypo]}>Give us 5 Star</Text>
      </Pressable>

      <Image
        style={[styles.singleLineIcon2, styles.singleIconLayout]}
        contentFit="cover"
        source={require("../assets/single-line.png")}
      />
      <View style={[styles.greaterThan2, styles.greaterPosition]}>
        <Text style={[styles.text2, styles.textPosition]}>{`>`}</Text>
      </View>
      <Image
        style={[styles.feedbackIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/feedback.png")}
      />
      <Image
        style={[styles.emailIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/email2.png")}
      />

      <Pressable onPress={() => navigation.navigate("ContactScreen")}>
        <Text style={[styles.contact, styles.contactTypo]}>Contact</Text>
      </Pressable>

      <Image
        style={styles.callIcon}
        contentFit="cover"
        source={require("../assets/call.png")}
      />
      <Image
        style={[styles.singleLineIcon3, styles.singleIconLayout]}
        contentFit="cover"
        source={require("../assets/single-line.png")}
      />
      <Image
        style={[styles.singleLineIcon4, styles.singleIconLayout]}
        contentFit="cover"
        source={require("../assets/single-line.png")}
      />

      <Pressable onPress={() => navigation.navigate("FeedbackScreen")}>
        <Text style={[styles.feedback, styles.contactTypo]}>{`Feedback`}</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("JoinUsScreen")}>
        <Text style={[styles.joinUs, styles.joinUsTypo]}>Join us</Text>
      </Pressable>

      <View style={[styles.greaterThan3, styles.greaterLayout]}>
        <Text style={[styles.text2, styles.textPosition]}>{`>`}</Text>
      </View>
      <View style={[styles.greaterThan4, styles.greaterPosition]}>
        <Text style={[styles.text2, styles.textPosition]}>{`>`}</Text>
      </View>
      <View style={[styles.greaterThan5, styles.greaterLayout]}>
        <Text style={[styles.text2, styles.textPosition]}>{`>`}</Text>
      </View>
      <Pressable
        style={[styles.community, styles.greaterLayout]}
        onPress={() => navigation.navigate("CommunityPage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/community.png")}
        />
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    overflow: "hidden",
    width: "100%",
  },
  settingPosition: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "1.72%",
    position: "absolute",
    overflow: "hidden",
  },
  text1Typo: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  joinUsTypo: {
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    position: "absolute",
  },
  downIconLayout: {
    height: 50,
    width: 430,
    left: 0,
    position: "absolute",
  },
  greaterLayout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  iconLayout: {
    height: 35,
    width: 35,
    position: "absolute",
  },
  greaterPosition: {
    left: 384,
    height: 25,
    width: 25,
    position: "absolute",
  },
  textPosition: {
    left: "0%",
    top: "0%",
    textAlign: "left",
    position: "absolute",
  },
  singleIconLayout: {
    width: 350,
    maxHeight: "100%",
    position: "absolute",
  },
  contactTypo: {
    left: 93,
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  settingPageChild: {
    backgroundColor: Color.colorGray_200,
    height: 832,
    top: 0,
    left: 0,
  },
  settingPageItem: {
    backgroundColor: Color.sriEshwar,
    height: 149,
    top: 0,
    left: 0,
  },
  text: {
    top: "1.29%",
    left: "86.28%",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  batteryIcon: {
    height: "1.59%",
    width: "5.91%",
    right: "15.28%",
  },
  wifiIcon: {
    height: "1.59%",
    width: "5.91%",
    left: "75.58%",
  },
  time: {
    top: "1.72%",
    left: "42.44%",
    position: "absolute",
  },
  text1: {
    fontFamily: FontFamily.robotoBold,
  },
  settings: {
    top: 69,
    left: 138,
    fontSize: FontSize.size_4xl,
    color: Color.colorWhite,
  },
  downBarIcon: {
    top: 782,
  },
  settingPageInner: {
    top: 162,
    height: 652,
    backgroundColor: Color.colorWhite,
  },
  onAndOffIcon: {
    top: 196,
    left: 28,
    width: 41,
    height: 25,
    position: "absolute",
  },
  darkMode: {
    top: 194,
    left: 93,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  modeIcon: {
    top: 195,
    left: 384,
  },
  rectangleView: {
    top: 231,
    height: 2,
    backgroundColor: Color.gainsboro_200,
  },
  privacyPolicy: {
    top: 253,
    left: 93,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  aboutApp: {
    top: 312,
    left: 93,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  privacyIcon: {
    top: 253,
    left: 28,
  },
  greaterThan: {
    top: 253,
  },
  singleLineIcon: {
    top: 292,
    left: 29,
    height: 1,
  },
  bookIcon: {
    top: 312,
    left: 28,
  },
  termsOfUse: {
    top: 370,
    left: 93,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  singleLineIcon1: {
    top: 351,
    left: 29,
    height: 1,
  },
  greaterThan1: {
    top: 370,
    left: 384,
  },
  starIcon: {
    top: 430,
    left: 28,
  },
  giveUs5: {
    top: 428,
    left: 93,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  singleLineIcon2: {
    top: 409,
    left: 29,
    height: 1,
  },
  greaterThan2: {
    top: 428,
  },
  feedbackIcon: {
    top: 548,
    left: 28,
  },
  emailIcon: {
    top: 608,
    left: 28,
  },
  contact: {
    top: 606,
  },
  callIcon: {
    top: 666,
    left: 28,
    width: 41,
    height: 25,
    position: "absolute",
  },
  singleLineIcon3: {
    top: 587,
    left: 29,
    height: 1,
  },
  singleLineIcon4: {
    top: 647,
    left: 29,
    height: 1,
  },
  feedback: {
    top: 547,
  },
  joinUs: {
    top: 487,
    left: 93,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  greaterThan3: {
    top: 487,
  },
  greaterThan4: {
    top: 606,
  },
  greaterThan5: {
    top: 666,
  },
  community: {
    top: 726,
    left: 28,
  },
  icon: {
    height: 41,
    width: 41,
  },
  normalDownBarIcon: {
    top: 782,
  },
  settingPage: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    height: 832,
    overflow: "hidden",
    width: "100%",
  },
});

export default SettingPage;
