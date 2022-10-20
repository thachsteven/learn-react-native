import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const ListItem = ({ title, subTitle, image, onPress }) => {
  return (
    <TouchableHighlight underlayColor={colors.white} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image }} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: "#6e6969",
  },
});

export default ListItem;
