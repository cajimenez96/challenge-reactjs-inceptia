import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Report from './pages/Report';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/reports' element={<Report />} />
    </Routes>
  )
}

export default App;