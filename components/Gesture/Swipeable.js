import React from "react";
import PropTypes from "prop-types";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const Swipeable = ({ onSwipe, name }) => {
  const handleScroll = (e) =>
    e.nativeEvent.contentOffset.x === 200 && onSwipe();

  const scrollProps = {
    horizontal: true,
    pagingEnabled: true,
    showsHorizontalScrollIndicator: false,
    scrollEventThrottle: 10,
    onScroll: handleScroll,
  };

  return (
    <View styles={styles.swipeContainer}>
      <ScrollView {...scrollProps}>
        <TouchableOpacity>
          <View style={styles.swipeItem}>
            <Text style={styles.swipeItemText}>{name}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.swipeBlank} />
      </ScrollView>
    </View>
  );
};

export default Swipeable;

Swipeable.propTypes = {
  onSwipe: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
