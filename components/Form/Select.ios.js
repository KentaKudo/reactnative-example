import React from "react";
import PropTypes from "prop-types";
import { Text, View, Picker } from "react-native";

import styles from "./styles";

const Select = (props) => (
  <View style={styles.pickerHeight}>
    <View style={styles.pickerContainer}>
      <Text style={styles.pickerLabel}>{props.label}</Text>
      <Picker style={styles.picker} {...props}>
        {props.items.map((i) => (
          <Picker.Item key={i.label} {...i} />
        ))}
      </Picker>
    </View>
  </View>
);

export default Select;

Select.propTypes = {
  items: PropTypes.array,
  label: PropTypes.string,
};
