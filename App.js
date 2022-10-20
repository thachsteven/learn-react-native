import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppButton title="login" onPress={() => console.log("Tapped")} />
    </View>
  );
};

export default App;
