import React from "react";
import {
  View,
  ScrollView,
  Text,
  ActivityIndicator,
  Switch,
} from "react-native";

import Button from "./Button";
import SwipeableAndCancellable from "./SwipeableAndCancellable";
import styles from "./styles";

const Gesture = () => (
  <View style={styles.container}>
    <ScrollView style={styles.scroll}>
      {new Array(6).fill(null).map((v, i) => (
        <View key={i}>
          <Text style={[styles.scrollItem, styles.text]}>Some Text</Text>
          <ActivityIndicator style={styles.scrollItem} size="large" />
          <Switch style={styles.scrollItem} />
        </View>
      ))}
    </ScrollView>

    <Button onPress={() => {}}>Opacity</Button>
    <Button onPress={() => {}} touchable="highlight">
      Highlight
    </Button>

    <SwipeableAndCancellable />
  </View>
);

export default Gesture;
