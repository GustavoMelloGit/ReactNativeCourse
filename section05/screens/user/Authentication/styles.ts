import { Dimensions, StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    height: 230,
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.8,
  },
  card__inner: {
    padding: 20,
  },
  gradient: {
    width: '100%',
    height: '100%',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default styles;
