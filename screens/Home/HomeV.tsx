import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './Home.styles';
import {useDispatch} from 'react-redux';

import LogOut from '../../redux/actions/Home.act';

const HomeV = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(LogOut());
  };
  return (
    <View style={styles.container}>
      <Text>Home Home</Text>
      <Button onPress={logOut} title="logOut" />
    </View>
  );
};

export default HomeV;
