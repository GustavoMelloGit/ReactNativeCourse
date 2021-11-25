import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import BodyText from '../components/BodyText';
import Card from '../components/Card';
import Input from '../components/Input';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import { theme } from '../global/theme';

export default function StartGame(props) {
  const [enteredNumber, setEnteredNumber] = useState('');
  const [userConfirmed, setUserConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get('window').width / 4
  );

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 4);
    };
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  }, []);

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
        <Text style={{ fontSize: 18 }}>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton
          title='START GAME'
          onPress={startGameHandler}
          color={theme.primary}
        />
      </Card>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <Text style={styles.title}>Start Game</Text>
            <Card style={styles.inputContainer}>
              <BodyText>Select a number</BodyText>
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
      </KeyboardAvoidingView>
    </ScrollView>
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
    fontFamily: theme.fonts.PrimaryBold,
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  inputContainer: {
    width: '80%',
    maxWidth: '95%',
    minWidth: 300,
    alignItems: 'center',
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  button: {
    width: Dimensions.get('window').width / 4,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
