import { StyleSheet } from 'react-native';
import theme from '../../../global/theme';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  productList: {
    paddingBottom: 100,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  totalText: {
    fontFamily: theme.fonts.primaryBold,
    fontSize: 16,
  },
  priceText: {
    fontFamily: theme.fonts.primaryLight,
    color: theme.colors.primary,
  },
  cartItemsTitle: {
    marginVertical: 15,
    fontSize: 20,
    fontFamily: theme.fonts.primary,
  },
});

export default styles;
