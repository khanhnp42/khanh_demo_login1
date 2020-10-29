/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import {View, Text} from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-unused-vars

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }
import React from 'react';
import {Provider} from 'react-redux';

import Navigator from './navigation/navigator';
import store from './redux/store/store';

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
