import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import LoginV from '../screens/Login/LoginV';
import HomeV from '../screens/Home/HomeV';
import ToDoScreenV from '../screens/ToDo/ToDoScreenV';

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
            options={{headerShown: false}}
            name="Login"
            component={LoginV}
          />
        ) : (
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={HomeV}
          />
        )}
        <Stack.Screen
          name="ToDo"
          options={{headerShown: false}}
          component={ToDoScreenV}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
