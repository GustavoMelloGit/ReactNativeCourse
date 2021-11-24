import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function GameOver(props) {
  return (
    <View style={styles.screen}>
      <Text>Game is over</Text>
      <Text>Number of rounds: {props.numberOfRounds}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title='NEW GAME' onPress={props.onReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
