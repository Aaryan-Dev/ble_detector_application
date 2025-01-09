import React from 'react'
import {
  Button,
  View,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

type CustomButtonProps = {
  onClick: () => void;
  title: string;
  buttonColor: string;
  icon: string;
};

const CustomButton: React.FC<CustomButtonProps> = props => {
  const {onClick, title, buttonColor, icon, login} = props;

  return (
    <TouchableOpacity style={styles.CustomButton} onPress={onClick}>
      {login}
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  CustomButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  }
});

export default CustomButton