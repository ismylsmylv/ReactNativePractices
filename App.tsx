import React from 'react';
import {Image, Text, View, ImageBackground} from 'react-native';
const ProfImg = require('./assets/img/profile.jpeg');
function App(): React.JSX.Element {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'red'}}>
        Hello<Text style={{fontWeight: '700', color: 'white'}}> world</Text>
      </Text>
      {/* <Image source={ProfImg} style={{height: 200, width: 200}} /> */}
      <ImageBackground source={ProfImg}>
        <Text style={{fontSize: 34, color: 'white', padding: 20}}>
          IMage test
        </Text>
      </ImageBackground>
      <Image
        source={{uri: 'https://picsum.photos/200'}}
        style={{height: 200, width: 200}}
      />
    </View>
  );
}
export default App;
