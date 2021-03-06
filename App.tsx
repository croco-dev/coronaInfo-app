import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import MainWeb from './components/MainWeb';
import RegisterAlam from './components/RegisterAlam';

export default function App() {
  const [register, setRegister] = useState(true);
  async function checkRegister() {
    try {
      const value = await AsyncStorage.getItem('@alam');
      if (value !== null) {
        return setRegister(true);
      } else {
        return setRegister(false);
      }
    } catch (e) {
      return setRegister(false);
    }
  }
  useEffect(() => {
    checkRegister();
  }, []);
  return register ? <MainWeb /> : <RegisterAlam setRegister={setRegister} />;
}
