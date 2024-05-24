import React, { FormEvent, useContext, useState } from 'react'
import { PASS, USER } from '../../utils/constats';
import { LoginUser } from './require';
import { useNavigate } from "react-router-dom";
import Input from '../../components/Input';
import Button from '../../components/Button';
import {AuthContext} from '../../context/AuthContext';
import Spinner from '../../components/Spinner';
import { ILogin } from '../../api/type';


const Login = () => {
  const INITIAL_STATE = {
    email: USER,
    password: PASS
  };

  const {setAuthenticated, isLoading, setIsLoading} = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState<ILogin>(INITIAL_STATE);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(!isLoading);
    e.preventDefault();
    
    const login = await LoginUser(form, setAuthenticated, setIsLoading);
    if (login) navigate('/reports')
  };

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
                  name="email"
                  placeholder="nombre@empresa.com"
                  onChange={handleFormChange}
                />
              </div>
              <div>
                <Input
                  id="password"
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="••••••••"
                  onChange={handleFormChange}
                />
              </div>
              <Button type="submit" className={`flex justify-center items-center gap-4 ${isLoading && 'cursor-wait'}`}>
                <p>Ingresar</p>
                {isLoading && (<Spinner />)}
              </Button>                  
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
