import React from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

export default function GoalInput(props) {
  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.header}>
        <TextInput
          placeholder='Course goal'
          style={styles.input}
          value={props.text}
          onChangeText={props.handleChange}
        />
        <Button
          title='Add goal'
          onPress={props.addGoalHandler}
          style={styles.addGoalButton}
        />
        <Button title='Close modal' onPress={props.handleChangeModal} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%',
  },
  header: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addGoalButton: {
    marginVertical: 50,
  },
});
