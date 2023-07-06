import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreens from './src/views/screens/HomeScreen';
import DetailsScreen from './src/views/screens/DetailsScreen';
import { StatusBar } from 'react-native';
import COLORS from './src/consts/colors';

const Stack = createStackNavigator()


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content"/>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='HomeScreen' component={HomeScreens}/>
        <Stack.Screen name='DetailsScreen' component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;