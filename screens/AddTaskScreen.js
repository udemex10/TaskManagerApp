// screens/AddTaskScreen.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

const AddTaskScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      route.params.addTask({ id: Date.now().toString(), title: task, completed: false });
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Add Task" />
      </Appbar.Header>
      <View style={styles.content}>
        <TextInput
          label="Task"
          value={task}
          onChangeText={setTask}
          style={styles.input}
        />
        <Button mode="contained" onPress={handleAddTask} style={styles.button}>
          Add Task
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default AddTaskScreen;
