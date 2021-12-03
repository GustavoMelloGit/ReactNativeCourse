import { Dimensions, StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    justifyContent: 'center',
    height: 230,
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
  contentContainerStyle: {
    flexShrink: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
