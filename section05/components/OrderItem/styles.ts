import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../global/theme';

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  content: {
    width: '90%',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  card__inner: {
    padding: 10,
    alignItems: 'center',
  },
  date: {
    color: '#888',
    fontFamily: theme.fonts.primary,
  },
  price: {
    fontFamily: theme.fonts.primaryBold,
    fontSize: 16,
  },
});

export default styles;
