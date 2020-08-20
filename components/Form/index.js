import React, { useState } from "react";
import { Text, View } from "react-native";

import Input from "./Input";
import SelectingOptions from "./SelectingOptions";
import styles from "./styles";

const Form = () => {
  const [changedText, setChangedText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const handleChangeText = setChangedText;
  const handleSubmitEditing = (e) => setSubmittedText(e.nativeEvent.text);
  const handleFocus = () => {
    setChangedText("");
    setSubmittedText("");
  };

  return (
    <View style={styles.container}>
      <Input label="Basic Text Input:" />
      <Input label="Password Input:" secureTextEntry />
      <Input label="Return Key:" returnKeyType="search" />
      <Input label="Placeholder Text:" placeholder="search" />
      <Input
        label="Input Events:"
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
        onFocus={handleFocus}
      />
      <Text>Changed: {changedText}</Text>
      <Text>Submitted: {submittedText}</Text>

      <SelectingOptions />
    </View>
  );
};

export default Form;
