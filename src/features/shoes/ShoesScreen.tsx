import React, { useEffect, useState } from 'react'
import Screen from '../../components/Screen'
import { useNav, useQuery } from '../../utils'
import { shoesRoutes } from '../../utils/routes';
import { DataList } from '../../components/DataList';

export function ShoesScreen() {
  const { navigate } = useNav();
  const [shoes, setShoes] = useState<{id: string; title: string}[]>([]);
  const {data, error, isLoading, isRefetching, hasNextPage, loadMore, refetch} = useQuery({
    query: 'https://dummyjson.com/posts',
    queryId: 'tests',
    dataKey: "posts",
    totalRenderedData: shoes.length,
  })

  useEffect(() => {
    setShoes(old => [...old, ...data])
  }, [data])

  console.log({shoes, data})

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
        data={shoes}
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
