import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import { accountRoutes, shoesRoutes } from '../utils/routes'
import { ShoesScreen } from '../features/shoes'
import { AccountScreen } from '../features/account'
import { ShoeDetailsScreen } from '../features/shoes/ShoeDetailsScreen'

export function AppNavigation() {
  return (
    <Routes>
      <Route path={shoesRoutes.home} element={<ShoesScreen />} />
      <Route path={shoesRoutes.shoeDetailsScreen} element={<ShoeDetailsScreen />} />
      <Route path={accountRoutes.accountScreen} element={<AccountScreen />} />
    </Routes>
  )
}
