import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View,Linking, Pressable,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SideBar = () => {
  const navigation = useNavigation();
  const gmails = () => {
    const email = "anwarraja70884580@gmail.com"; // Replace with your email address
    const subject = encodeURIComponent("Subject Text"); // Replace with the desired subject
    const body = encodeURIComponent("Body Text"); // Replace with the desired body text
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    Linking.openURL(mailtoUrl);
  };
  const contact = () => {
    Linking.openURL("https://copper-ebony-32.tiiny.site/");
  };
  const whatsapp = () => {
    Linking.openURL("https://web.whatsapp.com/");
  };
  const facebook = () => {
    Linking.openURL("https://www.facebook.com/");
  };
  

  return (
    <View style={styles.sideBar}>
      <View style={styles.mainPage}>
        <View style={[styles.mainPage1, styles.mainPage1Position]}>

          <Image
            style={[styles.downBarIcon, styles.downIconLayout]}
            contentFit="cover"
            source={require("../assets/down-bar1.png")}
          />
          <View style={styles.mainPageChild} />
          <Pressable
            style={[styles.wrapper, styles.searchLayout]}
            onPress={() => navigation.navigate("Favourtie")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-181.png")}
            />
          </Pressable>
          <Pressable
            style={styles.sideBar1}
            onPress={() => navigation.navigate("SideBar")}
          >
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../assets/side-bar1.png")}
            />
          </Pressable>

          <View style={[styles.search, styles.searchLayout]}>
            <View style={[styles.searchChild, styles.textPosition]} />
            <Text style={[styles.search1, styles.textTypo]}>Search</Text>
            <Pressable
              style={styles.vector}
              onPress={() => navigation.navigate("SearchBar")}
            >
              <Image
                style={[styles.icon2, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector8.png")}
              />
            </Pressable>
          </View>
          <Pressable
            style={styles.troley}
            onPress={() => navigation.navigate("TrolleyPage")}
          >
            <Image
              style={[styles.icon2, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/troley1.png")}
            />
          </Pressable>
          <View style={styles.mainPageItem} />
          <Text style={[styles.javaHasBuiltIn, styles.itProvidesATypo]}>
            Java has built-in support for multithreaded programming, allowing
            developers to create highly interactive and responsive applications.
          </Text>
          <Pressable
            style={[styles.heart, styles.heartLayout]}
            onPress={() => navigation.navigate("Favourtie")}
          >
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../assets/heart1.png")}
            />
          </Pressable>
          <Image
            style={styles.mainPageInner}
            contentFit="cover"
            source={require("../assets/rectangle-211.png")}
          />
          <View style={[styles.rectangleView, styles.searchLayout]} />
          <Image
            style={[styles.heartIcon, styles.heartLayout]}
            contentFit="cover"
            source={require("../assets/heart1.png")}
          />
          <Pressable
            style={[styles.community, styles.communityLayout]}
            onPress={() => navigation.navigate("CommunityPade")}
          >
            <Image
              style={[styles.icon5, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/community1.png")}
            />
          </Pressable>
        </View>
        <Text style={[styles.itProvidesA, styles.itProvidesATypo]}>
          It provides a means to manage large amounts of data for a variety of
          uses, such as quick search, insertion, deletion, and retrieval. Common
          data structures include arrays, linked lists, stacks, queues, trees,
          and graphs
        </Text>
      </View>
      <View style={[styles.sideBarChild, styles.sidePosition]} />
      <Text style={[styles.contact, styles.joinUsTypo]}>Gmail</Text>
      <Text style={[styles.joinUs, styles.joinUsTypo]}>Contact us</Text>
      <Text style={[styles.whatsapp, styles.joinUsTypo]}>whatsapp</Text>
      <Pressable
        style={styles.sideBarItem}
        onPress={() => navigation.navigate("MainPage")}
      />
      <Pressable
        style={[styles.sideBarInner, styles.sidePosition]}
        onPress={() => navigation.navigate("MainPage")}
      />

      <View style={[styles.vectorParent, styles.vectorParentLayout]}>
        <Image
          style={[styles.instanceChild, styles.vectorParentLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Image
          style={[styles.eshwariteHubIcon, styles.timeLayout]}
          contentFit="cover"
          source={require("../assets/eshwarite-hub.png")}
        />
        <Text
          style={[styles.leadershipExcellence, styles.textTypo]}
        >{`Leadership & Excellence`}</Text>
      </View>
      <Pressable
            style={styles.emailIcon}
            onPress={gmails}
          >
            <Image
              style={styles.iconPosition}
              contentFit="cover"
              source={require("../assets/gmail.png")}
            />
      </Pressable>
        <Pressable
            style={styles.linkIcon}
            onPress={contact}
          >
            <Image
              style={styles.iconPosition}
              contentFit="cover"
              source={require("../assets/link1.png")}
            />
          </Pressable>
          <Image
        style={[styles.whatsappIcon, styles.communityLayout]}
        contentFit="cover"
        source={require("../assets/whatsapp1.png")}
      />
          <Pressable
            style={styles.facebookIcon}
            onPress={facebook}
          >
            <Image
              style={styles.iconPosition}
              contentFit="cover"
              source={require("../assets/face.png")}
            />
          </Pressable>


      <Text style={[styles.facebook, styles.joinUsTypo]}>facebook</Text>
      <Image
        style={[styles.lineIcon, styles.sidePosition]}
        contentFit="cover"
        source={require("../assets/line-8.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainPage1Position: {
    bottom: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  downIconLayout: {
    height: 30,
    width: 430,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },

  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  searchLayout: {
    width: 400,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  textPosition: {
    left: "0%",
    top: "0%",
  },
  itProvidesATypo: {
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  heartLayout: {
    height: 22,
    width: 22,
    position: "absolute",
  },
  communityLayout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  sidePosition: {
    width: 295,
    height:850,
    left: 0,
    position: "absolute",
  },
  joinUsTypo: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    position: "absolute",
  },
  vectorParentLayout: {
    height: 100,
    position: "absolute",
  },
  iconPosition: {
    left: 26,
    height: 25,
    width: 26,
    position: "absolute",
    overflow: "hidden",
  },
  normalDownBarIcon: {
    top: 872,
  },
  downBarIcon: {
    top: 824,
  },
  mainPageChild: {
    top: 2,
    backgroundColor: Color.colorGray_500,
    height: 834,
    width: 430,
    left: 0,
    position: "absolute",
  },
  batteryIcon: {
    height: "1.59%",
    width: "5.92%",
    right: "16.18%",
    bottom: "97.12%",
    left: "77.9%",
    top: "1.29%",
    maxWidth: "100%",
    position: "absolute",
  },
  wifiIcon: {
    height: "1.41%",
    width: "4.66%",
    right: "23.24%",
    bottom: "97.31%",
    left: "72.1%",
    top: "1.29%",
    maxWidth: "100%",
    position: "absolute",
  },
  text: {
    width: "147.96%",
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_xl,
    left: "0%",
    top: "0%",
  },
  time: {
    top: 12,
    width: 108,
    left: 15,
  },
  text1: {
    height: "2.36%",
    width: "11.17%",
    top: "0.86%",
    left: "84.9%",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
  },
  icon: {
    borderRadius: Border.br_8xs,
  },
  wrapper: {
    top: 184,
    height: 224,
    left: 12,
    width: 400,
  },
  sideBar1: {
    left: 30,
    top: 64,
    width: 15,
    height: 8,
    position: "absolute",
  },
  searchChild: {
    right: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_600,
    borderStyle: "solid",
    borderColor: Color.colorGray_700,
    borderWidth: 1,
    bottom: "0%",
    height: "100%",
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
  icon2: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "92.5%",
    top: "36.84%",
    right: "3.75%",
    bottom: "36.84%",
    width: "3.75%",
    height: "26.32%",
    position: "absolute",
  },
  search: {
    top: 107,
    height: 57,
    left: 15,
  },
  troley: {
    left: "88.14%",
    top: "6.33%",
    right: "7.44%",
    bottom: "91.63%",
    width: "4.43%",
    height: "2.04%",
    position: "absolute",
  },
  mainPageItem: {
    top: 424,
    left: 10,
    height: 98,
    width: 398,
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  javaHasBuiltIn: {
    top: 438,
    left: 29,
    width: 398,
  },
  heart: {
    left: 364,
    top: 482,
  },
  mainPageInner: {
    top: 538,
    width: 393,
    height: 150,
    borderRadius: Border.br_8xs,
    left: 15,
    position: "absolute",
  },
  rectangleView: {
    top: 709,
    height: 104,
    borderRadius: Border.br_8xs,
    left: 12,
    width: 400,
    backgroundColor: Color.colorWhite,
  },
  heartIcon: {
    top: 784,
    left: 360,
  },
  icon5: {
    overflow: "hidden",
  },
  community: {
    left: 367,
    top: 827,
  },
  mainPage1: {
    right: "-2.1%",
    left: "2.1%",
    top: "0%",
    bottom: "0%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  itProvidesA: {
    height: "8.58%",
    width: "89.53%",
    top: "76.93%",
    left: "8.83%",
  },
  mainPage: {
    left: -16,
    width: 429,
    top: 0,
    position: "absolute",
    height: 932,
  },
  sideBarChild: {
    height: 834,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  contact: {
    top: 295,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_300,
    left: 75,
  },
  joinUs: {
    top: 350,
    left: 78,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_300,
  },
  whatsapp: {
    top: 408,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_300,
    left: 75,
  },
  sideBarItem: {
    left: 294,
    backgroundColor: Color.colorGray_200,
    width: 136,
    height: 834,
    top: 0,
    position: "absolute",
  },
  sideBarInner: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: "rgba(0, 0, 0, 0.02)",
    height: 231,
    top: 0,
  },
  text2: {
    width: "37.17%",
    top: "1.61%",
    left: "5.58%",
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_xl,
  },
  instanceChild: {
    left: 156,
    width: 97,
    top: 0,
  },
  eshwariteHubIcon: {
    top: 5,
    width: 239,
    left: 0,
    height: 45,
  },
  leadershipExcellence: {
    top: 50,
    left: 116,
    fontSize: FontSize.size_3xs,
    color: Color.sriEshwar,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
  },
  vectorParent: {
    top: 93,
    left: 9,
    width: 253,
  },
  emailIcon: {
    top: 289,
  },
  linkIcon: {
    top: 346,
  },
  whatsappIcon: {
    top: 403,
    left: 25,
    overflow: "hidden",
  },
  facebookIcon: {
    top: 468,
  },
  facebook: {
    top: 469,
    left: 77,
    color: Color.colorGray_300,
    fontSize: FontSize.size_base,
  },
  lineIcon: {
    top: 529,
    height: 3,
  },
  sideBar: {
    flex: 1,
    overflow: "hidden",
    height: 932,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default SideBar;
