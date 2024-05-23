import Axios from "../lib/axios";
import { Login, User } from "./type";

type LoginPayload = Login;

type LoginResponse = User;

export const LoginRequest = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  const response = await Axios.post('/login/', payload);
  return response.data;
};
