import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "./styles";

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

export default Row;

Row.propTypes = {
  children: PropTypes.node.isRequired,
};
