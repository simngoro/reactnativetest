import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './homeScreen';
import LoginScreen from './loginScreen';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [isSplashFinished, setIsSplashFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashFinished(true);
    }, 2000); // 
  }, []);

  if (isSplashFinished) {
    return <LoginScreen />;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <Image
        source={require('./../assets/icono.jpg')}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default SplashScreen;
