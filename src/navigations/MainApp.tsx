import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppNavigation } from './AppNavigation'

export function MainApp() {
  return (
    <BrowserRouter >
        <AppNavigation />
    </BrowserRouter>
  )
}
