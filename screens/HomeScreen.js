// screens/HomeScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAB, Appbar, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { TaskContext } from '../TaskContext';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { addTask } = useContext(TaskContext);

  const handleAddTask = (task) => {
    const success = addTask(task);
    if (success) {
      Toast.show({
        type: 'success',
        text1: 'Task Added!',
        position: 'bottom',
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Task Already Added',
        position: 'bottom',
      });
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Welcome to Task Manager" />
      </Appbar.Header>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Hello, User!</Text>
        <Text style={styles.subText}>Manage your tasks efficiently</Text>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('AddTask', { addTask: handleAddTask })}
          style={styles.button}
        >
          Add New Task
        </Button>
      </View>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('AddTask', { addTask: handleAddTask })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    color: 'gray',
    marginTop: 8,
  },
  button: {
    marginTop: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default HomeScreen;
