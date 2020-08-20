import React, { useState } from "react";
import { View } from "react-native";

import Swipeable from "./Swipeable";
import styles from "./styles";

const SwipeableAndCancellable = () => {
  const [items, setItems] = useState(
    new Array(8).fill(null).map((v, id) => ({ id, name: "Swipe Me" }))
  );

  const handleSwipe = (id) => () =>
    setItems(items.filter((item) => item.id !== id));

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Swipeable
          key={item.id}
          onSwipe={handleSwipe(item.id)}
          name={item.name}
        />
      ))}
    </View>
  );
};

export default SwipeableAndCancellable;
