/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './Home.styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native-gesture-handler';

import {LogOut, EDIT, DELETE, ADD} from '../../redux/actions/Home.act';
import MealList from '../../components/MealList';

const HomeV = () => {
  const [edit, setEdit] = useState('');
  const [textAddorEdit, setTextAddorEdit] = useState('ADD');
  const [getID, setGetID] = useState('');

  const ArrayObj = useSelector((state: any) => state.Home.obj);

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(LogOut());
  };

  const onClick = () => {
    if (edit != '') {
      if (textAddorEdit === 'ADD') {
        dispatch(ADD(edit));
      } else {
        dispatch(EDIT(getID, edit));
      }
      setEdit('');
      setTextAddorEdit('ADD');
    }
  };

  const renderItem = (dataItem: any) => {
    let id = dataItem.item.id;
    const onClickEdit = () => {
      setGetID(id);
      setEdit(dataItem.item.title);
      setTextAddorEdit('UPDATE');
    };
    const onClickDelete = () => {
      setEdit('');
      setTextAddorEdit('ADD');
      dispatch(DELETE(id));
    };
    return (
      <MealList
        id={dataItem.item.id}
        title={dataItem.item.title}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />
    );
  };
  return (
    <View style={{flex: 2}}>
      <View style={{marginTop: 30}}>
        <TouchableOpacity style={styles.buttonLogout} onPress={logOut}>
          <Text>Log Out</Text>
        </TouchableOpacity>
        <View style={styles.TextInputContainer}>
          <TextInput
            style={styles.TextInput}
            onChangeText={(text) => setEdit(text)}
            value={edit}
          />
          <TouchableOpacity style={styles.buttonClick} onPress={onClick}>
            <Text>{textAddorEdit}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{width: '100%', marginTop: 10}}>
        <FlatList
          data={ArrayObj}
          renderItem={renderItem}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          keyExtractor={(item: any, index) => item.id}
        />
      </View>
    </View>
  );
};

export default HomeV;
