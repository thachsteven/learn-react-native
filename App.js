import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import MessagesScreen from "./app/screens/MessagesScreen";

const App = () => {
  return (
    <Screen>
      <Icon name="email" size={50} backgroundColor="red" iconColor="white" />
    </Screen>
  );
};

export default App;
