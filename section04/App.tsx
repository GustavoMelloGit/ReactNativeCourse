import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Routes from './routes';
import mealsReducer from './store/reducers/meals';

enableScreens();
export const store = createStore(combineReducers({ meals: mealsReducer }));

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoading, setFontLoading] = useState(true);

  if (fontLoading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoading(false)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
