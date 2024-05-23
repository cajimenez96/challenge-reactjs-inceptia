import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { PASS, USER } from '../../utils/constats';
import { useNavigate } from "react-router-dom";
import Input from '../../components/Input';
import Button from '../../components/Button';
//Redux
import { LoginUser, isAuthSelector, isLoadingSelector } from '../../redux/slices/authSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Spinner from '../../components/Spinner';

const Login = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);
  const isLoading = useAppSelector(isLoadingSelector);
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>(USER);
  const [password, setPassword] = useState<string>(PASS);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(LoginUser({email, password}))

  };

  useEffect(() => {
    if (isAuth) navigate('/reports')
  }, [isAuth]);

  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded border border-primary shadow bg-white md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl">
              inceptia
            </h1>
            <form className="space-y-4 md:space-y-10" onSubmit={handleSubmit}>
              <div>
                <Input
                  id="email"
                  label="Correo electrónico"
                  type="email"
                  placeholder="nombre@empresa.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Input
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className={`flex items-center justify-center gap-5 ${isLoading && 'cursor-not-allowed'}`}>
                <p>Ingresar</p>
                {isLoading && (
                  <Spinner /> 
                )}
              </Button>                  
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
