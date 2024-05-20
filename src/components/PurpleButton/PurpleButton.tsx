import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../resources';

type Props = {
  buttonText: string;
  onPress?: () => void;
};

const PurpleButton = ({buttonText, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.purpleButton} onPress={onPress}>
      <Text style={styles.purpleButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default PurpleButton;

const styles = StyleSheet.create({
  purpleButton: {
    backgroundColor: COLORS.PURPLE,
    borderRadius: 10,
    height: 48,
  },
  purpleButtonText: {
    color: COLORS.WHITE,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '500',
    width: '100%',
    height: '100%',
    fontSize: 16,
  },
});
