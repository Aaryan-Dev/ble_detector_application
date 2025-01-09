import React from 'react'
import {Button, View, Alert, StyleSheet} from 'react-native';

type CustomButtonProps = {
  onClick: () => void;
  title: string;
  buttonColor: string;
};

const CustomButton: React.FC<CustomButtonProps> = props => {
  const {onClick, title, buttonColor} = props;

  return (
      <Button color={buttonColor} onPress={onClick} title={title} />
  );
};

const styles = StyleSheet.create({
});

export default CustomButton