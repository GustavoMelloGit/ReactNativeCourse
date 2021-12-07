import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../global/theme';

const imageSize = 80;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height * 0.16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 15,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  },
  imageWrapper: {
    width: imageSize + 5,
    height: imageSize + 5,
    borderRadius: (imageSize + 5) / 2,
    borderWidth: 3,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  title: {
    fontSize: theme.fontSize.medium_2,
  },
});

export default styles;
