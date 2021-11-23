import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function GoalItem(props) {
  const goal = props.item;

  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, goal.key)}>
      <View style={styles.goal}>
        <Text>{goal.value}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  goal: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 5,
  },
});
