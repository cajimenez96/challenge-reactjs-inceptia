import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Login, User } from '../../api/type';
import { LoginRequest} from "../../api/User";
import { defaultError } from '../store';

interface IAuth {
  user: User | null;
  isAuth: boolean;
  isLoading: boolean;
  hasError: boolean;
}

const initialState: IAuth = {
  user: null,
  isAuth: false,
  isLoading: false,
  hasError: false
}

export const LoginUser = createAsyncThunk<
  User,
  Login
>('Auth/login', async (form, thunkAPI) => {
  try {
    return await LoginRequest(form);
  } catch (error) {
    return thunkAPI.rejectWithValue(defaultError());
  }
  
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      // state.isAuth = ;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = payload;
    });
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginUser.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
  });
  }
});


// export const { login } = authSlice.actions;

// export const selectIsAuth = (state) => state.isAuth;


