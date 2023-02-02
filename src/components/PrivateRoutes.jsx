import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoutes() {
    const loggedIN=false
  return loggedIN?<Outlet />:<Navigate to="/sign-in" />
}
