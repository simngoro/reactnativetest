import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './components/splashScreen';
import LoginScreen from './components/loginScreen';
import HomeScreen from './components/homeScreen';
import SignUpScreen from './components/signUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [userToken, setUserToken] = React.useState(null);

  React.useEffect(() => {

    setUserToken(null);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userToken === null ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : userToken ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}





