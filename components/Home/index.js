import React from "react";
import { View, Text, Button } from "react-native";

import styles from "./styles";
import * as ROUTES from "../../routes";

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Home Screen</Text>
    <Button
      title="First Item"
      onPress={() =>
        navigation.navigate(ROUTES.DETAILS, {
          title: "First Item",
          content: "First Item Content",
          stock: 1,
        })
      }
    />
    <Button
      title="Second Item"
      onPress={() =>
        navigation.navigate(ROUTES.DETAILS, {
          title: "Second Item",
          content: "Second Item Content",
          stock: 0,
        })
      }
    />
    <Button
      title="Third Item"
      onPress={() =>
        navigation.navigate(ROUTES.DETAILS, {
          title: "Third Item",
          content: "Third Item Content",
          stock: 200,
        })
      }
    />
  </View>
);

export default Home;
