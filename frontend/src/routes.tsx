import React from 'react'
import {Routes as Router, Route, Navigate, Outlet} from 'react-router-dom'
// import { AuthContext } from './context/AuthContext'
import Login from './pages/Login'
import Report from './pages/Report'
import { useAppSelector } from './redux/hooks'

const PrivateRoutes = () => {
  // const { authenticated } = useContext(AuthContext);
  const isAuth = useAppSelector((state) => state)


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