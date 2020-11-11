import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import LoginVM from '../screens/Login/LoginVM';
import HomeVM from '../screens/Home/HomeVM';
import MealScreenVM from '../screens/TheMealList/MealScreenVM';

const Navigator = () => {
  const isAuthenticated = useSelector(
    (state: any) => state.Home.isAuthenticated,
  );
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated === 1 ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginVM}
          />
        ) : isAuthenticated === 2 ? (
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={HomeVM}
          />
        ) : (
          <Stack.Screen
            name="MealScreen"
            options={{headerShown: false}}
            component={MealScreenVM}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
