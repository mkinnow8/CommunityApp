import {View, Text, StyleSheet, Image} from 'react-native';
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

const ChatSenderComponent = ({item}: Props) => {
  return (
    <View style={[styles.chatSenderContainer]}>
      <View style={styles.chatBackground}>
        <Text style={styles.chatText}>{item.message}</Text>
        <View style={styles.rowDirection}>
          <Icon name="clock-time-four-outline" size={12} color={COLORS.WHITE} />
          <Text style={{marginLeft: 4, color: COLORS.WHITE, fontSize: 12}}>
            {item.time}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChatSenderComponent;
const styles = StyleSheet.create({
  chatSenderContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    margin: 8,
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  chatBackground: {
    backgroundColor: COLORS.PURPLE,
    maxWidth: '67%',
    borderRadius: 20,
    borderTopRightRadius: 0,
    padding: 12,
  },
  chatText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.WHITE,
    textAlign: 'justify',
  },
});
