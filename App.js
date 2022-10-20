import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";
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
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "blue",
          height: landscape ? "100%" : 70,
          width: "100%",
        }}
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
