import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGame from './screens/StartGame';
import Game from './screens/Game';
import GameOver from './screens/GameOver';

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState(undefined);
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setSelectedNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };
  const onResetHandler = () => {
    setSelectedNumber(undefined);
    setGuessRounds(0);
  };

  let content = <StartGame onStartGame={startGameHandler} />;
  if (selectedNumber && guessRounds <= 0) {
    content = <Game userChoice={selectedNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        numberOfRounds={guessRounds}
        userNumber={selectedNumber}
        onReset={onResetHandler}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Header title='Titulo' />
      {content}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
