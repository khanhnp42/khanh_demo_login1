import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './Home.styles';

const HomeVM = (props: any) => {
  return (
    <View style={styles.container}>
      <Text>Home HomeVM</Text>
      <Button
        onPress={() => {
          props.navigation.navigate('Login');
        }}
        title="Click to login screens"
      />
    </View>
  );
};

export default HomeVM;
