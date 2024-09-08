import * as React from 'react';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/Homescreen';
import { SignupScreen } from './src/screens/Signup';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bespoke } from './src/screens/Bespoke';
import { IPOList } from './src/screens/IPOList';
import { Watchlist } from './src/screens/WatchList';
import { Profile } from './src/screens/Profile';
import { Welcome } from './src/screens/Welcome';
import { Login } from './src/screens/Login';

type RootStackParamList = {
  Home: undefined;
  Signup: undefined;
  Bespoke: undefined;
  IPOList: undefined;
  Watchlist: undefined;
  Profile: undefined;
  Welcome : undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export type StackNavigation = NavigationProp<RootStackParamList>;

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      {/* <Stack.Navigator initialRouteName="Welcome"> */}
       <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Bespoke" component={Bespoke} />
      </Stack.Navigator>

      {/* <Tab.Navigator>
        <Tab.Screen name="Bespoke" component={Bespoke} />
        <Tab.Screen name="IPOList" component={IPOList} />
        <Tab.Screen name="Watchlist" component={Watchlist} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}