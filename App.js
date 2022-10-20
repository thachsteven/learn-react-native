import React from "react";
import { View } from "react-native";

const App = () => {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ backgroundColor: "yellow", flex: 1 }} />
      <View style={{ backgroundColor: "red", flex: 2 }} />
      <View style={{ backgroundColor: "blue", flex: 1 }} />
    </View>
  );
};

export default App;
