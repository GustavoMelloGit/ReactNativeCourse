import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { IAuthentication, IAuthReducer, IUser } from '../models/auth';

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
      Alert.alert('Signed in with success!');
    } catch (e: any) {
      Alert.alert(e.message);
      throw e;
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logInThunk',
  async (user: IAuthentication) => {
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
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
      const data: IUser = await response.json();
      if (!response.ok) {
        Alert.alert('Something went wrong');
      }
      return data;
    } catch (e: any) {
      Alert.alert(e.message);
    }
  }
);

const initialState: IAuthReducer = {
  user: {} as IUser,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, () => {});
    builder.addCase(logIn.pending, (state, action) => {
      (state.status = 'loading'), (state.error = null);
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      if (action.payload) {
        const { ...user } = action.payload;
        state.user = user;
        state.status = 'idle';
        state.error = null;
      }
    });
  },
});

export default authSlice.reducer;
