import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

type CustomInput = {
  inputMode: string;
  keyboardType: string;
  placeholder: string;
  height: number;
  handleInputOnChange: () => void;
};

const CustomInput: React.FC<CustomInputProps> = props => {
  const {inputMode, keyboardType, placeholder, handleInputOnChange, height} = props;

  return (
    <>
      <TextInput
        style={styles.input}
        height={height}
        onChangeText={handleInputOnChange}
        inputMode={inputMode}
        keyboardType={keyboardType}
        placeholder={placeholder}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: '100%',
    padding: 5,
  },
});

export default CustomInput;
