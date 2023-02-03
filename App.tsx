import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculadoraScreen} from './src/screens/CalculadoraScreen';

export const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};
