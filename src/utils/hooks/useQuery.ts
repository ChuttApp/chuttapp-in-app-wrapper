import { useMemo, useState } from "react";
import { DataResponse, RequestParams } from "../types";
import { _get, useQuery as useQ } from "../query";



type Parameter = Record<string, any> & RequestParams;

export interface useTableQueryOptions {
    query: string;
    queryId: string | string[];
    parameters?: Parameter;
    enabled?: boolean;
}

export function useQuery<T = any>({ query, enabled, queryId, parameters }: useTableQueryOptions) {
    const LIMIT = 10;
    const [page, setPage] = useState(0);
    const parsedParameters = useMemo(() => ({ ...(parameters || {}), ...({limit: LIMIT, from: page}) }), [page, parameters]);

    const parsedId = useMemo(() => {
        const dynamicId = parsedParameters ? JSON.stringify(parsedParameters) : '';
        if (Array.isArray(queryId)) return queryId.map(item => item.concat(dynamicId));
        return queryId + dynamicId
    }, [parsedParameters, queryId])

    const { data: responseData, isLoading, isRefetching, error, refetch,  } = useQ<DataResponse<T>>(parsedId, () =>
        _get(query, parsedParameters),
        {
            enabled,
            keepPreviousData: true
        }
    );

    const { data, totalCount } = responseData || {};

    const loadMore = () => {
        setPage(old => old + LIMIT)
    }

    return {
        data: data || [],
        isLoading,
        isRefetching,
        error: error as any,
        totalCount: totalCount || 0,
        refetch,
        loadMore,
    }
}
