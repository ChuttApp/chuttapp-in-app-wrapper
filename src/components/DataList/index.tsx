import React from 'react'
import { DataResponseView } from '../DataResponseView';
import { DataListContent } from './styled';
import { useAppStyles } from '../../utils';

interface DataListProps<T = unknown> {
    data: T[];
    isLoading?: boolean;
    error?: any;
    isRefetching?: boolean;
    render: (props: { item: T, index: number }) => React.ReactNode;
    onLoadMore?: () => void;
    onRefetch?: () => void;
}

export function DataList<T = any>({ data, error, isLoading, isRefetching, onRefetch, render }: DataListProps<T>) {
    const {safeArea} = useAppStyles()
    const Content = (
        <div style={{ overflow: 'auto' }}>
            {data.map((item, index) => render({ item, index }))}
        </div>
    )
    return (
        <DataResponseView
            content={<DataListContent $top={safeArea?.top || 0} $bottom={safeArea?.bottom || 0}>{Content}</DataListContent>}
            data={data}
            error={error}
            isLoading={isLoading!}
            isRefetching={isRefetching}
            onRetry={onRefetch}
        />
    )
}
