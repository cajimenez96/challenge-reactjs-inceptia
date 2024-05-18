import { LoginRequest} from "../../api/User";
import { Login, User } from "../../api/interface";


export const LoginUser = async (form: Login): Promise<User> => {
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
