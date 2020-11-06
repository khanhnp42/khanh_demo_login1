import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const MealScreen = () => {
  return (
    <View style={styles.list}>
      <Text>Khanh Dz</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00FFFF',
  },
});

export default MealScreen;
