import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  containerADD: {
    flex: 1,
    flexDirection: 'row',
  },

  viewLogOut: {
    marginTop: 30,
  },

  buttonLogout: {
    marginLeft: 300,
    padding: 35,
    width: 150,
  },
  icon: {
    paddingVertical: 0,
    paddingHorizontal: 15,
    fontSize: 30,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 24,
    padding: 35,
    backgroundColor: 'pink',
    fontSize: 30,
    marginHorizontal: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  TextInputContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    flex: 1,
    marginLeft: 30,
    backgroundColor: 'pink',
    fontSize: 20,
  },
  TextTitle: {
    fontSize: 20,
  },
  buttonClick: {
    paddingVertical: 5,
    backgroundColor: 'pink',
    paddingHorizontal: 5,
    marginLeft: 30,
    fontSize: 20,
  },
  viewFlatlist: {
    width: '100%',
    marginTop: 10,
  },
});

export default styles;
