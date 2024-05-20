import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../resources';
import {
  respFontSize,
  responsiveHeight,
} from '../../utilities/responsiveDimensions';
import {useAppSelector} from '../../redux/hooks';

type Props = {
  text: string;
};

const SettingButtonComponent = ({text}: Props) => {
  const [toggleSwitch, setToggleSwitch] = useState<boolean>(false);
  const font = useAppSelector(state => state.font);
  return (
    <View style={styles.rowContainer}>
      <Text
        style={[styles.text, {fontSize: respFontSize(12, font.sizeFactor)}]}>
        {text}
      </Text>
      <Switch
        trackColor={{false: COLORS.LIGHT_GREY, true: COLORS.DARK_GREY}}
        thumbColor={toggleSwitch ? COLORS.WHITE : COLORS.WHITE}
        onValueChange={() => setToggleSwitch(!toggleSwitch)}
        value={toggleSwitch}
      />
    </View>
  );
};

export default SettingButtonComponent;

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
