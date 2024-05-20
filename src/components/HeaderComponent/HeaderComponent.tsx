import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveDimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../resources';
import {useAppSelector} from '../../redux/hooks';

type Props = {
  text: string;
  leftIconEvent?: () => void;
};

const HeaderComponent = ({text, leftIconEvent}: Props) => {
  const font = useAppSelector(state => state.font);
  return (
    <View
      style={[
        styles.rowContainer,
        {marginLeft: responsiveWidth(16), marginTop: responsiveHeight(8)},
      ]}>
      <TouchableOpacity onPress={leftIconEvent}>
        <Icon name="arrow-left" size={24} color={COLORS.WHITE} />
      </TouchableOpacity>
      <Text
        style={[
          styles.text,
          {
            fontSize: respFontSize(14, font.sizeFactor),
            textAlign: 'center',
            flex: 1,
          },
        ]}>
        {text}
      </Text>
      <View style={{width: responsiveWidth(16)}}></View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
});
