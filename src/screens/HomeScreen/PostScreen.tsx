import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {
  BackgroundComponent,
  MessageBoxComponent,
  PostComponent,
  ProfileHeadingComponent,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {avatar, postImage} from '../../assets/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../resources';
import CommentComponent from '../../components/CommentComponent/CommentComponent';
import {respFontSize} from '../../utilities/responsiveDimensions';
import {useAppSelector} from '../../redux/hooks';

type Props = {};

const PostScreen = (props: Props) => {
  const font = useAppSelector(state => state.font);
  const navigation = useNavigation();

  return (
    <BackgroundComponent notTranslucent>
      <View style={[styles.horizontalMargin, {marginVertical: 12}]}>
        <ProfileHeadingComponent
          headerLeftIcon="arrow-left"
          headerLeftEvent={() => {
            navigation.goBack();
          }}
          headerRightIcon="dots-vertical"
        />
      </View>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={[styles.horizontalMargin, {marginVertical: 12}]}>
              <Image source={postImage} style={styles.postImage} />
              <View style={[styles.rowContainer, {marginVertical: 6}]}>
                <View style={styles.rowContainer}>
                  <Icon
                    name="arrow-up-thin"
                    size={respFontSize(18, font.sizeFactor)}
                    color={COLORS.PURPLE}
                  />
                  <Text
                    style={{
                      color: COLORS.WHITE,
                      fontSize: respFontSize(10, font.sizeFactor),
                    }}>
                    56.6k
                  </Text>
                  <Icon
                    name="arrow-down-thin"
                    size={respFontSize(18, font.sizeFactor)}
                    color={COLORS.WHITE}
                  />
                </View>
                <View
                  style={[
                    styles.rowContainer,
                    {flex: 4, justifyContent: 'center'},
                  ]}>
                  <Icon
                    name="comment-text-outline"
                    size={respFontSize(14, font.sizeFactor)}
                    color={COLORS.WHITE}
                  />
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
                  <Icon
                    name="tray-arrow-up"
                    size={respFontSize(14, font.sizeFactor)}
                    color={COLORS.WHITE}
                  />
                </View>
              </View>
              <Text
                style={[
                  styles.postCaptionText,
                  {fontSize: respFontSize(10, font.sizeFactor)},
                ]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ullamcorper nulla non metus auctor fringilla.
              </Text>
              <Text
                style={[
                  styles.postCaptionText,
                  {fontSize: respFontSize(9, font.sizeFactor)},
                ]}>
                15 Minutes ago
              </Text>
            </View>
            <View
              style={{
                height: 8,
                backgroundColor: COLORS.DARK_GREY,
                marginBottom: 12,
              }}
            />
          </>
        }
        data={['', '']}
        renderItem={({item}) => <CommentComponent />}
      />
      <View style={[styles.horizontalMargin, {marginVertical: 12}]}>
        <MessageBoxComponent />
      </View>
    </BackgroundComponent>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  horizontalMargin: {
    marginHorizontal: 24,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postCaptionText: {
    color: COLORS.WHITE,
    marginVertical: 4,
  },
  postImage: {
    height: 300,
    width: '100%',
    borderRadius: 5,
  },
});
