import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { Provider } from 'react-redux';
import { store } from './store';
import { init } from './helpers/db';

init()
  .then(() => console.log('Sucesso'))
  .catch((err) => console.log('Erro' + err));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
