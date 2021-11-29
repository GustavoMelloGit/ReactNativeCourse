import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../global/theme';

const styles = StyleSheet.create({
  container: {
    height: 165,
    width: Dimensions.get('window').width * 0.8,
    marginVertical: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 10,
    elevation: 3,
  },
  header: {
    fontFamily: theme.fonts.primaryBold,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    fontSize: 20,
    padding: 5,
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
});

export default styles;
