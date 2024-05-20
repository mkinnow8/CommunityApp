import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {avatar} from '../../assets/images';
import {ProfileHeadingComponent} from '..';
import {COLORS} from '../../resources';
import LikeButton from '../LikeButton/LikeButton';
import {useAppSelector} from '../../redux/hooks';
import {respFontSize} from '../../utilities/responsiveDimensions';

type Props = {};

const CommentComponent = (props: Props) => {
  const font = useAppSelector(state => state.font);
  return (
    <View
      style={{
        borderColor: '#fff',
        borderLeftWidth: 1,
        marginLeft: 36,
        marginRight: 24,
      }}>
      <View
        style={{
          borderColor: '#fff',
          borderBottomWidth: 1,
          paddingLeft: 16,
          paddingBottom: 48,
          marginBottom: 40,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            left: -25,
          }}>
          <ProfileHeadingComponent />
        </View>
        <View style={{marginTop: 56}}>
          <Text
            style={{
              color: COLORS.LIGHT_GREY,
              fontSize: respFontSize(10, font.sizeFactor),
            }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layolong
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layolong established fact
            that.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: -15,
            left: 20,
            zIndex: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <LikeButton text="Like" isActive={true} />
            <LikeButton text="Reply" />
          </View>
          <TouchableOpacity style={{flex: 1}}>
            <Text
              style={{
                backgroundColor: COLORS.BACKGROUND_COLOR,
                color: COLORS.LIGHT_GREY,
                fontSize: respFontSize(8, font.sizeFactor),
                alignSelf: 'flex-end',
              }}>
              View More Replies
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginBottom: 32,
        }}>
        <View
          style={{
            borderTopWidth: 1,
            borderColor: '#fff',
            width: 48,
            marginTop: 16,
          }}>
          <Image
            source={avatar}
            style={{
              height: 32,
              width: 32,
              borderRadius: 100,
              position: 'absolute',
              right: 0,
              top: -16,
            }}
          />
        </View>

        <View style={{marginLeft: 14, width: '83%'}}>
          <Text
            style={{
              color: COLORS.WHITE,
              fontSize: respFontSize(12, font.sizeFactor),
            }}>
            Phillip Austin
          </Text>
          <Text
            style={{
              color: COLORS.LIGHT_GREY,
              fontSize: respFontSize(9, font.sizeFactor),
            }}>
            2 Days Ago
          </Text>
          <Text
            style={{
              color: COLORS.LIGHT_GREY,
              marginTop: 8,
              fontSize: respFontSize(10, font.sizeFactor),
            }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CommentComponent;
