// App.js
import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import Toast from 'react-native-toast-message';
import { TaskProvider } from './TaskContext';

const App = () => {
  return (
    <TaskProvider>
      <AppNavigator />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </TaskProvider>
  );
};

export default App;
