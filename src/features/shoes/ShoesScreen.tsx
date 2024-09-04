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
        data={[...Array.from({length: 50}, ((_, k) => k+1))]}
        render={({ item, index }) => <div style={{height: 100, borderBottom: '1px solid gray',}} onClick={goToShowDetails} key={index}>{item}</div>}
      />
    </Screen>
  )
}
