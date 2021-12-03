import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { IAuthentication } from '../models/store';

const API_KEY = 'AIzaSyAmZs4sUKmHwOwr6cNm0iCRRhbX8z3vI5Q';
export const signUp = createAsyncThunk(
  'auth/signUpThunk',
  async (user: IAuthentication) => {
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...user,
            returnSecureToken: true,
          }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error.message);
      }
      console.log(data);
    } catch (e: any) {
      Alert.alert(e.message);
      throw e;
    }
  }
);

const initialState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
