import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useCallback, useMemo} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useRoute} from '@react-navigation/native';

import styles from '../ToDo/ToDo.style';
import {OK} from '../../redux/actions/ToDo.act';

const signInschema = yup.object().shape({
  title: yup.string().min(1, 'text sort').required('text null'),
  color: yup.string().min(1).required(),
});

const ToDoScreenV = (props: any) => {
  const route: any = useRoute();
  const dispatch = useDispatch();
  let id = route.params.id;
  let title = route.params.title;
  let color = route.params.color;

  let idMax = route.params.idMax;
  let add = 1;

  if (id === '') {
    id = idMax + '';
    add = 1;
  } else {
    add = 2;
  }

  const defaultValues = useMemo(() => {
    if (add === 2) {
      return {
        title: title,
        color: color,
      };
    }
    return {
      title: '',
      color: '',
    };
  }, [add, color, title]);

  const {register, handleSubmit, setValue} = useForm({
    resolver: yupResolver(signInschema),
    defaultValues: defaultValues,
  });
  useEffect(() => {
    register('title');
    register('color');
  }, [register]);

  const onClickOk = useCallback(
    async (data: any) => {
      dispatch(OK(id, data.title, data.color));
      props.navigation.navigate('Home');
    },
    [dispatch, id, props.navigation],
  );

  const onClickCanCel = () => {
    props.navigation.navigate('Home');
  };
  return (
    <View style={styles.all}>
      <View style={styles.textInput}>
        <Text style={styles.textIP1}>{id}</Text>
        <TextInput
          style={styles.textIP2}
          placeholder="title"
          defaultValue={add === 2 ? title : ''}
          onChangeText={(text) => setValue('title', text)}
          ref={register}
        />
        <TextInput
          style={styles.textIP3}
          placeholder="color"
          defaultValue={add === 2 ? color : ''}
          onChangeText={(text) => setValue('color', text)}
          ref={register}
        />
      </View>
      <View style={styles.touchableOpacity}>
        <TouchableOpacity
          onPress={handleSubmit(onClickOk)}
          style={styles.touch1}>
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
