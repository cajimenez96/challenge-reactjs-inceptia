import Axios from "../lib/axios";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface group {
  id: number;
  name: string;
}

export interface LoginResponse {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  profile_image: string | null;
  groups: group[];
  is_active: boolean;
  token: string;
}

export const LoginRequest = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  const response = await Axios.post('login/', payload);
  return response.data;
};
