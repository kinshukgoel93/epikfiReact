import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import  { StackNavigation}  from '../../../App'

export const Welcome = () => {
  const { navigate } = useNavigation<StackNavigation>();

  const onCreatingNewAccount = () => {
    navigate('Signup')
  }

  const onContinuewithLogin = () => {
    navigate('Login')
  }
    
  return (
    <View style={styles.container}>
      {/* <Image
        src={'http://drive.google.com/uc?export=view&id=1ZC_Act6Ft1pw5cMzlRMdewCqRLLPZ1TQ'}
        style={styles.logo}
      /> */}
      <Text style={styles.title}>Welcome to BeSpoke by EPIFI</Text>
      
      <TouchableOpacity style={styles.button} onPress={()=> onCreatingNewAccount() }>
        <Text style={styles.buttonText}>Open a new account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=>onContinuewithLogin()}>
        <Text style={styles.buttonText}>Login to BeSpoke</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
  footerText: {
    fontSize: 12,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 50,
  },
  link: {
    color: '#007bff',
  },
});
