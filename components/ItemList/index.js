import React from "react";
import { View, Text, Button } from "react-native";

import styles from "./styles";
import StockContext from "../stock";
import * as ROUTES from "../../routes";

const ItemList = ({ navigation }) => {
  const { stock } = React.useContext(StockContext);
  const { first, second, third } = stock;

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title={`First Item (${first})`}
        onPress={() =>
          navigation.navigate(ROUTES.DETAILS, {
            id: "first",
            title: "First Item",
            content: "First Item Content",
          })
        }
      />
      <Button
        title={`Second Item (${second})`}
        onPress={() =>
          navigation.navigate(ROUTES.DETAILS, {
            id: "second",
            title: "Second Item",
            content: "Second Item Content",
          })
        }
      />
      <Button
        title={`Third Item (${third})`}
        onPress={() =>
          navigation.navigate(ROUTES.DETAILS, {
            id: "third",
            title: "Third Item",
            content: "Third Item Content",
          })
        }
      />
    </View>
  );
};

export default ItemList;
