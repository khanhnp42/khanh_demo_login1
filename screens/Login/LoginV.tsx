import React, {useEffect, useCallback} from 'react';
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

const signInschema = yup.object().shape({
  username: yup.string().min(1).required(),
  password: yup.string().min(1).required(),
});

const LoginV = (props: any) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextScreen = () => {
    props.navigation.navigate('Home');
  };

  const {register, handleSubmit, setValue, watch} = useForm({
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

  const submit = useCallback(
    async (data: any) => {
      await dispatch(LoginRequested(data.username, data.password));
      await AsyncStorage.setItem('token', token);
      setValue('username', '');
      setValue('password', '');
    },
    [dispatch, setValue, token],
  );

  useEffect(() => {
    if (token) {
      nextScreen();
    }
  }, [token, nextScreen]);

  return (
    <View style={styles.container}>
      <Text style={styles.text_login}>Login Screen</Text>
      <TextInput
        onChangeText={(text) => setValue('username', text)}
        value={watch('username') || ''}
        ref={register}
        style={styles.input}
        placeholder="username"
      />
      <TextInput
        onChangeText={(text) => setValue('password', text)}
        value={watch('password') || ''}
        ref={register}
        style={styles.input}
        placeholder="password"
      />
      <TouchableOpacity onPress={handleSubmit(submit)}>
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginV;
