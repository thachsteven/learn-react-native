import { useState } from "react";
import { Text, TextInput } from "react-native";
import Screen from "./app/components/Screen";

const App = () => {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        secureTextEntry
        clearButtonMode="always" //Only works on IOS
        keyboardType="numeric"
        maxLength={5}
        onChangeText={(text) => setFirstName(text)}
        placeholder="First Name"
        style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
      />
    </Screen>
  );
};

export default App;
