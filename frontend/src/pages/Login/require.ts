import { LoginPayload, LoginRequest, LoginResponse } from "../../api/User";


export const LoginUser = async (form: LoginPayload): Promise<LoginResponse> => {
  return await LoginRequest(form)
  .then((res) => {
    localStorage.setItem('token', res.token);
    return res;
  })
  .catch((err) => {
    console.log('Failed: ', err);
    return err;
  })
};
