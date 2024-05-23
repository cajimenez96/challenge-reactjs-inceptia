import React, { useContext } from 'react';
import AuthProvider from './context/AuthContext';
import Routes from './routes';

const App = () => {  
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  )
}

export default App;