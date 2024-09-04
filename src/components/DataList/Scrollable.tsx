import React from 'react'
import { DataListContent } from './styled'
import { useAppStyles } from '../../utils'

export function Scrollable({ data, render }: { data: any[]; render: any }) {
    const { safeArea } = useAppStyles()
    return (
        <DataListContent $top={safeArea?.top || 0} $bottom={safeArea?.bottom || 0}>
            {data.map((item, index) => render({ item, index }))}
        </DataListContent>
    )
}
