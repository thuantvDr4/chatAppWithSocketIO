/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
} from 'react-native';

import ChatPage from './src/pages/chat/Chat.Page';



const App = () => {
  return (
    <View style={{flex:1}}>
      <ChatPage/>
    </View>
  );
};



export default App;
