import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { LoginScreen } from '../components/Auth/Login/LoginScreen';
import { LogoutScreen } from '../components/Auth/Logout/LogoutScreen';
import { RegisterScreen } from '../components/Auth/Register/RegisterScreen';
import { PageNotFound } from '../components/PageNotFound/PageNotFound';

export const AuthRouter = () => {
    return (
        <Routes>
            <Route path="login" element={<LoginScreen/>}/>
            <Route path="register" element={<RegisterScreen/>}/>
            <Route path="logout" element={<LogoutScreen/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}
