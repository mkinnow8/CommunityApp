import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import BackgroundComponent from '../../components/BackgroundComponent/BackgroundComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {avatar, groupMeeting, postImage} from '../../assets/images';
import {COLORS} from '../../resources';
import {PostComponent} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {
  respFontSize,
  responsiveHeight,
} from '../../utilities/responsiveDimensions';
import {useNavigation} from '@react-navigation/native';
import {ROUTE} from '../../resources/routesName';
import {useAppSelector} from '../../redux/hooks';

type Props = {};

const HomeScreen = (props: Props) => {
  const navigation = useNavigation();
  const [activeType, setActiveType] = useState('general');
  const [scrollValue, setScrollValue] = useState<number>(0);
  const font = useAppSelector(state => state.font);
  //   const scrollY = useRef(new Animated.Value(0)).current;
  console.log('Scroll Value: ', scrollValue);

  const scrollY = scrollValue / 0.54 + 0.36;
  console.log('Custom Scroll Value: ', scrollY);
  const screenHeight = Dimensions.get('window').height;
  return (
    <BackgroundComponent notTranslucent>
      <View style={styles.container}>
        <View
          style={[
            styles.rowContainer,
            {
              marginHorizontal: 24,
              marginVertical: 12,
              height: responsiveHeight(24),
            },
          ]}>
          <Text
            style={[
              styles.heading,
              {flex: 1, fontSize: respFontSize(15, font.sizeFactor)},
            ]}>
            Community
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTE.CHAT as never)}>
            <Icon name="message-processing" size={24} color={COLORS.WHITE} />
          </TouchableOpacity>
        </View>
        <View
          style={{borderColor: COLORS.DARK_GREY, borderBottomWidth: 1}}></View>
        {/* Option Buttons */}
        <View style={[styles.optionButtonContainer, {marginHorizontal: 24}]}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => setActiveType('general')}>
            <Text
              style={[
                styles.optionButtonText,
                {fontSize: respFontSize(12, font.sizeFactor)},
                activeType === 'general' && {
                  backgroundColor: COLORS.PURPLE,
                },
              ]}>
              General
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => setActiveType('paid')}>
            <Text
              style={[
                styles.optionButtonText,
                {fontSize: respFontSize(12, font.sizeFactor)},
                activeType === 'paid' && {
                  backgroundColor: COLORS.PURPLE,
                },
              ]}>
              Paid
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{borderColor: COLORS.GREY, borderBottomWidth: 1}}></View>
        {/* List of Posts */}
        <FlatList
          data={[
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
          ]}
          renderItem={({item, index}) => (
            <PostComponent scrollY={scrollY} index={index} />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{height: 8, backgroundColor: COLORS.DARK_GREY}} />
          )}
          ListFooterComponent={<View style={{marginBottom: 64}} />}
          onScroll={e => {
            setScrollValue(
              e.nativeEvent.contentOffset.y.toFixed(0) / screenHeight,
            );
          }}
          scrollEventThrottle={16}
        />
      </View>
    </BackgroundComponent>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    color: COLORS.WHITE,

    fontWeight: '500',
  },
  optionButtonContainer: {
    marginVertical: 12,
    flexDirection: 'row',
    height: responsiveHeight(44),
    backgroundColor: COLORS.GREY,
    borderRadius: 5,
  },
  optionButton: {
    height: responsiveHeight(44),
    flex: 1,
  },
  optionButtonText: {
    color: COLORS.WHITE,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '500',
    width: '100%',
    height: '100%',
    borderColor: COLORS.WHITE,
    fontSize: 16,
    borderRadius: 5,
  },
});
