import { StyleSheet } from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textContent: {
    fontFamily: theme.fonts.primary,
  },
  title: {
    fontSize: 23,
    fontFamily: theme.fonts.primaryBold,
  },
  infoWrapper: {
    width: '90%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cecece',
  },
});
