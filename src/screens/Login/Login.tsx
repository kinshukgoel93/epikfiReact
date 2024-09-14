import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { CreateUserPayload } from '../../interfaces/userPayloadInterface';
import { findUser } from '../../services/userService';
import { responseInterface } from '../../interfaces/responseInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../../App';
import { AuthStackParamList, StackNavigation } from '../../navigation/AuthStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [loginCode, setLoginCode] = useState<string>('');
  const [responseMessage ,setResponseMessage] =  useState<string>('');
  const { login } = useContext(AuthContext);
  type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;
  const { navigate } = useNavigation<StackNavigation>();

  const onCreatingNewAccount = () => {
    navigate('Register')
  }

  const onLogin = async () =>{ 
    const payload: CreateUserPayload = {
      phoneNumber,
      loginCode
    };

    try {
      const response : responseInterface = await findUser(payload);
      console.log("response",response)
      if(response.Code === 200){
        await login(); 
      }
    } catch (error) {
      setResponseMessage('Failed to create user');
    }

  }

  return (
    <View style={styles.container}>
      {/* <Image
        source={require('./assets/login-illustration.png')} // Replace with the actual path of your illustration image
        style={styles.illustration}
      /> */}

      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          keyboardType='number-pad'
          onChangeText={setPhoneNumber}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Code"
          style={styles.input}
          secureTextEntry
          onChangeText={setLoginCode}
        />
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={()=>onLogin()}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>


      <Text style={styles.footerText}>
        New to BeSPOKE?{' '}
        <Text style={styles.registerText} onPress={()=>onCreatingNewAccount()}>Register</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  illustration: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  forgotText: {
    color: '#007bff',
    fontSize: 14,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  footerText: {
    color: '#aaa',
    fontSize: 14,
  },
  registerText: {
    color: '#007bff',
  },
});
