import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";
import { useState } from 'react';

const LoginPage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to validate the password length
  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  // Function to validate the form
  const handleLogin = () => {
    if (!username.trim()) {
      alert("Please enter your full name.");
    } else if (!password.trim()) {
      alert("Please enter your password.");
    } else if (!isValidPassword(password)) {
      alert("Password must be at least 6 characters long.");
    } else {
      // Perform login logic here
      navigation.navigate("WelcomePage");
    }
  };

  return (
    <View style={styles.loginPage}>
      <Image
        style={styles.loginIcon}
        contentFit="cover"
        source={require("../assets/loginicon.png")}
      />
      <View style={[styles.inputContainer, styles.fullNameInput]}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          placeholderTextColor={Color.colorGray_400}
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={[styles.inputContainer, styles.passwordInput]}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor={Color.colorGray_400}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Pressable
        style={styles.loginButton}
        onPress={handleLogin}
      >
        <Image
          style={styles.loginButtonBackground}
          contentFit="cover"
          source={require("../assets/rectangle-2.png")}
        />
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  loginIcon: {
    top: 170,
    left: 150,
    width: 100,
    height: 100,
    position: "absolute",
  },
  inputContainer: {
    marginVertical: 10,
  },
  inputLabel: {
    marginLeft: 35,
    marginBottom: 5,
    color: Color.colorGray_100,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_xl,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    borderRadius: Border.br_xl,
    paddingLeft: 10,
    marginHorizontal: 25,
    color: Color.colorBlack,
  },
  fullNameInput: {
    top: 322,
    position: "absolute",
    width: '100%',
  },
  passwordInput: {
    top: 414,
    position: "absolute",
    width: '100%',
  },
  loginButton: {
    top: 621,
    left: 20,
    borderRadius: Border.br_xl,
    backgroundColor: Color.sriEshwar,
    width: 354,
    height: 67,
    position: "absolute",
  },
  loginButtonBackground: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_2xl,
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  loginButtonText: {
    top: "37.31%",
    left: "40%",
    letterSpacing: 1.6,
    fontWeight: "900",
    fontFamily: FontFamily.itimRegular,
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  loginPage: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default LoginPage;
