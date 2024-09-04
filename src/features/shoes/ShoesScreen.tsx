import React from 'react'
import Screen from '../../components/Screen'
import { Button } from '../../components/button'

export function ShoesScreen() {
  return (
    <Screen
      headerOptions={{
        title: "Shoes",
      }}
    >
      <Button>Shoe</Button>
    </Screen>
  )
}
