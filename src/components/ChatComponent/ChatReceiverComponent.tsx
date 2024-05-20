import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {COLORS} from '../../resources';

type Props = {
  item: {
    id: string;
    message: string;
    time: string;
    sender: boolean;
  };
};

const ChatReceiverComponent = ({item}: Props) => {
  return (
    <View style={[styles.chatReceiverContainer]}>
      <View style={styles.chatBackground}>
        <Text style={styles.chatText}>{item.message}</Text>
        <View style={styles.rowDirection}>
          <Icon
            name="clock-time-four-outline"
            size={12}
            color={COLORS.BACKGROUND_COLOR}
          />
          <Text
            style={{
              marginLeft: 4,
              color: COLORS.BACKGROUND_COLOR,
              fontSize: 12,
            }}>
            {item.time}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChatReceiverComponent;

const styles = StyleSheet.create({
  chatReceiverContainer: {
    flexDirection: 'row',
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  chatBackground: {
    backgroundColor: COLORS.WHITE,
    maxWidth: '67%',
    borderRadius: 20,
    borderTopLeftRadius: 0,
    padding: 12,
  },
  chatText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.BACKGROUND_COLOR,
    textAlign: 'justify',
  },
});
