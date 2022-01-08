import {StyleSheet} from 'react-native';

export const productDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  heartIcon: {
    marginRight: 25,
    //marginTop: 10,
  },

  productDetails: {
    alignItems: 'flex-start',
    marginHorizontal: 20,
    color: '#4A4A4A',
  },

  productImage: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingVertical: 20,
  },

  productDetailsImage: {
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 5,
    width: 250,
    height: 250,
  },

  productImageSection: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },

  detailsBlock: {
    borderTopColor: '#eeeeee',
    borderTopWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingVertical: 15,
    alignItems: 'flex-start',
    width: '100%',
  },

  sectionTitle: {
    fontSize: 25,
    fontWeight: '500',
  },
  selectColorOptions: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F7F7F7',
  },

  productTitlePrice: {
    marginVertical: 20,
    alignItems: 'flex-start',
  },

  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2196F3',
    margin: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    maxWidth: 500,
    height: 40,
  },
  textStyle: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
