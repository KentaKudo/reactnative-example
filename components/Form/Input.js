import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput } from "react-native";

import styles from "./styles";

const Input = (props) => (
  <View style={styles.textInputContainer}>
    <Text style={styles.textInputLabel}>{props.label}</Text>
    <TextInput style={styles.textInput} {...props} />
  </View>
);

export default Input;

Input.propTypes = {
  label: PropTypes.string,
};
