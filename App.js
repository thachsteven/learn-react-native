import {
  Alert,
  Button,
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "blue", height: 70, width: "50%" }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
