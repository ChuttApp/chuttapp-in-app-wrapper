import React from 'react'

interface DataListProps<T = unknown> {
    data: T[];
    isLoading?: boolean;
    error?: any;
    isRefetching?: boolean;
    render: (props: { item: T, index: number }) => React.ReactNode;
    onLoadMore?: () => void;
    onRefetch?: () => void;
}

export function DataList<T = any>({ data, render }: DataListProps<T>) {
    return (
        <>
            {
                data.map((item, index) => render({ item, index }))
            }
        </>
    )
}
