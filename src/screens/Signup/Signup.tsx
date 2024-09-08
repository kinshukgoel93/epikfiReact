import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { createUser } from '../../services/userService';
import { CreateUserPayload } from '../../interfaces/userPayloadInterface';
import { StackNavigation } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import { responseInterface } from '../../interfaces/responseInterface';

export const SignupScreen: React.FC = ({ navigation }: any) => {
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [responseMessage ,setResponseMessage] =  useState<string>('');

  const { navigate } = useNavigation<StackNavigation>();

  const handleCreateUser = async () => {
    const payload: CreateUserPayload = {
      name,
      email,
      phoneNumber,
    };

    try {
      const response : responseInterface = await createUser(payload);
      console.log("response",response)
      if(response.Code === 200){
        navigate('Login',response.Msg)  
      }
    } catch (error) {
      setResponseMessage('Failed to create user');
    }
  };


  return (
    <View style={styles.container}>
      {/* <View style={styles.logoContainer}>
         <Image  style={styles.logo} src={'http://drive.google.com/uc?export=view&id=1ZC_Act6Ft1pw5cMzlRMdewCqRLLPZ1TQ'}/>
      </View> */}
      <Text style={styles.title}>BeSPOKE</Text>
      <Text style={styles.subtitle}>For you</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />


        <Button
          mode="contained"
          onPress={handleCreateUser}
          style={styles.loginButton}
          labelStyle={styles.loginButtonLabel}
        >
          Sign up
        </Button>

      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Terms of Service</Text>
        <Text style={styles.footerText}>Privacy Policy</Text>
        <Text style={styles.footerText}>Contact Support</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  loginButton: {
    paddingVertical: 10,
    backgroundColor: '#0077b6',
  },
  loginButtonLabel: {
    fontSize: 18,
    color: '#fff',
  },


  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  footerText: {
    color: 'gray',
    fontSize: 14,
  },
});