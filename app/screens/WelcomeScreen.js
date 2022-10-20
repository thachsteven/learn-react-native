import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/splash.png")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/adaptive-icon.png")}
        />
        <Text>Sell what you don't need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "orange",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "blue",
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default WelcomeScreen;
