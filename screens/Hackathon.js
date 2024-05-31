import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Hackathon = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.hackathon}>
      <Text style={[styles.text, styles.textFlexBox]}>12:00</Text>
      <Image
        style={[styles.wifiIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <Image
        style={[styles.batteryIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/battery4.png")}
      />
      <Text style={[styles.text1, styles.textFlexBox]}>100 %</Text>
      <Image
        style={[styles.normalDownBarIcon, styles.downIconLayout]}
        contentFit="cover"
        source={require("../assets/normal-down-bar.png")}
      />
      <Image
        style={[styles.downBarIcon, styles.downIconLayout]}
        contentFit="cover"
        source={require("../assets/down-bar6.png")}
      />
      <Image
        style={[styles.hackathonChild, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Text style={[styles.aHackathonA, styles.textFlexBox]}>
        A hackathon, a blend of "hack" and "marathon," is a collaborative event
        where programmers, designers, and other tech enthusiasts come together
        to solve problems, build innovative solutions, or create new software
        and hardware projects within a limited time frame, typically ranging
        from 24 to 48 hours. Participants form teams to brainstorm ideas,
        develop prototypes, and present their projects to a panel of judges.
        Hackathons foster a highly creative and competitive environment,
        encouraging rapid learning, teamwork, and the application of diverse
        skills. They often focus on specific themes or challenges, such as
        healthcare, education, or sustainability, and provide a platform for
        networking, skill development, and potential career opportunities. Many
        companies and organizations sponsor hackathons to drive innovation,
        discover new talent, and develop cutting-edge technologies.
      </Text>
      <Pressable
        style={styles.community}
        onPress={() => navigation.navigate("CommunityPade")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/community2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  downIconLayout: {
    height: "5.36%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  text: {
    width: "37.16%",
    top: "1.93%",
    left: "5.81%",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.itimRegular,
    textAlign: "left",
    color: Color.colorBlack,
  },
  wifiIcon: {
    height: "1.41%",
    width: "4.65%",
    right: "23.49%",
    bottom: "96.34%",
    left: "71.86%",
    top: "2.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  batteryIcon: {
    height: "1.59%",
    width: "5.91%",
    right: "16.19%",
    bottom: "96.16%",
    left: "77.91%",
    top: "2.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  text1: {
    top: "1.82%",
    left: "85.12%",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.itimRegular,
    textAlign: "left",
    color: Color.colorBlack,
  },
  normalDownBarIcon: {
    top: "94.64%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  downBarIcon: {
    top: "89.27%",
    right: "0.23%",
    bottom: "5.36%",
    left: "-0.23%",
  },
  hackathonChild: {
    height: "31.01%",
    width: "93.49%",
    top: "8.15%",
    right: "3.72%",
    bottom: "60.84%",
    left: "2.79%",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  aHackathonA: {
    height: "47.53%",
    width: "86.51%",
    top: "41.74%",
    left: "6.28%",
    fontSize: 19,
    fontFamily: FontFamily.josefinSansRegular,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  community: {
    left: "84.88%",
    top: "90.88%",
    right: "9.3%",
    bottom: "6.44%",
    width: "5.81%",
    height: "2.68%",
    position: "absolute",
  },
  hackathon: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Hackathon;
