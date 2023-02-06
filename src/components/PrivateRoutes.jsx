import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {useAuthStatus} from '../hooks/useAuthStatus'
import Loader from './Loader'

export default function PrivateRoutes() {
    const {loggedIn,loading} = useAuthStatus()
    if(loading){
        return <Loader />
    }
 return loggedIn?<Outlet />:<Navigate to="/sign-in" />
}
