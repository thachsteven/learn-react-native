import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Text pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Pipeline failing? To keep GitLab spam and abuse free we ask that you
        verify your identity. Pipeline failing? To keep GitLab spam and abuse
        free we ask that you verify your identity. Pipeline failing? To keep
        GitLab spam and abuse free we ask that you verify your identity.
        Pipeline failing? To keep GitLab spam and abuse free we ask that you
        verify your identity.
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
