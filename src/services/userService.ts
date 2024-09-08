import axios from 'axios';
import { CreateUserPayload } from '../interfaces/userPayloadInterface';

const API_URL = 'http://localhost:3030/api/v1';

export const createUser = async (payload: CreateUserPayload) => {
  try {
    const response = await axios.post(`${API_URL}/createUser`, payload);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const findUser = async (payload: CreateUserPayload) => {
  const params ={ phoneNumber:payload.phoneNumber,loginCode:payload.loginCode}
  try {
    const response = await axios.get(`${API_URL}/findUser`,{params} );
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};