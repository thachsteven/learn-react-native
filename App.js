import { View } from "react-native";
import AppText from "./app/components/AppText";
import { AntDesign } from "@expo/vector-icons";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppText>hello</AppText>
      <AntDesign name="mail" size={100} color="red" />
    </View>
  );
};

export default App;
