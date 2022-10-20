import { View } from "react-native";
import Card from "./app/components/Card";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const App = () => {
  return (
    <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
      <Card
        title="Red jacket for sale"
        subTitle="$100"
        image="https://i.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA"
      />
    </View>
  );
};

export default App;
