import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 335,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2196F3',
  },

  buttonClose: {
    margin: 20,
    width: 125,
    height: 40,
  },
  buttonLogin: {
    alignSelf: 'stretch',
    margin: 15,
    width: 100,
    height: 40,
  },
  loginSignUpButtons: {
    flexDirection: 'row',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitleText: {
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
