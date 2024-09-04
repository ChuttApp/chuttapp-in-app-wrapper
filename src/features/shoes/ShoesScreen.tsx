import React from 'react'
import Screen from '../../components/Screen'
import { useNav } from '../../utils'
import { shoesRoutes } from '../../utils/routes';
import { DataList } from '../../components/DataList';

export function ShoesScreen() {
  const { navigate } = useNav();

  const goToShowDetails = () => {
    navigate(shoesRoutes.shoeDetailsScreen)
  }

  return (
    <Screen
      headerOptions={{
        title: "Shoes",
      }}
    >
      <DataList
        data={[]}
        render={({ item, index }) => <div onClick={goToShowDetails} key={index}>{item}</div>}
      />
    </Screen>
  )
}
