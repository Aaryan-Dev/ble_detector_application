import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomInput: React.FC = () => {

    return (
      <>
      <TextInput
      style={styles.input}
      // onChangeText={handleInputOnChange}
      inputMode="text"
      keyboardType="email-address"
      placeholder="Enter Syllab email address"
      />
      </>
    )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 2,
  },
});

export default CustomInput;