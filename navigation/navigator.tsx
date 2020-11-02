import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginVM from '../screens/Login/LoginVM';
import HomeVM from '../screens/Home/HomeVM';
import {useSelector} from 'react-redux';

const Navigator = () => {
  const isAuthenticated = useSelector(
    (state: any) => state.Home.isAuthenticated,
  );
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={HomeVM}
          />
        ) : (
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginVM}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
