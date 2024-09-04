import React from 'react'
import { useNav, useQuery } from '../../utils'
import { shoesRoutes } from '../../utils/routes';
import { DataList, Screen } from '@chuttapp/in-app-ui'

export function ShoesScreen() {
  const { navigate } = useNav();
  const {overallData, error, isLoading, isRefetching, hasNextPage, loadMore, refetch} = useQuery({
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
        data={overallData}
        render={({ item, index }) => <div style={{height: 100, borderBottom: '1px solid gray',}} onClick={goToShowDetails} key={index}>{item.title}</div>}
        error={error}
        isLoading={isLoading}
        hasNextPage={hasNextPage}
        isRefetching={isRefetching}
        onLoadMore={loadMore}
        onRefetch={refetch}
      />
    </Screen>
  )
}
