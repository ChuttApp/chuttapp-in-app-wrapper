import React from 'react'
import { DataResponseView } from '../DataResponseView';

interface DataListProps<T = unknown> {
    data: T[];
    isLoading?: boolean;
    error?: any;
    isRefetching?: boolean;
    render: (props: { item: T, index: number }) => React.ReactNode;
    onLoadMore?: () => void;
    onRefetch?: () => void;
}

export function DataList<T = any>({ data, error, isLoading, isRefetching, onRefetch,  render }: DataListProps<T>) {
    return (
        <>
            <DataResponseView
                content={data.map((item, index) => render({ item, index }))}
                data={data}
                error={error}
                isLoading={isLoading!}
                isRefetching={isRefetching}
                onRetry={onRefetch}
            />
        </>
    )
}
