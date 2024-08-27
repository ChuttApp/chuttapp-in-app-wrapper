import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import { accountRoutes, shoesRoutes } from '../utils/routes'
import { ShoesScreen } from '../features/shoes'
import { AccountScreen } from '../features/account'

export function AppNavigation() {
  return (
    <Routes>
      <Route path={shoesRoutes.shoesScreen} element={<ShoesScreen />} />
      <Route path={accountRoutes.accountScreen} element={<AccountScreen />} />
    </Routes>
  )
}
