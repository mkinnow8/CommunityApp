import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react';
import {COLORS} from '../../resources';
import {
  respFontSize,
  responsiveHeight,
} from '../../utilities/responsiveDimensions';
import {useAppSelector} from '../../redux/hooks';

type Props = {
  text: string;
  rightIcon?: boolean;
  rightIconEvent?: () => void;
};

const SettingComponent = ({text, rightIcon, rightIconEvent}: Props) => {
  const font = useAppSelector(state => state.font);
  return (
    <TouchableOpacity style={styles.rowContainer} onPress={rightIconEvent}>
      <Text
        style={[styles.text, {fontSize: respFontSize(12, font.sizeFactor)}]}>
        {text}
      </Text>

      {rightIcon && (
        <Icon
          name="chevron-right"
          size={respFontSize(18, font.sizeFactor)}
          color={COLORS.BACKGROUND_COLOR}
        />
      )}
    </TouchableOpacity>
  );
};

export default SettingComponent;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(48),
  },
  text: {
    color: COLORS.BACKGROUND_COLOR,

    fontWeight: 'bold',
    flex: 1,
  },
});
