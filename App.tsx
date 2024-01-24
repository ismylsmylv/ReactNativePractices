import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
} from 'react-native';
import Navbar from './components/Navbar';
import Message from './components/Message';
const ProfImg = require('./assets/img/profile.jpeg');

function App(): React.JSX.Element {
  const [isDisabled, setisDisabled] = useState(false);
  return (
    <View>
      <Navbar />
      <ScrollView>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </ScrollView>
    </View>
  );
}
export default App;
