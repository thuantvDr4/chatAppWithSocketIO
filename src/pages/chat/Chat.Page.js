import React,{useState, useCallback, useEffect} from 'react';
import {styles} from "./Chat.styles";
import {View, Text, SafeAreaView} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'


const ChatApp =()=>{
  const [messages, setMessages] = useState([]);

  //
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  //
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  //
  return(
    <SafeAreaView style={styles.safe_view}>
      <View style={styles.wrap_ctn}>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default ChatApp;
