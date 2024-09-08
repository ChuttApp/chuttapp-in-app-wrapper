import React from 'react'
import { DataList, Screen, useQuery } from '@chuttapp/in-app-react'
import { ShoeItem } from './ShoeItem';

export function ShoesScreen() {
  const {overallData, error, isLoading, isRefetching, hasNextPage, loadMore, refetch} = useQuery({
    query: 'https://dummyjson.com/posts',
    queryId: 'tests',
    dataKey: "posts",
  })

  return (
    <Screen
      headerOptions={{
        title: "Shoes",
      }}
    >
      <DataList<{id: string; title: string}>
        data={overallData}
        render={({ item, index }) => <ShoeItem item={item} key={index} />}
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
