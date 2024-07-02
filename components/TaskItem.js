// components/TaskItem.js
import React from 'react';
import { List, Checkbox } from 'react-native-paper';

const TaskItem = ({ task, onToggle }) => {
  return (
    <List.Item
      title={task.title}
      left={() => (
        <Checkbox
          status={task.completed ? 'checked' : 'unchecked'}
          onPress={onToggle}
        />
      )}
    />
  );
};

export default TaskItem;
