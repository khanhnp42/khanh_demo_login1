import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './Home.styles';
import {LoginSuccessed} from '../../redux/actions/Login.act';
import {useDispatch} from 'react-redux';

const HomeVM = (props: any) => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(LoginSuccessed(null));
    props.navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Text>Home HomeVM</Text>
      <Button onPress={logOut} title="logOut" />
    </View>
  );
};

export default HomeVM;
