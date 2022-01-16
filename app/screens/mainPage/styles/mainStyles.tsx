import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menubar: {
    height: 55,
    backgroundColor: '#008ACE',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cart: {},
  title: {
    color: '#ffffff',
    fontSize: 24,
    paddingLeft: 20,
  },

  productsContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    flex: 1,
  },

  productItem: {
    padding: 10,
    flex: 1,
    width: 158,
    margin: 10,
    minHeight: 160,
    borderRadius: 1,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
  },

  imageStyle: {
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 5,
    width: 100,
    height: 100,
  },

  highlight: {
    fontWeight: '700',
  },
  loadButton: {
    padding: 10,
    backgroundColor: '#008ACE',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadButtonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

export const searchBoxStyles = StyleSheet.create({
  container: {
    padding: 15,
    height: 74,
    borderBottomColor: 'rgba(0, 0, 0, 0.3);',
    elevation: 1,
  },
  searchBar__unclicked: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
  },
  searchBar__clicked: {
    flexDirection: 'row',
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
    alignItems: 'center',
  },
  input: {
    fontSize: 15,
    height: 40,
    marginLeft: 10,
  },
});
