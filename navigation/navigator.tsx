import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginVM from '../screens/Login/LoginVM';
import HomeVM from '../screens/Home/HomeVM';

const Navigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginVM} />
        <Stack.Screen name="Home" component={HomeVM} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
