import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  gridItem: {
    flexGrow: 1,
    margin: Dimensions.get('window').width > 400 ? 15 : 5,
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 2 - 30,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 10,
  },
  title: {
    fontFamily: theme.fonts.primaryBold,
    fontSize: 20,
    textAlign: 'right',
  },
});
