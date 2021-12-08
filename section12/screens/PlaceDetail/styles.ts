import { StyleSheet } from 'react-native';
import theme from '../../global/theme';

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: 200,
  },
  text: {
    marginVertical: 20,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.color.primary,
  },
  content: {
    alignItems: 'center',
  },
  mapPreviewWrapper: {
    width: '80%',
    height: 200,
  },
});

export default styles;
