import React from 'react';
import { Provider } from 'react-redux';
import store from './circleCI/store';
import AppRouter from './circleCI/Router';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
