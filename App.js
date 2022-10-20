import {
  Alert,
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button color="orange" title="Click Me" />
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
