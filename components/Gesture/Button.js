import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, TouchableHighlight, Text } from "react-native";

import styles from "./styles";

const touchables = new Map([
  ["opacity", TouchableOpacity],
  ["highlight", TouchableHighlight],
  [undefined, TouchableOpacity],
]);

const Button = ({ onPress, touchable, children }) => {
  const Touchable = touchables.get(touchable);
  const touchableProps = {
    style: styles.button,
    underlayColor: "rgba(112,128,144,0.3)",
    onPress,
  };

  return (
    <Touchable {...touchableProps}>
      <Text style={styles.buttonText}> {children} </Text>
    </Touchable>
  );
};

export default Button;

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  touchable: PropTypes.oneOf(["opacity", "highlight"]),
  children: PropTypes.string.isRequired,
};
