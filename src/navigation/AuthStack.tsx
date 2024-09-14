// src/navigation/AuthStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SignupScreen} from '../screens/Signup';
import {Login} from '../screens/Login';
import { NavigationProp } from '@react-navigation/native';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  MainTabNavigator: undefined ;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export type StackNavigation = NavigationProp<AuthStackParamList>;

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
