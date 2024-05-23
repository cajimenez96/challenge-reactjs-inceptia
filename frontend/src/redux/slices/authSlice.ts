import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Login, User } from '../../api/type';
import { LoginRequest} from "../../api/User";
import { RootState } from "../store";

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
    const response = await LoginRequest(form);
    localStorage.setItem('token', response.token);
    return response;
  } catch (error) {
    return error;
  }
});

const authSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(LoginUser.fulfilled, (state, action) => {
			state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload;
		});
		builder.addCase(LoginUser.pending, (state, action) => {
			state.isLoading = true;
		});
	}
});

export const isAuthSelector = (state: RootState) => state.auth.isAuth;
export const isLoadingSelector = (state: RootState) => state.auth.isLoading;

export default authSlice.reducer;