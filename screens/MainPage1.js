import * as React from "react";
import { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TextInput, Pressable, TouchableOpacity, Linking, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MainPage1 = () => {
  const navigation = useNavigation();

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Function to handle redirection to roadmap.sh
  const handleRoadmapRedirect = () => {
    Linking.openURL("https://roadmap.sh");
  };

  // Function to fetch suggestions
  const fetchSuggestions = async (query) => {
    // Dummy implementation - replace with actual fetch logic
    const techSuggestions = [
      "JavaScript",
      "Java",
      "React Native",
      "Python",
      "Node.js",
      "Swift",
      "Kotlin",
    ];

    if (query.length > 0) {
      const filteredSuggestions = techSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle input change
  const handleInputChange = (text) => {
    setQuery(text);
    fetchSuggestions(text);
  };

  // Function to handle search action
  const handleSearch = () => {
    if (query) {
      Linking.openURL(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <View style={styles.mainPage}>
      <Image
        style={[styles.downBarIcon, styles.downIconLayout]}
        contentFit="cover"
        source={require("../assets/down-bar.png")}
      />
      <View style={styles.mainPageChild} />

      <Pressable
        style={[styles.wrapper, styles.searchLayout]}
        onPress={() => navigation.navigate("Favourtie")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-18.png")}
        />
      </Pressable>
      <Pressable
        style={styles.sideBar}
        onPress={() => navigation.navigate("SideBar")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/side-bar.png")}
        />
      </Pressable>
      <View style={[styles.search, styles.searchLayout]}>
        <View style={[styles.searchChild, styles.iconLayout]} />
        <TextInput
          style={[styles.searchInput, styles.textTypo]}
          placeholder="Search"
          placeholderTextColor={Color.colorGray_700}
          value={query}
          onChangeText={handleInputChange}
        />
        <Pressable
          style={styles.vector}
          onPress={handleSearch}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
        </Pressable>
        {suggestions.length > 0 && (
          <View style={styles.suggestionsContainer}>
            <FlatList
              data={suggestions}
              renderItem={({ item }) => (
                <Text style={styles.suggestionItem}>{item}</Text>
              )}
              keyExtractor={(item) => item}
            />
          </View>
        )}
      </View>
      <Pressable
        style={styles.troley}
        onPress={() => navigation.navigate("TrolleyPage")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/troley.png")}
        />
      </Pressable>
      <View style={[styles.mainPageItem, styles.mainPageItemLayout]} />
      <Text style={[styles.javaHasBuiltIn, styles.mainPageItemLayout]}>
        Java has built-in support for multithreaded programming, allowing
        developers to create highly interactive and responsive applications.
      </Text>
      <Text style={[styles.similarText, styles.mainPageInnerLayout]}>
        Computers revolutionized human civilization by becoming indispensable tools for communication, innovation, and productivity. From vast networks to personal devices, they encode our world's digital essence and
        drive advancements in various fields.
      </Text>
      <Pressable
        style={[styles.heart, styles.heartLayout]}
        onPress={() => navigation.navigate("Favourtie")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/heart.png")}
        />
      </Pressable>
      <Image
        style={styles.mainPageInner}
        contentFit="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <Image
        style={[styles.heartIcon, styles.heartLayout]}
        contentFit="cover"
        source={require("../assets/heart.png")}
      />
      <Pressable
        style={styles.community}
        onPress={() => navigation.navigate("CommunityPade")}
      >
        <Image
          style={[styles.icon5, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/community.png")}
        />
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
      <Pressable
        style={styles.people}
        onPress={() => navigation.navigate("Suggestion")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/people.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  downIconLayout: {
    height: 45,
    width: 430,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  searchLayout: {
    width: 376,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  textTypo: {
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  mainPageItemLayout: {
    width: 450,
    position: "absolute",
    top: 390,
    left: 10,
    right: 150,
  },
  heartLayout: {
    height: 22,
    width: 22,
    position: "absolute",
    top: 900,
  },
  downBarIcon: {
    top: 810,
  },
  mainPageChild: {
    top: 2,
    backgroundColor: Color.colorGray_500,
    height: 84,
    width: 430,
    left: 0,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_8xs,
  },
  wrapper: {
    top: 158,
    height: 224,
    left: 8,
    width: 400,
  },
  sideBar: {
    left: 30,
    top: 40,
    width: 20,
    height: 15,
    position: "absolute",
  },
  searchChild: {
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_600,
    borderStyle: "solid",
    borderColor: Color.colorGray_700,
    borderWidth: 1,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  searchInput: {
    top: "29.82%",
    left: "6.75%",
    color: Color.colorGray_700,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.itimRegular,
    width: "85%",
  },
  icon2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  suggestionsContainer: {
    position: "absolute",
    top: 57,
    width: "100%",
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorGray_700,
    borderWidth: 1,
    borderRadius: Border.br_xl,
    zIndex: 1,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGray_700,
  },
  search: {
    top: 82,
    height: 57,
    left: 10,
  },
  troley: {
    left: "88.14%",
    top: "4.22%",
    right: "7.43%",
    bottom: "91.63%",
    width: "4.60%",
    height: "2.40%",
    position: "absolute",
  },
  mainPageItem: {
    top: 424,
    left: 10,
    height: 98,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  javaHasBuiltIn: {
    top: 438,
    left: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  similarText: {
    top: 648,
    left: 19,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.josefinSansRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  mainPageInner: {
    top: 479,
    width: 375,
    height: 150,
    borderRadius: Border.br_8xs,
    left: 9,
    position: "absolute",
  },
  icon5: {
    overflow: "hidden",
  },
  community: {
    left: 357,
    top: 820,
    width: 25,
    height: 25,
    position: "absolute",
  },
  roadmap: {
    left: 185,
    top: 820,
    width: 25,
    height: 25,
    position: "absolute",
  },
  settings: {
    left: 275,
    top: 820,
    width: 24,
    height: 25,
    position: "absolute",
  },
  people: {
    left: 105,
    top: 820,
    width: 25,
    height: 25,
    position: "absolute",
  },
  mainPage: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default MainPage1;
