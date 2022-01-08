import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  img: {
    alignSelf: 'center',
    marginTop: 120,
  },
  cartTitle: {
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2196F3',
    margin: 20,
    width: 325,
    height: 40,
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productItem: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    padding: 10,
    elevation: 2,
    borderRadius: 1,
  },

  priceDetails: {
    margin: 20,
    padding: 10,
    elevation: 1,
    borderRadius: 1,
  },
  priceDetailsTitle: {
    fontSize: 25,
    fontWeight: '500',
  },
  priceDetailsGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  changeQuantityGroup: {
    marginTop: 25,
    flexDirection: 'row',
  },
  changeQuantity: {
    flexDirection: 'row',
    height: 30,
  },
  changeQuantityText: {
    marginTop: 7,
  },
  increaseQuantityButton: {
    paddingVertical: 4,
    paddingHorizontal: 9,
    borderWidth: 2,
    borderColor: '#999',
    borderRadius: 20,
    marginLeft: 10,
  },
  decreaseQuantityButton: {
    paddingVertical: 4,
    paddingHorizontal: 11,
    borderWidth: 2,
    borderColor: '#999',
    borderRadius: 20,
    marginRight: 10,
  },
  trash: {
    fontSize: 25,
    alignSelf: 'center',
    marginLeft: 50,
    paddingHorizontal: 10,
  },
});
