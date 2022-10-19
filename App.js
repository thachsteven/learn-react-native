import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hi</Text>
      <Image source={require("./assets/favicon.png")} />
      <TouchableNativeFeedback onPress={() => console.log("Image tapped")}>
        <View style={{ width: 400, height: 400, backgroundColor: "green" }}>
          <Image
            fadeDuration={1000}
            source={{
              width: 200,
              height: 300,
              uri: "https://i.ytimg.com/vi/XekAF8bX51U/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAUVtOBWHOKWRqWvMkWLHi-rAhfYA",
            }}
          />
        </View>
      </TouchableNativeFeedback>

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
