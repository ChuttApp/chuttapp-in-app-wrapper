export interface RequestParams {
    from?: number;
    limit?: number;
}

export interface DataResponse<T = any> {
    data: T[];
    total: number;
}