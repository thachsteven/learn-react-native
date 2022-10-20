import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import ListItem from "./ListItem";

const Card = ({ image, title, subTitle }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Stevie"
            subTitle="5 listings"
            image="https://i.picsum.photos/id/95/200/300.jpg?hmac=XW2T1mpTuATtTLyDvkvdQqgh2nodO9Zudo3dH2aXCBA"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },

  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },

  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },

  userContainer: {
    marginVertical: 40,
  },
});

export default Card;
