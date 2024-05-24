import React from 'react'
import {Routes as Router, Route, Navigate, Outlet} from 'react-router-dom'
import { Login, Report } from './pages';
import { useAppSelector } from './redux/hooks';
import { isAuthSelector } from './redux/slices/authSlice';

const PrivateRoutes = () => {
  const isAuth = useAppSelector(isAuthSelector);

  if(!isAuth) return <Navigate to='/' replace />

  return <Outlet />
}

const Routes = () => {
  return (
    <Router>
      <Route path='/' element={<Login />}/>
      <Route element={<PrivateRoutes />}>
        <Route path='/reports' element={<Report />} />
      </Route>
    </Router>
  )
}

export default Routes;