/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Calender from './App/screens/calender/Calender';
// import Calender from './App/screens/calender/Calender';
// import Calender from './App/screens/calender/Calender';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ height: '100%' }}>
      <Calender />
    </SafeAreaView>
  );
}

