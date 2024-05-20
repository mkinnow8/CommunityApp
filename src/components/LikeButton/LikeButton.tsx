import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../resources';
import {useAppSelector} from '../../redux/hooks';
import {respFontSize} from '../../utilities/responsiveDimensions';

type Props = {
  text: string;
  isActive?: boolean;
  onPressEvent?: () => void;
};

const LikeButton = ({text, isActive, onPressEvent}: Props) => {
  const font = useAppSelector(state => state.font);
  return (
    <TouchableOpacity
      onPress={onPressEvent}
      style={isActive ? styles.activeLikeButton : styles.likeButton}>
      <Text
        style={{
          color: COLORS.LIGHT_GREY,
          fontSize: respFontSize(10, font.sizeFactor),
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default LikeButton;

const styles = StyleSheet.create({
  likeButton: {
    borderColor: '#fff',
    borderWidth: 1,
    padding: 4,
    width: 84,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 8,
    backgroundColor: COLORS.DARK_GREY,
  },
  activeLikeButton: {
    borderColor: COLORS.PURPLE,
    borderWidth: 1,
    padding: 4,
    width: 84,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 8,
    backgroundColor: COLORS.PURPLE,
  },
});
