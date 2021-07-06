import React from 'react'
//Stacks
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//ScreenNames
import { HOME_PAGE, SEARCH } from './global/screenNames';
import HomePage from './screen/HomePage/HomePage';
import Search from './screen/Search/Search';

const Stack = createStackNavigator();

const MainStack = ({ }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HOME_PAGE}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={HOME_PAGE}
          component={HomePage}
        />
        <Stack.Screen
          name={SEARCH}
          component={Search}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default MainStack;