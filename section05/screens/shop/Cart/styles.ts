import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},
  priceWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
  priceText: {},
  priceWrapper__inner: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default styles;
