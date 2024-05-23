import { LoginRequest} from "../../api/User";
import { Login, User } from "../../api/type";

export const LoginUser = async (
  form: Login,
  setState: (value: boolean) => void)
: Promise<User> => {
  return await LoginRequest(form)
  .then((res) => {
    if (res.login_status === 'SUCCESS') {
      setState(true);
      localStorage.setItem('token', res.token);
      return res;
    }
  })
  .catch((err) => {
    console.log('Failed: ', err);
    return err;
  })
};
