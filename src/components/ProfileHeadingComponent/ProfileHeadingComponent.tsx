import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {COLORS} from '../../resources';
import {avatar} from '../../assets/images';
import {
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utilities/responsiveDimensions';
import {useAppSelector} from '../../redux/hooks';

type Props = {
  headerLeftIcon?: string;
  headerRightIcon?: string;
  headerLeftEvent?: () => void;
};

const ProfileHeadingComponent = ({
  headerLeftIcon,
  headerRightIcon,
  headerLeftEvent,
}: Props) => {
  const font = useAppSelector(state => state.font);
  return (
    <View style={styles.rowContainer}>
      {headerLeftIcon && (
        <TouchableOpacity style={{marginRight: 12}} onPress={headerLeftEvent}>
          <Icon name={headerLeftIcon} size={24} color={COLORS.WHITE} />
        </TouchableOpacity>
      )}

      <Image source={avatar} style={styles.profileImage} />
      <View style={{marginLeft: 8, flex: 1}}>
        <Text
          style={[
            styles.profileName,
            {fontSize: respFontSize(12, font.sizeFactor)},
          ]}>
          Gustavo Purpleson
        </Text>
        <Text
          style={[
            styles.profileTime,
            {fontSize: respFontSize(9, font.sizeFactor)},
          ]}>
          15 Minutes ago
        </Text>
      </View>
      {headerRightIcon && (
        <TouchableOpacity>
          <Icon name={headerRightIcon} size={24} color={COLORS.WHITE} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: responsiveHeight(44),
    width: responsiveWidth(44),
    borderRadius: 50,
  },
  profileName: {
    color: COLORS.WHITE,
    fontWeight: '500',
  },
  profileTime: {
    color: COLORS.WHITE,
    fontSize: 12,
  },
});

export default ProfileHeadingComponent;
