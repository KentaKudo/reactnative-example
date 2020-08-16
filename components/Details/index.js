import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";

const Details = ({ route }) => {
  const { content } = route.params;

  return (
    <View style={styles.container}>
      <Text>{content}</Text>
    </View>
  );
};

export default Details;
