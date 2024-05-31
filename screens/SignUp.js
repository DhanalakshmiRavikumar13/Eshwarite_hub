import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Padding, Color } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Function to validate email format
  const isValidEmail = (email) => {
    return /^[a-zA-Z]+[a-zA-Z0-9._-]*@sece\.ac\.in$/.test(email);
  };
  

  // Function to validate password length
  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  // Function to handle sign up button press
  const handleSignUp = () => {
    if (!username.trim()) {
      alert("Please enter your full name.");
    } else if (!email.trim()) {
      alert("Please enter your email address.");
    } else if (!password.trim()) {
      alert("Please enter your password.");
    } else if (!isValidEmail(email)) {
      alert("Please enter the Official email address.");
    } else if (!isValidPassword(password)) {
      alert("Password must be at least 6 characters long.");
    } else {
      // Navigate to welcome page or perform sign up logic here
      navigation.navigate("WelcomePage");
    }
  };

  return (
    <View style={styles.signUp}>
      <View style={styles.userSignup}>
        <Image
          style={styles.userSignupChild}
          contentFit="cover"
          source={require("../assets/loginicon.png")}
        />
      </View>
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
      <View style={[styles.inputContainer, styles.emailInput]}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email id"
          placeholderTextColor={Color.colorGray_400}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
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
        style={[styles.signUp2, styles.signUp2Position]}
        onPress={handleSignUp}
      >
        <View style={[styles.signUpChild, styles.childPosition]} />
        <Text style={[styles.signUp3, styles.logInTypo]}>SIGN UP</Text>
      </Pressable>
      <View style={styles.question}>
        <Text style={[styles.alreadyHaveAn, styles.logInTypo]}>
          Already have an account?
        </Text>
      </View>
      <Pressable
        style={[styles.login, styles.loginFlexBox]}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
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
  userLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  password1Position: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  signUp2Position: {
    width: 380,
    left: 15,
    position: "absolute",
  },
  passwordLayout: {
    height: 72,
    width: 380,
    left: 25,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_xl,
    height: "100%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  passwordTypo: {
    textAlign: "right",
    fontSize: FontSize.size_xl,
  },
  loginFlexBox: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  password3Typo: {
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorBlack,
  },
  logInTypo: {
    textAlign: "center",
    fontSize: FontSize.size_xl,
  },
  userSignupChild: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  signUp1: {
    top: 120,
    alignSelf: "center",
    color: Color.colorIndianred,
    fontSize: FontSize.size_xl,
  },
  userSignup: {
    top: 143,
    left: 0,
    right: 0,
    position: "absolute",
    alignItems: "center",
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
    color: Color.colorBlack, // Set input text color
  },
  fullNameInput: {
    top: 322,
    position: "absolute",
    width: '100%',
  },
  emailInput: {
    top: 414,
    position: "absolute",
    width: '100%',
  },
  passwordInput: {
    top: 506,
    position: "absolute",
    width: '100%',
  },
  signUpChild: {
    backgroundColor: Color.sriEshwar,
  },
  signUp3: {
    height: "52.63%",
    width: "24.21%",
    top: "24.56%",
    left: "34%",
    color: Color.colorWhite,
    display: "flex",
    letterSpacing: 1.6,
    textAlign: "center",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.itimRegular,
  },
  signUp2: {
    top: 667,
    height: 57,
    left: 25,
  },
  alreadyHaveAn: {
    letterSpacing: 1.6,
    textAlign: "center",
    position: "absolute",
    fontFamily: FontFamily.josefinSansRegular,
    color: Color.colorBlack,
    left: "0%",
    top: "0%",
  },
  question: {
    top: 757,
    left: 33,
    width: 279,
    height: 20,
    position: "absolute",
  },
  logIn: {
    fontWeight: "700",
    fontFamily: FontFamily.josefinSansBold,
    color: Color.sriEshwar,
  },
  login: {
    top: 747,
    left: 312,
  },
  signUp: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default SignUp;
