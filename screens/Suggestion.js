import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View,Linking, Pressable,TouchableOpacity ,ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Suggestion = () => {
  const navigation = useNavigation();
  const handleRoadmapRedirect = () => {
    Linking.openURL("https://roadmap.sh");
  };

  const more = () => {
    Linking.openURL("https://www.knowafest.com/explore/category/Workshops_in_Tamil_Nadu");
  };
  const free = () => {
    Linking.openURL("https://www.freecodecamp.org/");
  };
  const infosys = () => {
    Linking.openURL("https://infyspringboard.onwingspan.com/web/en/login");
  };
  const microsoft = () => {
    Linking.openURL("https://learn.microsoft.com/en-us/training/");
  };
  const coursera = () => {
    Linking.openURL("https://www.coursera.org/");
  };
  const udemy = () => {
    Linking.openURL("https://www.udemy.com/");
  };
  const edx = () => {
    Linking.openURL("https://www.edx.org/");
  };
  const linkedin = () => {
    Linking.openURL("https://www.linkedin.com/learning/");
  };
  const great = () => {
    Linking.openURL("https://www.mygreatlearning.com/");
  };
  const nit = () => {
    Linking.openURL("https://www.knowafest.com/explore/events/2024/05/1001-energaia-24-nit-tiruchirappalli-technical-symposium");
  };
  const psg1 = () => {
    Linking.openURL("https://www.knowafest.com/explore/events/2024/05/2503-two-day-workshop-advanced-can-fd-technology-enhanced-automotive-communication-innovation-2024-psg-college-coimbatore");
  };
  const psg2 = () => {
    Linking.openURL("https://www.knowafest.com/explore/events/2024/04/3002-two-days-workshop-futuristics-challenges-technologies-uav-s-sustainable-environment-2024-psg-college-technology-coimbatore");
  };


  



  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.suggestion}>
        <Image
          style={[styles.downBarIcon, styles.downIconLayout]}
          contentFit="cover"
          source={require("../assets/down-bar4.png")}
        />
        <View style={styles.suggestionChild} />
        <Text style={[styles.hackathon, styles.hackathonTypo]}>Hackathon</Text>
        <Text style={[styles.topics, styles.hackathonTypo]}>Hackathon and Online Courses</Text>
        <Text style={[styles.language, styles.hackathonTypo]}>Online courses platform</Text>
        <ScrollView horizontal style={styles.horizontalScrollView}>
          <View style={[styles.suggestionItem, styles.suggestionLayout]} />
          <View style={[styles.suggestionInner, styles.suggestionLayout]} />
          <Text style={styles.dataScienceIs}>Infosys Springboard is unlocking the doors to world-class digital education and democratizing learning for the leaders of tomorrow.</Text>
          <View style={[styles.rectangleView, styles.suggestionLayout]} />
          <Text style={[styles.businessAnalysisIs, styles.pythonIsATypo]}>Microsoft Learn, at is the easiest way to learn products and services through task-based, interactive learning.</Text>
          <Pressable onPress={more} style={[styles.rightimage, styles.suggestionChildLayout2]}>
            <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/right.png")} />
          </Pressable>
          <Pressable onPress={free} style={[styles.rectangleIcon, styles.suggestionChildLayout2]}>
            <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/free.png")} />
          </Pressable>
          <Pressable onPress={infosys} style={[styles.suggestionChild1, styles.suggestionChildLayout2]}>
            <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/infosys.png")} />
          </Pressable>
          <Pressable onPress={microsoft} style={[styles.suggestionChild2, styles.suggestionChildLayout2]}>
            <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/microsoftlearn.png")} />
          </Pressable>
          <Pressable onPress={coursera} style={[styles.courseraIcon, styles.suggestionChildLayout2]}>
            <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/coursera.png")} />
          </Pressable>
          <Pressable onPress={udemy} style={[styles.udemyIcon, styles.suggestionChildLayout2]}>
            <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/udemy.png")} />
          </Pressable>
          <Pressable onPress={edx} style={[styles.edxIcon, styles.suggestionChildLayout2]}>
            <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/edx.png")} />
          </Pressable>
          <Pressable onPress={linkedin} style={[styles.linkedinIcon, styles.suggestionChildLayout2]}>
            <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/linkedin.png")} />
          </Pressable>
          <Pressable onPress={great} style={[styles.greatIcon, styles.suggestionChildLayout2]}>
            <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/great.png")} />
          </Pressable>
          <Pressable onPress={great} style={[styles.greatIcon, styles.suggestionChildLayout2]}>
            <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/great.png")} />
          </Pressable>
          <Pressable onPress={nit} style={[styles.nitImage, styles.suggestionChildLayout2]}>
            <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/nit.png")} />
          </Pressable>
          <Pressable onPress={psg1} style={[styles.psgImage1, styles.suggestionChildLayout2]}>
            <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/psg.png")} />
          </Pressable>
          <Pressable onPress={psg2} style={[styles.psgImage2, styles.suggestionChildLayout2]}>
            <Image style={styles.iconLayout} contentFit="cover" source={require("../assets/psg.png")} />
          </Pressable>

          <Text style={[styles.courseraText, styles.pythonIsATypo]}>Coursera is an online learning platform featuring courses, degrees, certificate programs, and tutorials in a wide range of subjects.</Text>
          <Text style={[styles.udemyText, styles.pythonIsATypo]}>Udemy is an online learning platform that offers both paid and free courses to students around the world.</Text>
          <Text style={[styles.edxText, styles.pythonIsATypo]}>edX is a massive open online course (MOOC) provider.</Text>
          <Text style={[styles.linkedinText, styles.pythonIsATypo]}>LinkedIn is a business and employment-oriented online service that operates via websites and mobile apps.</Text>
          <Text style={[styles.pythonIsA, styles.pythonIsATypo]}>freeCodeCamp is a non-profit educational organization that consists of an interactive learning web platform,accessible to anyone.</Text>
          <Text style={[styles.greatText, styles.pythonIsATypo]}>Great Learning is an ed-tech company offering comprehensive training and educational programs to equip learners with the necessary  skills </Text>
          <Text style={styles.nitText}>
          DATE          : 13 May 2024{'\n'}
          FESTNAME : Energaia 2024{'\n'}

          COLLEGE   : NIT Tiruchirappalli{'\n'}
          CITY           : Tiruchirappalli
        </Text>
        <Text style={styles.righttext}>
          {"\n"}CLICK TO{"\n"}VIEW MORE
        </Text>
        <Text style={styles.psgText1}>
          DATE           : 12 JULY 2024{'\n'}
          FEST NAME : Automotive Communication {"\n"}                     and Innovation 2024{'\n'}
          COLLEGE    : PSG College of Technology{'\n'}
          CITY            : Coimbatore{'\n'}
        </Text>
        <Text style={styles.psgText2}>
          DATE           : 26 JULY 2024{'\n'}
          FEST NAME : Futuristics Challenges and Technologies{'\n'}                    UAV'S for Sustainable Environment 2024{'\n'}
          COLLEGE    : PSG College of Technology{'\n'}
          CITY            : Coimbatore{'\n'}
        </Text>
        </ScrollView>
        <Pressable style={styles.wrapper} onPress={() => navigation.navigate("Hackathon")} >
          <Image style={[styles.icon, styles.iconLayout]} contentFit="cover" source={require("../assets/rectangle-42.png")} />
        </Pressable>

        <Text style={[styles.workshop, styles.hackathonTypo]}>Workshop</Text>

        <ScrollView horizontal style={styles.horizontalWorkshopScroll}>
          <View style={[styles.suggestionChild3, styles.suggestionChildLayout1]}>
            <Image style={[styles.suggestionChild5, styles.suggestionChildLayout]} contentFit="cover" source={require("../assets/rectangle-38.png")} />
            <Text style={[styles.theWorkshopStarts, styles.workshopTypo]}>The workshop starts with an introduction by the facilitator, who is often an experienced programmer or software developer.</Text>

            <Image style={[styles.nitImage, styles.suggestionChildLayout]} contentFit="cover" source={require("../assets/nit.png")} />
          </View>
          <View style={[styles.suggestionChild4, styles.suggestionChildLayout1]}>
            <Image style={[styles.suggestionChild6, styles.suggestionChildLayout]} contentFit="cover" source={require("../assets/rectangle-39.png")} />
            

          </View>
        </ScrollView>
        <Image style={styles.topicsLineIcon} contentFit="cover" source={require("../assets/topics-line.png")} />
        <View style={styles.suggestionChild7} />
        
        <Text style={[styles.aHackathonIs, styles.hackathonTypo]}>A hackathon is an event where programmers, developers, designers, and other tech enthusiasts come together to collaborate intensively on software projects. These events can last anywhere from a day to a week and are often aimed at creating functioning software solutions to specific challenges or problems.</Text>

        <Pressable style={styles.wrapper} onPress={() => navigation.navigate("Hackathon")} >
          <Image style={[styles.icon, styles.iconLayout]} contentFit="cover" source={require("../assets/rectangle-42.png")} />
        </Pressable>

        <Pressable style={styles.community} onPress={() => navigation.navigate("CommunityPade")} >
          <Image style={[styles.icon1, styles.iconLayout]} contentFit="cover" source={require("../assets/community.png")} />
        </Pressable>
        <TouchableOpacity style={styles.roadmap} onPress={handleRoadmapRedirect}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/roadmap.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settings} onPress={() => navigation.navigate("SettingPage")}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/setting.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.home} onPress={() => navigation.navigate("MainPage1")}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 89,
  },

  downIconLayout: {
    height: 30,
    width: 430,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  roadmap: {
    left: 185,
    top: 895,
    width: 25,
    height: 25,
    position: "absolute",
  },
  hackathonTypo: {
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  settings: {
    left: 275,
    top: 895,
    width: 24,
    height: 25,
    position: "absolute",
  },
  home: {
    left: 32,
    top: 894,
    width: 27,
    height: 27,
    position: "absolute",
  },
  suggestionLayout: {
    flexDirection: "row",
    height: 420,
    width: 415,
    top: 98,
    left:3,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    justifyContent: "space-between", // Align suggestion layout left and right
    alignItems: "center", // Align items vertically
    paddingHorizontal: 20, // Add horizontal padding
  },
  pythonIsATypo: {
    top: 210,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  suggestionChildLayout2: {
    height: 100,
    width: 100,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  suggestionChildLayout1: {
    height: 177,
    top: 341,
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  suggestionChildLayout: {
    height: 97,
    top: 363,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  nitText: {
    // Adjust the positioning properties as needed
    top: 450, // Example top position (adjust this value to move the text up or down)
    left: 20, // Example left position
    fontSize: FontSize.size_8xs,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  righttext:{
    top:460,
    left:1120,
    fontSize:FontSize.size_8xs,
    fontFamily:FontFamily.josefinSansRegular,
    textAlign:"left",
    color: Color.colorSkyblue,
    position: "absolute",

  },
  psgText1: {
    // Adjust the positioning properties as needed
    top: 440, // Example top position (adjust this value to move the text up or down)
    left:330, // Example left position
    fontSize: FontSize.size_8xs,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  psgText2: {
    // Adjust the positioning properties as needed
    top: 440, // Example top position (adjust this value to move the text up or down)
    left:730, // Example left position
    fontSize: FontSize.size_8xs,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },


 
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  downBarIcon: {
    top: 892,
    left: -1,
  },
  suggestionChild: {
    top: 81,
    backgroundColor: Color.colorGray_500,
    height: 892,
    width: 430,
    left: 0,
    position: "absolute",
  },
  hackathon: {
    top: 535,
    left: 24,
    fontSize: FontSize.size_lg,
  },
  topics: {
    top: 53,
    left: 26,
    fontSize: FontSize.size_xl,
  },
  language: {
    top: 88,
    left: 11,
    fontSize: FontSize.size_lg,
  },
  suggestionItem: {
    // Left alignment already set in suggestionLayout
    left:10,
  },
  suggestionInner: {
    // Left alignment already set in suggestionLayout
    
  },
  dataScienceIs: {
    top: 207,
    left: 170,
    width: 91,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleView: {
    // Left alignment already set in suggestionLayout
  },

  businessAnalysisIs: {
    top: 389, // Adjust the vertical position as needed
    left: 300, // Adjust the horizontal position as needed
    width: 104, // Adjust the width as needed
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  nitImage: {
    top: 330, // Adjust top position as needed
    left: 50, // Adjust left position as needed to align with other images
    height: 100, // Match the height of the "free.png" image
    width: 100, // Match the width of the "free.png" image
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  psgImage1: {
    top: 330, // Adjust top position as needed
    left: 380, // Adjust left position as needed to align with other images
    height: 80, // Match the height of the "free.png" image
    width: 80, // Match the width of the "free.png" image
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  suggestionBox: {
    width: '48%',
    marginBottom: 20,
    padding: 10,
    backgroundColor: Color.white,
    borderRadius: Border.radius,
    shadowColor: Color.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  psgImage2: {
    top: 330, // Adjust top position as needed
    left: 780, // Adjust left position as needed to align with other images
    height: 100, // Match the height of the "free.png" image
    width: 100, // Match the width of the "free.png" image
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  rightimage: {
    top: 330, // Adjust top position as needed
    left: 1140, // Adjust left position as needed to align with other images
    height: 50, // Match the height of the "free.png" image
    width: 50, // Match the width of the "free.png" image
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  rectangleIcon: {
    top: 110,
    left: 28,
  },
  suggestionChild1: {
    top: 111,
    left: 167,
  },
  suggestionChild2: {
    top: 113,
    left: 301,
  },
  // Add styles for the udemy.png image
  udemyIcon: {
    top: 113,
    left: 600,
    height: 100,
    width: 90,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  courseraIcon: {
    top: 115,
    left: 450,
    height: 100,
    width: 100,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  edxIcon: {
    top: 113,
    left: 750,
    height: 100,
    width: 90,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  linkedinIcon: {
    top: 113,
    left: 900,
    height: 100,
    width: 100,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  // Add styles for the great.png image
  greatIcon: {
    top: 113, // Adjust top position to align with linkedinIcon
    left: 1050, // Adjust left position to place it next to linkedinIcon
    height: 100,
    width: 100,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  courseraText: {
    top: 263,
    left: 450,
    width: 110,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  udemyText: {
    top: 243,
    left: 590,
    width: 125,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  edxText: {
    top: 263,
    left: 760,
    width: 100,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  linkedinText: {
    top: 243,
    left: 900,
    width: 110,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  pythonIsA: {
    width: 97,
    left: 26,
  },
  loveIcon: {
    left: 106,
    top: 282,
    height: 12,
    width: 12,
  },
  loveIcon1: {
    top: 283,
    left: 249,
  },
  loveIcon2: {
    left: 387,
    top: 282,
    height: 12,
    width: 12,
  },
  workshop: {
    top: 316,
    left: 23,
    fontSize: FontSize.size_lg,
  },
  suggestionChild3: {
    width: 184,
    left: 15,
    top:0,
  },
  suggestionChild4: {
    left: 195,
    width: 181,
  },
  suggestionChild5: {
    left: 33,
    width: 167,
  },
  suggestionChild6: {
    left: 223,
    width: 166,
  },
  theWorkshopStarts: {
    left: 30,
    width: 170,
  },
  aWorkshopIs: {
    left: 229,
    width: 183,
  },
  loveIcon3: {
    left: 178,
  },
  loveIcon4: {
    left: 375,
  },
  topicsLineIcon: {
    top: 50,
    height: 20,
    left: 19,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  suggestionChild7: {
    top: 564,
    left: 14,
    width: 401,
    height: 247,
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  aHackathonIs: {
    top: 733,
    left: 25,
    fontSize: 12,
    width: 375,
  },
  icon: {
    borderRadius: Border.br_8xs,
  },
  wrapper: {
    top: 584,
    width: 368,
    height: 145,
    left: 20,
    position: "absolute",
  },
  loveIcon5: {
    top: 799,
    left: 382,
  },
  icon1: {
    overflow: "hidden",
  },
  community: {
    left: 360,
    top: 895,
    width: 25,
    height: 25,
    position: "absolute",
  },
  suggestion: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  horizontalScrollView: {
    height: 175,
    marginVertical: 20,
  },
  // Add style for the additional text
  greatText: {
    top: 223, // Adjust top position to align with other text
    left: 1060, // Adjust left position to align with the "great.png" image
    width: 130, // Adjust width based on your layout
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
});

export default Suggestion;


       
