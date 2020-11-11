import {View, Text, TouchableOpacity} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';

import {OK, CANCEL} from '../redux/actions/Meal.act';
import styles from '../screens/TheMealList/Meal.style';

const AddEdit = () => {
  const dispatch = useDispatch();
  let id = useSelector((state: any) => state.Home.id);
  let title = useSelector((state: any) => state.Home.title);
  let color = useSelector((state: any) => state.Home.color);
  let idMax = useSelector((state: any) => state.Home.idMax);

  if (id === '') {
    id = idMax + '';
  }
  const [stateID, setStateID] = useState(id);
  const [stateTitle, setStateTitle] = useState(title);
  const [stateColor, setStateColor] = useState(color);
  const onClickOk = () => {
    if (stateTitle === '' && stateColor === '') {
      dispatch(CANCEL());
    } else {
      dispatch(OK(stateID, stateTitle, stateColor));
    }
  };
  const onClickCanCel = () => {
    dispatch(CANCEL());
  };
  return (
    <View style={styles.all}>
      <View style={styles.textInput}>
        <TextInput
          style={styles.textIP1}
          editable={false}
          onChangeText={(text) => setStateID(text)}
          value={stateID}
        />
        <TextInput
          style={styles.textIP2}
          placeholder="name"
          onChangeText={(text) => setStateTitle(text)}
          value={stateTitle}
        />
        <TextInput
          style={styles.textIP3}
          placeholder="color"
          onChangeText={(text) => setStateColor(text)}
          value={stateColor}
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

export default AddEdit;
