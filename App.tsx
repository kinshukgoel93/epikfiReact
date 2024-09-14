// App.tsx
import React, { useState, useEffect, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './src/navigation/AuthStack';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import {SplashScreen} from './src/screens/Splash';

// Create a context to manage login state
interface AuthContextProps {
  login: () => Promise<void>;
  logout: () => Promise<void>;
  userToken: string | null;
}

export const AuthContext = createContext<AuthContextProps>({
  login: async () => {},
  logout: async () => {},
  userToken: null,
});

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState<string | null>(null);

  const login = async () => {
    await AsyncStorage.setItem('userToken', 'dummy-auth-token');
    setUserToken('dummy-auth-token');
  };

  const logout = async () => {
    await AsyncStorage.removeItem('userToken');
    setUserToken(null);
  };

  useEffect(() => {
    const checkUserToken = async () => {
      try {
        // Simulating Splash Screen delay
        setTimeout(async () => {
          const token = await AsyncStorage.getItem('userToken');
          setUserToken(token);
          setIsLoading(false);
        }, 2000);
      } catch (e) {
        console.error(e);
      }
    };
    checkUserToken();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={{ login, logout, userToken }}>
    <NavigationContainer>
      {userToken ? <MainTabNavigator /> : <AuthStack />}
    </NavigationContainer>
  </AuthContext.Provider>
  );
};

export default App;
