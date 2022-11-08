import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Components
import LoginPage from '../../components/Login/LoginPage';
import RegisterPage from '../../components/Register/RegisterPage';
import HomeScreen from '../../screens/HomePage/HomePage';
import OnBoarding from '../../components/OnBoarding/OnBoarding';
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword';

const onBoradingHeader = {
  headerShown: false,
  headerBackVisible: false,
  headerTintColor: '#fff',
  header: () => <AppHeader isAndroid={isAndroid} />,
  animation: 'slide_from_left',
};

export const AuthStack = () => {
  const AuthNavigation = createNativeStackNavigator();
  return (
    <AuthNavigation.Navigator screenOptions={onBoradingHeader}>
      <AuthNavigation.Screen name={'on-boarding'} component={OnBoarding} />
      <AuthNavigation.Screen name={'register'} component={RegisterPage} />
      <AuthNavigation.Screen name={'login'} component={LoginPage} />
      <AuthNavigation.Screen name={'forget'} component={ForgotPassword} />
    </AuthNavigation.Navigator>
  );
};

export const AppStack = () => {
  const AppNavigation = createNativeStackNavigator();
  return (
    <AppNavigation.Navigator>
      <AppNavigation.Screen name={'HomeScreen'} component={HomeScreen} />
    </AppNavigation.Navigator>
  );
};
