import { StyleSheet } from 'react-native';
import theme from '../../../global/theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  title: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.primary,
    fontSize: 18,
  },
});

export default styles;
