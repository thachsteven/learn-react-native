import { FlatList, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image:
      "https://i.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA",
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image:
      "https://i.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA",
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

export default MessagesScreen;
