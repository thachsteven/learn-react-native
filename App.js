import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import MessagesScreen from "./app/screens/MessagesScreen";

const App = () => {
  return (
    <Screen>
      <ListItem
        IconComponent={<Icon name="email" />}
        title="My title"
        subTitle="My subtitle"
      />
    </Screen>
  );
};

export default App;
