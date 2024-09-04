import React from 'react'
import Screen from '../../components/Screen'
import { Button } from '../../components/button'
import { useNav } from '../../utils'
import { shoesRoutes } from '../../utils/routes';

export function ShoesScreen() {
  const {navigate} = useNav();

  return (
    <Screen
      headerOptions={{
        title: "Shoes",
      }}
    >
      <div style={{margin: 40}}>
      <Button onClick={() => navigate(shoesRoutes.shoeDetailsScreen)}>Shoe</Button>
      </div>
    </Screen>
  )
}
