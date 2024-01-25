import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  TextInput,
  StatusBar,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from 'react-native';
import Navbar from './components/Navbar';
import Message from './components/Message';
import Greet from './components/Greet';
import StyledCard from './components/StyledCard';
import Box from './components/Box';
const ProfImg = require('./assets/img/profile.jpeg');

function App(): React.JSX.Element {
  const [modal, setmodal] = useState(false);
  const [isDisabled, setisDisabled] = useState(false);
  const [text, settext] = useState('');
  return (
    <View>
      <Navbar />
      {/* <ActivityIndicator size="large" /> */}
      <ActivityIndicator size="small" color={'red'} animating={isDisabled} />
      <StatusBar backgroundColor="#008069" />
      <Text>Modal</Text>

      <Button
        title="Open modal"
        onPress={() => {
          // <StatusBar hidden />;
          setmodal(!modal);
        }}></Button>
      <Button
        title="Turn on"
        onPress={() => {
          setisDisabled(!isDisabled);
        }}></Button>
      <Button
        title="Alert"
        onPress={() => {
          Alert.alert('Alerted', 'Hello there', [
            {
              text: 'General Kenobi',
              onPress: () => Alert.alert('Good job'),
            },
            {
              text: 'The What?',
              onPress: () => Alert.alert('Pff'),
            },
          ]);
        }}></Button>
      <ScrollView>
        <Greet name={'Ken'} />
        <Greet name={'Taylor'} />
        <Message />
        {/* <Message />
        <Message />
        <Message />
        <Message /> */}
      </ScrollView>
      <Modal
        visible={modal}
        onRequestClose={() => setmodal(false)}
        animationType="slide">
        <View>
          <Text>Enter text</Text>
          {/* <TextInput onChange={(e)=>{
            settext(e.target)
          }}></TextInput> */}
          <Button
            title="close"
            onPress={() => {
              setmodal(!modal);
            }}></Button>
        </View>
      </Modal>
      {/* <StyledCard /> */}
      <View style={styles.container}>
        <Box styles={styles} children={['text1', 'dfdsdf', 'sdfs']} />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'green',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    flexDirection: 'column-reverse',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});
