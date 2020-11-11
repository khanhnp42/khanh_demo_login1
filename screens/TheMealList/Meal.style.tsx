import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  all: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00FFFF',
  },
  textInput: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    backgroundColor: 'pink',
    margin: 15,
    height: 150,
    width: 300,
    borderRadius: 10,
    overflow: 'hidden',
  },
  textIP1: {
    fontSize: 20,
  },
  textIP2: {
    fontSize: 20,
    paddingVertical: 40,
  },
  textIP3: {
    fontSize: 20,
  },
  touchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    padding: 35,
  },
  touch1: {
    paddingHorizontal: 35,
  },
  touch2: {
    paddingHorizontal: 35,
  },
  text: {
    fontSize: 20,
    backgroundColor: 'pink',
  },
});
export default styles;
