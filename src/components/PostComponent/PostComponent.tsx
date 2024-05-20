import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../resources';
import {avatar, postImage} from '../../assets/images';
import {ProfileHeadingComponent} from '..';
import {useNavigation} from '@react-navigation/native';
import {ROUTE} from '../../resources/routesName';
import {
  respFontSize,
  responsiveHeight,
} from '../../utilities/responsiveDimensions';
import {useAppSelector} from '../../redux/hooks';

type Props = {
  scrollY: number;
  index: number;
};
const SCREEN_HEIGHT = Dimensions.get('window').height;
const PostComponent = ({scrollY, index}: Props) => {
  const font = useAppSelector(state => state.font);
  const navigation = useNavigation();
  const selectedIndex = Math.ceil(scrollY);
  const opacity = scrollY - selectedIndex + 1;
  //   console.log('Opacity: ', opacity);

  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingVertical: 12,
        height: responsiveHeight(420),

        opacity:
          index === selectedIndex ? opacity : index >= selectedIndex ? 0.3 : 1,
      }}>
      {/* profile header */}
      <ProfileHeadingComponent headerRightIcon="bookmark" />
      {/* card content */}

      <Text
        style={[
          styles.postCaptionText,
          {fontSize: respFontSize(10, font.sizeFactor)},
        ]}
        numberOfLines={2}
        ellipsizeMode="tail">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        ullamcorper nulla non metus auctor fringilla.
      </Text>
      <View
        style={{
          height: '73%',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTE.POST as never)}>
          <Image source={postImage} style={styles.postImage} />
        </TouchableOpacity>

        <View
          style={[
            styles.rowContainer,
            {
              height: responsiveHeight(24),
            },
          ]}>
          <View style={styles.rowContainer}>
            <Icon name="arrow-up-thin" size={24} color={COLORS.PURPLE} />
            <Text
              style={{
                color: COLORS.WHITE,
                fontSize: respFontSize(10, font.sizeFactor),
              }}>
              56.6k
            </Text>
            <Icon name="arrow-down-thin" size={24} color={COLORS.WHITE} />
          </View>
          <View
            style={[styles.rowContainer, {flex: 4, justifyContent: 'center'}]}>
            <Icon name="comment-text-outline" size={20} color={COLORS.WHITE} />
            <Text
              style={{
                color: COLORS.WHITE,
                marginLeft: 4,
                fontSize: respFontSize(10, font.sizeFactor),
              }}>
              5526
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
            }}>
            <Icon name="tray-arrow-up" size={20} color={COLORS.WHITE} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postCaptionText: {
    color: COLORS.WHITE,
    marginVertical: 12,
  },
  postImage: {
    height: '96%',
    width: '100%',
    borderRadius: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PostComponent;
