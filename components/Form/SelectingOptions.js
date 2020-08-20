import React, { useState } from "react";
import { View, Text } from "react-native";

import Select from "./Select";
import styles from "./styles";

const sizes = [
  { label: "", value: null },
  { label: "S", value: "S" },
  { label: "M", value: "M" },
  { label: "L", value: "L" },
  { label: "XL", value: "XL" },
];

const garments = [
  { label: "", value: null, sizes: ["S", "M", "L", "XL"] },
  { label: "Socks", value: 1, sizes: ["S", "L"] },
  { label: "Shirt", value: 2, sizes: ["M", "XL"] },
  { label: "Pants", value: 3, sizes: ["S", "L"] },
  { label: "Hat", value: 4, sizes: ["M", "XL"] },
];

const SelectingOptions = () => {
  const [availableGarments, setAvailableGarments] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedGarment, setSelectedGarment] = useState(null);
  const [selection, setSelection] = useState("");

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setSelectedGarment(null);
    setAvailableGarments(garments.filter((i) => i.sizes.includes(size)));
  };

  const handleGarmentChange = (garment) => {
    setSelectedGarment(garment);
    setSelection(
      `${selectedSize} ${garments.find((i) => i.value === garment).label}`
    );
  };

  return (
    <View style={styles.selectContainer}>
      <Select
        label="Size"
        items={sizes}
        selectedValue={selectedSize}
        onValueChange={handleSizeChange}
      />
      <Select
        label="Garment"
        items={availableGarments}
        selectedValue={selectedGarment}
        onValueChange={handleGarmentChange}
      />
      <Text style={styles.selection}>{selection}</Text>
    </View>
  );
};

export default SelectingOptions;
