import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import MealsNavigation from './routes/MealsNavigation';

enableScreens();

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
    <NavigationContainer>
      <MealsNavigation />
    </NavigationContainer>
  );
}
