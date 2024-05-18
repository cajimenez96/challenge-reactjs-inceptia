import React, { FormEvent, useState } from 'react'
import { PASS, USER } from '../../utils/constats';
import { LoginUser } from './require';
import { useNavigate } from "react-router-dom";

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
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl">
                    inceptia
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                        <input 
                          type="email" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          name="email" 
                          id="email" 
                          className="" 
                          placeholder="name@company.com" 
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          className=""
                        />
                    </div>

                    <button type="submit" className="w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center">Ingresar</button>
                    
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Login;
