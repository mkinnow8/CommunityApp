import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../resources';
import {avatar} from '../../assets/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useAppSelector} from '../../redux/hooks';
import {respFontSize} from '../../utilities/responsiveDimensions';

type Props = {};

const MessageBoxComponent = (props: Props) => {
  const font = useAppSelector(state => state.font);
  return (
    <View style={styles.messageBoxContainer}>
      <Image
        source={avatar}
        style={{
          height: 32,
          width: 32,
          borderRadius: 100,
          borderWidth: 1,
          borderColor: COLORS.BACKGROUND_COLOR,
        }}
      />
      <TextInput
        placeholder="Type message..."
        style={{
          flex: 1,
          marginLeft: 8,
          fontSize: respFontSize(10, font.sizeFactor),
        }}
      />
      <TouchableOpacity>
        <Icon name="send" size={32} color={COLORS.PURPLE} />
      </TouchableOpacity>
    </View>
  );
};

export default MessageBoxComponent;

const styles = StyleSheet.create({
  messageBoxContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 100,
    paddingHorizontal: 8,
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
