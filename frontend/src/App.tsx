import React from 'react';
import AuthProvider from './context/AuthContext';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {  
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;