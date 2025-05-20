import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function Auth() {
    const loc = useLocation();
    console.log(loc);
    return (
        <>
            {
                localStorage.getItem('token') ? <Outlet /> : <Navigate to="/login" state={loc.pathname} />
            }</>
    )
}

export default Auth