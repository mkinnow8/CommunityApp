import {
  View,
  Text,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {
  BackgroundComponent,
  ChatReceiverComponent,
  ChatSenderComponent,
  MessageBoxComponent,
  ProfileHeadingComponent,
} from '../../components';
import {useNavigation} from '@react-navigation/native';

export const chatData = [
  {
    id: '1',
    message:
      'It is a long established fact that a reader will be distracted by the readable content of a page  looking at its layout.',
    time: '5:30 PM',
    sender: false,
  },
  {
    id: '2',
    message:
      'It is a long established fact that a reader will be distracted by the readable content of a page  looking at its layout.',
    time: '5:30 PM',
    sender: true,
  },
  {
    id: '3',
    message: 'It',
    time: '5:30 PM',
    sender: false,
  },
  {
    id: '4',
    message: '',
    time: '5:30 PM',
    sender: true,
  },
  {
    id: '5',
    message:
      'It is a long established fact that a reader will be distracted by the readable content of a page  looking at its layout.',
    time: '5:30 PM',
    sender: false,
  },
  {
    id: '6',
    message:
      'It is a long established fact that a reader will be distracted by the readable content of a page  looking at its layout.',
    time: '5:30 PM',
    sender: false,
  },
];

type Props = {};

const ChatScreen = (props: Props) => {
  const navigation = useNavigation();
  return (
    <BackgroundComponent notTranslucent>
      <View style={{marginHorizontal: 16, flex: 1, paddingVertical: 4}}>
        <ProfileHeadingComponent
          headerLeftIcon="arrow-left"
          headerRightIcon="video-outline"
          headerLeftEvent={() => navigation.goBack()}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
          style={{
            marginTop: 12,
            height: '86%',
          }}
          keyboardVerticalOffset={0}>
          <FlatList
            data={chatData}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) =>
              item.sender ? (
                <ChatSenderComponent item={item} />
              ) : (
                <ChatReceiverComponent item={item} />
              )
            }
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{height: 20}}></View>}
            // ItemSeparatorComponent={<View style={{height:20,}}></View>}
            ListEmptyComponent={<Text>No data to display.</Text>}
          />
        </KeyboardAvoidingView>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <MessageBoxComponent />
        </View>
      </View>
    </BackgroundComponent>
  );
};

export default ChatScreen;
