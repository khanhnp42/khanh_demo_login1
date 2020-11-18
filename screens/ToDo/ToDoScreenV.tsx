/* eslint-disable no-shadow */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useCallback} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';

import styles from '../ToDo/ToDo.style';
import {OK} from '../../redux/actions/ToDo.act';

const ToDoScreenV = (props: any) => {
  const route: any = useRoute();
  const dispatch = useDispatch();
  let id = route.params.id === '' ? route.params.idMax : route.params.id;
  const [title, setTitle] = useState(id === '' ? '' : route.params.title);
  const [color, setColor] = useState(id === '' ? '' : route.params.color);

  const handleOnChangeTitle = useCallback((title: any) => {
    setTitle(title);
  }, []);

  const handleOnChangeColor = useCallback((color: any) => {
    setColor(color);
  }, []);

  const onClickOk = () => {
    dispatch(OK(id, title, color));
    props.navigation.goBack();
  };

  const onClickCanCel = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.all}>
      <View style={styles.textInput}>
        <Text style={styles.textIP1}>{id}</Text>
        <TextInput
          style={styles.textIP2}
          placeholder="title"
          defaultValue={title}
          onChangeText={handleOnChangeTitle}
        />
        <TextInput
          style={styles.textIP3}
          placeholder="color"
          defaultValue={color}
          onChangeText={handleOnChangeColor}
        />
      </View>
      <View style={styles.touchableOpacity}>
        <TouchableOpacity onPress={onClickOk} style={styles.touch1}>
          <Text style={styles.text}>OK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClickCanCel} style={styles.touch1}>
          <Text style={styles.text}>CANCEL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToDoScreenV;
