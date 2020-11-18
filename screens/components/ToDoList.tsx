import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../Home/Home.styles';
const ToDoList = (props: any) => {
  const [isChecked, setisChecked] = useState(false);
  const onChecked = () => {
    setisChecked(!isChecked);
  };
  return (
    <View>
      <TouchableOpacity
        style={isChecked === false ? styles.item : styles.item1}>
        <TouchableOpacity onPress={onChecked}>
          <Icon
            style={styles.icon}
            name={
              isChecked === false
                ? 'ellipse-outline'
                : 'checkmark-circle-outline'
            }
          />
        </TouchableOpacity>

        <Text style={styles.TextTitle}>{props.title}</Text>

        <TouchableOpacity onPress={props.onClickEdit}>
          <Icon style={styles.icon} name="chatbox-ellipses-outline" />
        </TouchableOpacity>

        <TouchableOpacity onPress={props.onClickDelete}>
          <Icon style={styles.icon} name="beer-outline" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoList;
