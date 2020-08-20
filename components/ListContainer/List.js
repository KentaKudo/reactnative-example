import React from "react";
import PropTypes from "prop-types";
import { FlatList, Text } from "react-native";

import ListControls from "./ListControls";
import styles from "./styles";

const List = ({ data, fetchItems }) => (
  <FlatList
    data={data}
    // ListHeaderComponent={<Controls {...{ onFilter, onSort, asc }} />}
    renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
    onEndReached={() => {
      console.log("end reached");
      fetchItems();
    }}
  />
);

export default List;

// List.propTypes = {
//   Controls: PropTypes.func.isRequired,
//   data: PropTypes.array.isRequired,
//   onFilter: PropTypes.func.isRequired,
//   onSort: PropTypes.func.isRequired,
//   asc: PropTypes.bool.isRequired,
// };

// List.defaultProps = {
//   Controls: ListControls,
// };
