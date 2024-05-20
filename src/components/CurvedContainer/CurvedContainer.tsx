import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackgroundComponent} from '..';
import {COLORS} from '../../resources';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveDimensions';

type Props = {
  children: React.ReactNode;
};

const CurvedContainer = ({children}: Props) => {
  return <View style={styles.container}>{children}</View>;
};

export default CurvedContainer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: responsiveWidth(32),
    paddingVertical: responsiveHeight(24),
    marginTop: responsiveHeight(24),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: COLORS.WHITE,
  },
});
