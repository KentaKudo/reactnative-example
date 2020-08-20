import React from "react";
import { Text, View, Picker } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const Select = (props) => (
  <View>
    <Text style={styles.pickerLabel}>{props.label}</Text>
    <Picker {...props}>
      {props.items.map((i) => (
        <Picker.Item key={i.label} {...i} />
      ))}
    </Picker>
  </View>
);

export default Select;

Select.propTypes = {
  label: PropTypes.string,
  items: PropTypes.array,
};
