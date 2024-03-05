/**
 * My To Do List App
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainLayout from './src/layouts/MainLayout';

function App() {
  const Stack = createStackNavigator();

  const ShowHomeScreen = () => {
    return (
      <MainLayout>
        <HomeScreen></HomeScreen>
      </MainLayout>
    );
  };

  const ShowAboutScreen = () => {
    return (
      <MainLayout>
        <AboutScreen></AboutScreen>
      </MainLayout>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="About1" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
