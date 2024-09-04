import React from 'react'
import Screen from '../../components/Screen'
import { useNav, useQuery } from '../../utils'
import { shoesRoutes } from '../../utils/routes';
import { DataList } from '../../components/DataList';

export function ShoesScreen() {
  const { navigate } = useNav();
  const {data, error, isLoading, isRefetching, loadMore, refetch} = useQuery({
    query: 'https://dummyjson.com/posts',
    queryId: 'tests',
    dataKey: "posts",
  })

  const goToShowDetails = () => {
    navigate(shoesRoutes.shoeDetailsScreen)
  }

  return (
    <Screen
      headerOptions={{
        title: "Shoes",
      }}
    >
      <DataList<{id: string; title: string}>
        data={data}
        render={({ item, index }) => <div style={{height: 100, borderBottom: '1px solid gray',}} onClick={goToShowDetails} key={index}>{item.title}</div>}
        error={error}
        isLoading={isLoading}
        isRefetching={isRefetching}
        onLoadMore={loadMore}
        onRefetch={refetch}
      />
    </Screen>
  )
}
