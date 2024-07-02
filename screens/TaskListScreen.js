// screens/TaskListScreen.js
import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import TaskItem from '../components/TaskItem';
import { TaskContext } from '../TaskContext';

const TaskListScreen = () => {
  const { tasks, toggleTaskCompletion } = useContext(TaskContext);

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Tasks" />
      </Appbar.Header>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={() => toggleTaskCompletion(item.id)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TaskListScreen;
