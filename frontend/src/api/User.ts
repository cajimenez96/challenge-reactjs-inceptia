import Axios from "../lib/axios";
import { ILogin, User } from "./type";

type LoginPayload = ILogin;

type LoginResponse = User;

export const LoginRequest = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  const response = await Axios.post('/login/', payload);
  return response.data;
};
