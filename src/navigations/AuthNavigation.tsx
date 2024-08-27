import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import { authRoutes } from '../utils/routes'
import { SignInScreen } from '../features/auth'

export function AuthNavigation() {
    return (
        <Routes>
            <Route path={authRoutes.signInScreen} element={<SignInScreen />} />
        </Routes>
    )
}
