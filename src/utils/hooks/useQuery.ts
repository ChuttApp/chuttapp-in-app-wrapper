import { useEffect, useMemo, useState } from "react";
import { DataResponse, RequestParams } from "../types";
import { _get, useQuery as useQ } from "../query";



type Parameter = Record<string, any> & RequestParams;

export interface useTableQueryOptions {
    query: string;
    queryId: string | string[];
    parameters?: Parameter;
    enabled?: boolean;
    /** Default is 'data' => response['data'] */
    dataKey?: string;
    totalKey?: string;
}

export function useQuery<T = any>({ query, dataKey = "data", totalKey = "total", enabled, queryId, parameters }: useTableQueryOptions) {
    const LIMIT = 10;
    const [page, setPage] = useState(0);
    const [overallData, setOverallData] = useState<T[]>([]);
    const parsedParameters = useMemo(() => ({ ...(parameters || {}), ...({limit: LIMIT, from: page, skip: page}) }), [page, parameters]);

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

    const TOTAL = (responseData as any)?.[totalKey] || 0;
    const DATA = useMemo(() => (responseData as any)?.[dataKey] || [] as T[], [dataKey, responseData]);

    const loadMore = () => {
        setPage(old => old + LIMIT)
    }

    useEffect(() => {
        setOverallData(old => [...old, ...DATA])
    
    }, [DATA])

    return {
        data: DATA,
        overallData,
        isLoading,
        isRefetching,
        error: error as any,
        total: TOTAL,
        hasNextPage: overallData.length !== TOTAL,
        refetch,
        loadMore,
    }
}
