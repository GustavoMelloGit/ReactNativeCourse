import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import { theme } from '../global/theme';

export default function StartGame(props) {
  const [enteredNumber, setEnteredNumber] = useState('');
  const [userConfirmed, setUserConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');

  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
    setUserConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      alert('Please enter a number between 1 and 99');
      return;
    }
    resetInputHandler();
    setUserConfirmed(true);
    setSelectedNumber(parseInt(enteredNumber));
    Keyboard.dismiss();
  };

  const startGameHandler = () => {
    props.onStartGame(selectedNumber);
  };

  let confirmedOutput;
  if (userConfirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title='START GAME' onPress={startGameHandler} />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Start Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            value={enteredNumber}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonWrapper}>
            <View style={styles.button}>
              <Button
                title='Reset'
                color={theme.accent}
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title='Confirm'
                color={theme.primary}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  button: {
    width: 100,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
