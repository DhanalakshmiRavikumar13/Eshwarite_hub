import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook from React Navigation
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const CommunityPade = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handleQueryButtonPress = () => {
    Linking.openURL("https://lime-kim-39.tiiny.site");
  };

  // Function to handle redirection to suggestion.js
  const handleRedirect = () => {
    navigation.navigate("Suggestion"); // Navigate to the "Suggestion" screen
  };

  // Function to handle redirection to roadmap.sh
  const handleRoadmapRedirect = () => {
    Linking.openURL("https://roadmap.sh");
  };

  // Function to handle redirection to SettingPage.js
  const handleSettingRedirect = () => {
    navigation.navigate("SettingPage"); // Navigate to the "SettingPage" screen
  };

  return (
    <View style={styles.communityPade}>
      <Image
        style={[styles.downBarIcon, styles.downIconLayout]}
        contentFit="cover"
        source={require("../assets/down-bar7.png")}
      />
     
      <Text style={[styles.community, styles.communityTypo]}>Community</Text>
      <TouchableOpacity style={styles.peopleIcon} onPress={handleRedirect}>
        <Image
          style={styles.peopleIcon}
          contentFit="cover"
          source={require("../assets/people.png")}
        />
      </TouchableOpacity>
      {/* Wrap the roadmap image with TouchableOpacity */}
      <TouchableOpacity style={styles.roadmapIcon} onPress={handleRoadmapRedirect}>
        <Image
          style={styles.roadmapIcon}
          contentFit="cover"
          source={require("../assets/roadmap.png")}
        />
      </TouchableOpacity>
      {/* Wrap the setting image with TouchableOpacity */}
      <TouchableOpacity style={styles.settingIcon} onPress={handleSettingRedirect}>
        <Image
          style={styles.settingIcon}
          contentFit="cover"
          source={require("../assets/setting.png")}
        />
      </TouchableOpacity>
      <View style={[styles.communityPadeChild, styles.communityLayout]} />
      <TouchableOpacity style={styles.search} onPress={handleQueryButtonPress}>
        <View style={styles.searchChild} />
        <Text style={[styles.search1, styles.textTypo]}>Add your query</Text>
      </TouchableOpacity>
      <View style={[styles.communityPadeItem, styles.communityLayout]} />
      <Text
        style={[styles.whyDoWe, styles.whyDoWeTypo, { top: 160 }]}  
      >{`Why do we use array instead of other DS?
`}</Text>
      <Text style={[styles.asIWas, styles.asIWasTypo]}>
        As I was programming, I haven't seen an instance where an array is
        better for storing information than another form thereof. I had indeed
        figured the added "features" in programming languages had improved upon
        this and by that replaced them. I see now that they aren't replaced but
        rather given new life, so to speak.
      </Text>
      <Image
        style={[styles.heartIcon, styles.heartIconLayout]}
        contentFit="cover"
        source={require("../assets/heart2.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <Text style={[styles.comments, styles.commentsTypo]}>
        <Text style={styles.text2}>10</Text>
        <Text style={styles.comments1}> comments</Text>
      </Text>
      <View style={[styles.communityPadeInner, styles.communityLayout]} />
      <Text style={[styles.howDoWe, styles.whyDoWeTypo, { top: 340 }]}> 
        How do we control web page caching across all browser?
      </Text>
      <Text style={[styles.theSimplestIs, styles.asIWasTypo]}>
        The simplest is using: max-age=10 . This is not perfect because the page
        will be cached for 10 seconds. But it's the least "header spaghetti"
        solution out there. Also, this sometimes provides a big performance
        boost on dynamic websites who use reverse proxies. (Your slow php script
        will be called once every 10 seconds and will then be cached by the
        reverse proxy. once per 10 seconds is way better than once per visitor) 
      </Text>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={[styles.heartIcon1, styles.heartIconLayout]}
        contentFit="cover"
        source={require("../assets/heart3.png")}
      />
      <Text style={[styles.comments2, styles.commentsTypo]}>
        <Text style={styles.text2}>{`7 `}</Text>
        <Text style={styles.comments1}>comments</Text>
      </Text>
      <View style={[styles.rectangleView, styles.communityLayout]} />
      <Text style={[styles.whyWeLimited, styles.communityTypo, { top: 560 }]}>  
        Why we limited memory in Embedded System ?
      </Text>
      <Text
        style={styles.whatDoesHigh}
      >{`What does "high level languages like Rust&go" have to do with the question? How do those languages help avoid the need to large memories, and what would you use instead given the memory? Very few embedded systems are implemented using Rust or 
may see them referenced a great deal because they are new and people are figuring out how to apply them or earning money writing new books about them. The bulk of embedded development uses C or C++, and performance rather than memory usage is the primary reason.`}</Text>
      <Image
        style={[styles.heartIcon2, styles.heartIconLayout]}
        contentFit="cover"
        source={require("../assets/heart3.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <Text style={[styles.comments4, styles.commentsTypo]}>
        <Text style={styles.text2}>2</Text>
        <Text style={styles.comments1}> comments</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  downIconLayout: {
    height: 50,
    width: "100%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  communityTypo: {
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  communityLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  whyDoWeTypo: {
    fontFamily: FontFamily.josefinSansSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  asIWasTypo: {
    width: 373,
    color: Color.colorGray_400,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    position: "absolute",
  },
  heartIconLayout: {
    height: 25,
    width: 25,
    left: 280,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    height: 20,
    left: 314,
    width: 25,
    position: "absolute",
  },
  commentsTypo: {
    color: Color.siment,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    position: "absolute",
  },
  downBarIcon: {
    top: 810,
    left: 0, // Align to the left
  },
  normalDownBarIcon: {
    top: 872,
    left: 0, // Align to the left
  },
  community: {
    top: 35,
    left: 122,
    fontSize: 30,
  },
  searchChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_600,
    borderStyle: "solid",
    borderColor: Color.colorGray_700,
    borderWidth: 1,
    position: "absolute",
    width: "100%",
  },
  search1: {
    top: "29.82%",
    left: "6.75%",
    color: Color.colorGray_700,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_xl,
  },
  search: {
    top: 102,
    left: 10,
    width: 375,
    height: 57,
    position: "absolute",
  },
  communityPadeItem: {
    top: 181,
    left: 22,
    width: 392,
    height: 183,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
  },
  whyDoWe: {
    top: 170, // Adjust the top value here
    width: 328,
    height: 26,
    left: 18,
  },
  asIWas: {
    top: 190, // Adjust the top value here
    left: 18,
    height: 110,
  },
  heartIcon: {
    top: 302,
  },
  vectorIcon1: {
    top: 305,
  },
  text2: {
    fontSize: FontSize.size_mini,
  },
  comments1: {
    fontSize: FontSize.size_3xs,
  },
  comments: {
    top: 304,
    left: 343,
  },
  communityPadeInner: {
    top: 386,
    width: 380,
    height: 206,
    left: 2,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
  },
  howDoWe: {
    top: 380, // Adjust the top value here
    left: 18,
    width: 383,
    height: 34,
  },
  theSimplestIs: {
    top: 391, // Adjust the top value here
    left: 18,
    height: 116,
  },
  vectorIcon2: {
    top: 531,
  },
  heartIcon1: {
    top: 528,
  },
  comments2: {
    top: 530,
    left: 349,
  },
  rectangleView: {
    top: 606,
    width: 387,
    height: 210,
    left: 27,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
  },
  whyWeLimited: {
    top: 600, // Adjust the top value here
    left: 18,
    width: 369,
    height: 21,
    fontSize: FontSize.size_mini,
  },
  whatDoesHigh: {
    top: 590, // Adjust the top value here
    left: 18,
    width: 368,
    height: 181,
    color: Color.colorGray_400,
    fontSize: FontSize.size_mini,    
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    position: "absolute",
  },
  heartIcon2: {
    top: 766,
  },
  vectorIcon3: {
    top: 771,
  },
  comments4: {
    top: 774,
    left: 348,
  },
  peopleIcon: {
    top: 818, // Adjust the top value here
    left: 87, // Adjust the left value here
    width: 30, // Adjust the width valuehere
    height: 30, // Adjust the height value here
    position: "absolute",
    zIndex: 1, // Ensuring the image is clickable
  },
  roadmapIcon: {
    top: 820, // Adjust the top value here
    left: 185, // Adjust the left value here
    width: 30, // Adjust the width value here
    height: 30, // Adjust the height value here
    position: "absolute",
  },
  settingIcon: {
    top: 819, // Adjust the top value here
    left: 252, // Adjust the left value here
    width: 28, // Adjust the width value here
    height: 28, // Adjust the height value here
    position: "absolute",
  },
  communityPade: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default CommunityPade;

