import { useState } from "react";
import { FlatList, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => console.log("Mesaged", item)}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image:
                "https://i.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA",
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;
