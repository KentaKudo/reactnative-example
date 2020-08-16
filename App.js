import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

import Box from "./components/Box";
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Box>#1</Box>
      <Box>#2</Box>
      <Box>#3</Box>
      <StatusBar style="auto" />
    </View>
  );
}
