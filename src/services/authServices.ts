import { RegisterRequest } from '@/variables/RegisterRequest';
import { StandardResponse } from '@/variables/Response';
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

export const registerUser = async (userData: RegisterRequest) => {

    const newRequest = {
        name: userData.name,
        email: userData.email,
        password: userData.password
    }
  try {
    const response = await axios.post(`${baseUrl}/users`, newRequest);
    //console.log('User registered successfully:', response.data);
    return response.data as unknown as StandardResponse;
  } catch (error) {
    console.error('Error registering user:');
    throw error;
  }
};

export const LoginUser = async (loginData: any) => {
    try {
      const response = await axios.post(`${baseUrl}/users/login`, loginData);
     // console.log('User registered successfully:', response.data as unknown as StandardResponse);
      return response.data as unknown as StandardResponse
    } catch (error) {
      console.error('Error registering user:');
      throw error;
    }
  };

  export const getUser = async () => {
    try {
      const response = await axios.get(`${baseUrl}/users`);
      console.log('users', response.data);
      return response;
    } catch (error) {
      console.error('Error registering user:');
      throw error;
    }
  };
