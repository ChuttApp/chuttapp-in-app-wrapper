import React from 'react'
import { DataResponseView } from '../DataResponseView';
import { DataListContent } from './styled';
import { useAppStyles } from '../../utils';
import useInfiniteScroll from 'react-infinite-scroll-hook';

interface DataListProps<T = unknown> {
    data: T[];
    isLoading?: boolean;
    error?: any;
    isRefetching?: boolean;
    hasNextPage?: boolean;
    render: (props: { item: T, index: number }) => React.ReactNode;
    onLoadMore: () => void;
    onRefetch?: () => void;
}

export function DataList<T = any>({ data, error, isLoading, isRefetching, hasNextPage, onRefetch, onLoadMore, render }: DataListProps<T>) {
    const { safeArea } = useAppStyles();
    const [sentryRef, { rootRef }] = useInfiniteScroll({
        loading: isLoading!,
        hasNextPage: hasNextPage!,
        disabled: !!error,
        rootMargin: '0px 0px 100px 0px',
        onLoadMore,
    });

    return (
        <DataResponseView
            content={(
                <DataListContent ref={rootRef} $top={safeArea?.top || 0} $bottom={safeArea?.bottom || 0}>
                    {data.map((item, index) => render({ item, index }))}
                    <div ref={sentryRef}>Loading</div>
                </DataListContent>
            )}
            data={data}
            error={error}
            isLoading={isLoading!}
            isRefetching={isRefetching}
            onRetry={onRefetch}
        />
    )
}
