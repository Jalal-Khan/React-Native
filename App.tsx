// App.jsx
import React from 'react';
import {Text, View} from 'react-native';
import Home from './src/screens/home/HomeScreen';
// import Home from './src/screens/home/HomeScreen';

const App: React.FC = () => {
  return (
    <View>
      <Text>Hello world</Text>
      <Home />
    </View>
  );
};

export default App;
