import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../../global/theme';

const styles = StyleSheet.create({
  container: {},
  image: {
    height: Dimensions.get('window').width * 0.5,
    width: '100%',
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: theme.fonts.primary,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
    fontFamily: theme.fonts.primary,
  },
  addToCart: {
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default styles;
