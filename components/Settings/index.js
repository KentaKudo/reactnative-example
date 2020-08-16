import React from "react";
import { Text, View, Button } from "react-native";

import styles from "./styles";
import * as ROUTES from "../../routes";

const Settings = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Settings Screen</Text>
    <Button
      title={ROUTES.HOME}
      onPress={() => navigation.navigate(ROUTES.HOME)}
    />
  </View>
);

export default Settings;
