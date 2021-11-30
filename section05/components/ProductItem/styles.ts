import { StyleSheet } from 'react-native';
import theme from '../../global/theme';

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '60%',
  },
  content: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    fontFamily: theme.fonts.primary,
  },
  price: {
    fontSize: 14,
    color: '#888',
    fontFamily: theme.fonts.primary,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default styles;
