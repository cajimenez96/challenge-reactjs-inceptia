import React, { FormEvent, useState } from 'react'
import { PASS, USER } from '../../utils/constats';
import { LoginUser } from './require';
import { useNavigate } from "react-router-dom";
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>(USER);
  const [password, setPassword] = useState<string>(PASS);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const login = await LoginUser({email, password})

    if (login) navigate("/reports")  
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
              <Button type="submit">
                <p>Ingresar</p>
              </Button>                  
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
