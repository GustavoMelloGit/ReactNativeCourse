import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [text, setText] = useState('');
  const [goals, setGoals] = useState([]);
  const [modal, setModal] = useState(false);

  function handleChange(text) {
    setText(text);
  }

  function handleChangeModal() {
    setModal((prev) => !prev);
  }

  function handleDeleteGoal(key) {
    setGoals((prev) => prev.filter((goal) => goal.key !== key));
  }
  function addGoalHandler() {
    if (text.trim().length > 0) {
      setGoals((currentGoals) => [
        ...currentGoals,
        { key: Math.random().toString(), value: text },
      ]);
      setText('');
      setModal(false);
    }
  }

  return (
    <View style={styles.container}>
      <GoalInput
        text={text}
        handleChange={handleChange}
        addGoalHandler={addGoalHandler}
        handleChangeModal={handleChangeModal}
        visible={modal}
      />
      <Button title='Add new Goal' onPress={handleChangeModal} />
      <View style={styles.content}>
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <GoalItem item={item} onDelete={handleDeleteGoal} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  content: {
    flex: 1,
  },
});
