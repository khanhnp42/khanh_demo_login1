import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../screens/Home/Home.styles';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MealList = (props: any) => {
  return (
    <View>
      <View style={styles.item}>
        <Text style={styles.TextTitle}>{props.title}</Text>
        <TouchableOpacity onPress={props.onClickEdit}>
          <Ionicons style={styles.icon} name="chatbox-ellipses-outline" />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onClickDelete}>
          <Ionicons style={styles.icon} name="beer-outline" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MealList;
