import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { IAuthentication, IAuthReducer, IUser } from '../models/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  async (user: IAuthentication, thunkAPI) => {
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
      thunkAPI.dispatch(saveDataInStorage(data));
      return data;
    } catch (e: any) {
      Alert.alert(e.message);
    }
  }
);

export const saveDataInStorage = createAsyncThunk<any, any>(
  'auth/saveDataInStorage',
  async (data) => {
    const user: IUser = data;
    const { expiresIn } = user;
    const expirationDate = new Date(
      new Date().getTime() + parseInt(expiresIn) * 1000
    );
    AsyncStorage.setItem('userData', JSON.stringify({ user, expirationDate }));
  }
);

export const authenticate = createAsyncThunk<IUser, IUser>(
  'auth/authenticateWithToken',
  (user: IUser) => {
    return user;
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
    builder.addCase(authenticate.fulfilled, (state, action) => {
      const { ...user } = action.payload;
      state.user = user;
    });
  },
});

export default authSlice.reducer;
