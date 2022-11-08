// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AuthStack, AppStack} from '../StackNavigation/StackNavigation';

const MainNavigator = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator>
        <MainNavigator.Group screenOptions={{headerShown: false}}>
          <MainNavigator.Screen
            name={'on-boarding-screen'}
            component={AuthStack}
          />
        </MainNavigator.Group>
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
