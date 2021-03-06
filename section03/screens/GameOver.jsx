import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import Success from '../assets/success.png';
import MainButton from '../components/MainButton';
import { theme } from '../global/theme';

export default function GameOver(props) {
  const { numberOfRounds, userNumber, onReset } = props;
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.title}>Game is over</Text>
        <View style={styles.imageWrapper}>
          <Image source={Success} style={styles.image} />
        </View>
        <Text style={styles.content}>Number of rounds: {numberOfRounds}</Text>
        <Text style={styles.content}>Number was: {userNumber}</Text>
        <MainButton title='NEW GAME' onPress={onReset} color={theme.primary} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageWrapper: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30,
  },
  title: {
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
    color: theme.primary,
    fontFamily: theme.fonts.PrimaryBold,
  },
  content: {
    fontSize: 16,
    color: 'black',
    fontFamily: theme.fonts.Primary,
    marginVertical: 5,
  },
});
