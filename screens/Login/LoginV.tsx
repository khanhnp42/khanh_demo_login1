import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  AsyncStorage,
} from 'react-native';
import styles from './Login.style';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {LoginRequested} from '../../redux/actions/Login.act';
import {useDispatch, useSelector} from 'react-redux';

interface Props {
  LoginV: any;
}

const signInschema = yup.object().shape({
  username: yup.string().min(1).required(),
  password: yup.string().min(1).required(),
});

const LoginV = () => {
  const {register, errors, handleSubmit, setValue} = useForm({
    resolver: yupResolver(signInschema),
    defaultValues: {
      username: '',
      password: '',
    },
  });
  useEffect(() => {
    register('username');
    register('password');
  }, [register]);
  const token = useSelector((state: any) => state.login.token);
  const dispatch = useDispatch();
  const submit = (data: any) => {
    console.log('token+ ', token);
    dispatch(LoginRequested(data.username, data.password));
    AsyncStorage.setItem('token', token);
  };
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <TextInput
        onChangeText={(text) => setValue('username', text)}
        style={styles.input}
        placeholder="userName"
      />
      {errors.username && <Text>You have not entered username</Text>}
      <TextInput
        onChangeText={(text) => setValue('password', text)}
        style={styles.input}
        placeholder="password"
      />
      {errors.password && <Text>You have not entered password</Text>}
      <TouchableOpacity onPress={handleSubmit(submit)}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

//userName 1
//passWord 1

// const mapState = (state: any) => ({
//   LoginV: state.login,
// });

export default LoginV;
