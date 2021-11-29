import { StyleSheet } from 'react-native';
import theme from '../global/theme';

export const headerStyles = StyleSheet.create({
  title: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.primaryBold,
    fontSize: 17,
  },
});
