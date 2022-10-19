import { Alert, Button, SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Click Me"
        onPress={
          () =>
            Alert.alert("Title here", "Message here", [
              {
                text: "Yes",
                onPress: () => console.log("Yes"),
              },
              {
                text: "No",
                onPress: () => console.log("No"),
              },
            ])
          // Alert.prompt("My Title", "My message", (text) => console.log(text)) //Only IOS works
        }
      />
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
