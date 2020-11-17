import React, {useEffect, useCallback} from 'react';
import {useForm} from 'react-hook-form';
import {View, Text, TextInput, Image, TouchableHighlight} from 'react-native';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch} from 'react-redux';

import {LoginRequested} from '../../redux/actions/Login.act';
import styles from './Login.style';

const signInschema = yup.object().shape({
  username: yup.string().min(1).required(),
  password: yup.string().min(1).required(),
});

const LoginV = () => {
  const {register, handleSubmit, setValue, errors} = useForm({
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
  // console.log('>> , ', errors);
  const dispatch = useDispatch();

  const submit = useCallback(
    async (data: any) => {
      await dispatch(LoginRequested(data.username, data.password));
    },
    [dispatch],
  );
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}
        />
        <TextInput
          onChangeText={(text) => setValue('username', text)}
          ref={register}
          style={styles.inputs}
          placeholder="Username"
          underlineColorAndroid="transparent"
        />
        {errors.username && <Text>Enter username</Text>}
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}
        />
        <TextInput
          onChangeText={(text) => setValue('password', text)}
          ref={register}
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
        />
        {errors.password && <Text>Enter password</Text>}
      </View>

      <TouchableHighlight
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={handleSubmit(submit)}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.buttonContainer}>
        <Text>Forgot your password?</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.buttonContainer}>
        <Text>Register</Text>
      </TouchableHighlight>
    </View>
  );
};

export default LoginV;
