import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import ListFilter from "./ListFilter";
import ListSort from "./ListSort";
import styles from "./styles";

const ListControls = ({ onFilter, onSort, asc }) => (
  <View style={styles.controls}>
    <ListFilter onFilter={onFilter} />
    <ListSort {...{ onSort, asc }} />
  </View>
);

export default ListControls;

ListControls.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
};
