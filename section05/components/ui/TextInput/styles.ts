import { StyleSheet } from 'react-native';
import theme from '../../../global/theme';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontFamily: theme.fonts.primaryBold,
    color: 'black',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#888',
    paddingVertical: 5,
    fontSize: 16,
  },
});

export default styles;
