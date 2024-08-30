import React from 'react'
import Screen from '../../components/Screen'
import { IconButton } from '../../components/button'
import { IconAccounts } from '../../components/icons'

export function ShoesScreen() {
  return (
    <Screen
      headerOptions={{
        title: "Shoes",
        right: (
          <>
          <IconButton icon={<IconAccounts />} />
          </>
        )
      }}
    />
  )
}
