import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native-gesture-handler';
import {CommonActions} from '@react-navigation/native';

import styles from './Home.styles';
import {LogOut, DELETE, ADD, EDIT, SEARCH} from '../../redux/actions/Home.act';
import ToDoList from '../components/ToDoList';

const HomeV = (props: any) => {
  const ArrayObj = useSelector((state: any) => state.Home.obj);

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(LogOut());
  };

  const findIDmax = (obj: any) => {
    let element;
    for (let i = 0; i < obj.length - 1; i++) {
      element = obj[i].id > obj[i + 1].id ? obj[i].id : obj[i + 1].id;
    }
    return parseInt(element) + 1;
  };

  const onSearch = (data: any) => {
    dispatch(SEARCH(data));
  };

  const onClickADD = () => {
    dispatch(ADD());
    props.navigation.dispatch(
      CommonActions.navigate({
        name: 'ToDo',
        params: {
          id: '',
          idMax: findIDmax(ArrayObj),
        },
      }),
    );
  };

  const renderItem = (dataItem: any) => {
    let id = dataItem.item.id;

    const onClickDelete = () => {
      dispatch(DELETE(id));
    };

    const onClickEdit = () => {
      dispatch(
        EDIT(dataItem.item.id, dataItem.item.title, dataItem.item.color),
      );
      props.navigation.navigate('ToDo', {
        id: dataItem.item.id,
        idMax: '',
        title: dataItem.item.title,
        color: dataItem.item.color,
      });
    };

    return (
      <ToDoList
        id={dataItem.item.id}
        title={dataItem.item.title}
        onClickDelete={onClickDelete}
        onClickEdit={onClickEdit}
      />
    );
  };
  return (
    <View>
      <View style={{marginTop: 30}}>
        <TouchableOpacity style={styles.buttonLogout} onPress={logOut}>
          <Text>Log Out</Text>
        </TouchableOpacity>
        <View style={styles.TextInputContainer}>
          <TextInput style={styles.TextInput} onChangeText={onSearch} />
          <TouchableOpacity style={styles.buttonClick} onPress={onClickADD}>
            <Text>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{width: '100%', marginTop: 10}}>
        <FlatList
          data={ArrayObj}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id}
        />
      </View>
    </View>
  );
};

export default HomeV;
