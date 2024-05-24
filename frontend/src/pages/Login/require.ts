import { LoginRequest} from "../../api/User";
import { ILogin, User } from "../../api/type";

export const LoginUser = async (
  form: ILogin,
  setAuth: (value: boolean) => void,
  setLoading: (value: boolean) => void,
) : Promise<User> => {
  return await LoginRequest(form)
  .then((res) => {
    if (res.login_status === 'SUCCESS') {
      localStorage.setItem('token', res.token);
      setAuth(true);
      return res;
    }
  })
  .catch((err) => {
    console.log('Failed: ', err);
    return err;
  })
  .finally(() => setLoading(false));
};
