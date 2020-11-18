import React, {useState, useCallback} from 'react';
import {View, Text, TextInput, Image, TouchableHighlight} from 'react-native';
import {useDispatch} from 'react-redux';

import {LoginRequested} from '../../redux/actions/Login.act';
import styles from './Login.style';

const LoginV = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(LoginRequested(username, password));
  };

  const handleChangeUserName = useCallback((text: any) => {
    setUsername(text);
  }, []);

  const handleChangePassword = useCallback((text: any) => {
    setPassword(text);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}
        />
        <TextInput
          onChangeText={handleChangeUserName}
          style={styles.inputs}
          placeholder="Username"
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}
        />
        <TextInput
          onChangeText={handleChangePassword}
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
        />
      </View>

      <TouchableHighlight
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={submit}>
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
