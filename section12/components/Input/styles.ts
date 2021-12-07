import { StyleSheet } from 'react-native';
import theme from '../../global/theme';

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: theme.fontSize.medium_2,
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#888',
    marginBottom: 15,
    paddingHorizontal: 5,
    fontSize: theme.fontSize.medium,
  },
});

export default styles;
