import * as React from "react";
import { StyleSheet, View, Text, Pressable,Linking, Image } from "react-native"; // Import Image component
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const SettingPage = () => {
  const navigation = useNavigation();
const toggleDarkMode = () => {
  // Implement your dark mode toggle logic here
  console.log("Dark mode toggled");
};
const road = () => {
  Linking.openURL("https://roadmap.sh");
};

  return (
    <View style={[styles.settingPage, styles.iconLayout2]}>
      <View style={[styles.settingPageChild, styles.settingPosition]} />
      <View style={[styles.settingPageItem, styles.settingPosition]} />
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
      <Text style={[styles.privacyPolicy, styles.joinUsTypo]}>
        Privacy Policy
      </Text>
      <Text style={[styles.aboutApp, styles.joinUsTypo]}>About App</Text>

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
      <Text style={[styles.termsOfUse, styles.joinUsTypo]}>Terms of Use</Text>
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
      <Text style={[styles.giveUs5, styles.joinUsTypo]}>Give us 5 Star</Text>
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
      <Text style={[styles.contact, styles.contactTypo]}>Contact</Text>
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
      <Text style={[styles.feedback, styles.contactTypo]}>{`Feedback
`}</Text>
      <Text style={[styles.joinUs, styles.joinUsTypo]}>Join us</Text>
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
        onPress={() => navigation.navigate("CommunityPade")}
      >
        {/* New: Roadmap image */}
        <Image
          style={styles.roadmap} // Apply the styles for the roadmap image
          contentFit="cover"
          source={require("../assets/roadmap.png")} // Provide the image source
        />
        {/* Community icon */}
        <Image
          style={[styles.icon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/community.png")}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("PrivacyPolicy")}>
        <Image
          style={[styles.privacyIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/privacy.png")}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("TermsOfUseScreen")}>
        <Image
          style={[styles.bookIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/book.png")}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("ContactScreen")}>
        <Image
          style={[styles.callIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/call.png")}
        />
        
      </Pressable>
      <Pressable onPress={() => navigation.navigate("FeedbackScreen")}>
        <Image
          style={[styles.feedbackIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/feedback.png")}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("GiveUs5StarScreen")}>
        <Image
          style={[styles.starIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
      </Pressable>
      <Pressable onPress={road} style={[styles.starIcon, styles.suggestionChildLayout2]}>
            <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/roadmap.png")} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Suggestion")}>
        <Image
          style={[styles.peopleIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/people.png")}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("MainPage1")}>
        <Image
          style={[styles.homeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/home.png")}
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
  joinUsTypo: {
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    position: "absolute",
  },
  downIconLayout: {
    height: 20,
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
  settings: {
    top: 92,
    fontSize: 35,
    color: Color.colorWhite,
    left: 20,
  },
  downBarIcon: {
    top: 832,
  },
  settingPageInner: {
    top: 149,
    height: 67,
    backgroundColor: Color.colorWhite,
  },
  onAndOffIcon: {
    top: 166,
    left: 334,
    width: 52,
    height: 41,
    position: "absolute",
  },
  darkMode: {
    top: 177,
    left: 78,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  modeIcon: {
    top: 174,
    left: 20,
  },
  rectangleView: {
    top: 224,
    height: 608,
    backgroundColor: Color.colorWhite,
  },
  privacyPolicy: {
    top: 321,
    left: 83,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  aboutApp: {
    top: 238,
    left: 15,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  privacyIcon: {
    top: 314,
    left: 19,
  },
  text2: {
    height: "80%",
    width: "80%",
    fontSize: FontSize.size_6xl,
    fontWeight: "300",
    fontFamily: FontFamily.josefinSansLight,
    color: Color.siment,
  },
  greaterThan: {
    top: 323,
  },
  singleLineIcon: {
    top: 382,
    left: 58,
    width: 350,
  },
  bookIcon: {
    top: 413,
    left: 20,
  },
  termsOfUse: {
    top: 421,
    left: 86,
    width: 117,
    height: 23,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  singleLineIcon1: {
    top: 475,
    left: 59,
  },
  greaterThan1: {
    top: 418,
    left: 386,
  },
  starIcon: {
    top: 827,
    left: 180,
  },
  starIcon1: {
    top: 747,
    left: 20,
  },
  peopleIcon: {
    top: 827,
    left: 100,
    
  },
  homeIcon: {
    top:825,
    left:25,
  },
  giveUs5: {
    top: 752,
    left: 100,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  singleLineIcon2: {
    top: 562,
    left: 58,
    width: 350,
  },
  greaterThan2: {
    top: 504,
  },
  feedbackIcon: {
    top: 583,
    left: 19,
  },
  emailIcon: {
    top: 668,
    left: 20,
  },
  contact: {
    top: 504,
  },
  callIcon: {
    top: 492,
    width: 39,
    height: 38,
    left: 19,
    position: "absolute",
  },
  singleLineIcon3: {
    top: 648,
    left: 58,
    width: 350,
  },
  singleLineIcon4: {
    top: 728,
    left: 54,
  },
  feedback: {
    top: 596,
  },
  joinUs: {
    top: 679,
    left: 99,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  greaterThan3: {
    top: 587,
    left: 385,
  },
  greaterThan4: {
    top: 676,
  },
  greaterThan5: {
    top: 744,
    left: 383,
  },
  icon: {
    height: "100%",
  },
  community: {
    left: 356,
    top: 832,
  },
  roadmap: {
    position: "absolute",
    left: 40,
    top: 797,
    width: 25,
    height: 25,
  },

  settingPage: {
    flex: 1,
    height: 912,
    backgroundColor: Color.colorWhite,
  },
});

export default SettingPage;


