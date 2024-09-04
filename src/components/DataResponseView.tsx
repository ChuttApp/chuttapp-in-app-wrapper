import React from 'react'
import { ErrorLogger, Logger, LoggerProps } from './logger'
import { EmptyGraphic } from './icons/graphics'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Shimmer } from './Shimmer';
import styled from 'styled-components';
import Loading from './Loading';
import { Button } from './button';

interface DataResponseViewProps {
    data: any[] | object;
    error: any;
    isLoading: boolean;
    isRefetching?: boolean;
    customLoadingComponent?: any;
    content: any;
    emptyLoggerOptions?: LoggerProps & {
        buttonText?: string;
        onPress?: () => void;
    };
    onRetry?: () => void;
}

export function DataResponseView({ data, error, isLoading, isRefetching, customLoadingComponent, content, emptyLoggerOptions, onRetry }: DataResponseViewProps) {
    const hasNoData = (Array.isArray(data) ? data.length === 0 : !data);
    const shallowLoading = false;

    if (((!isLoading && !error)) && !hasNoData) return (
        <Wrapper>
            <Shimmer.SmoothRender style={shallowLoading ? { opacity: 0.3, pointerEvents: 'none', userSelect: 'none' } : undefined}>{content}</Shimmer.SmoothRender>
            {shallowLoading && (
                <LoadingBG>
                    <div style={{ padding: 100, display: 'flex', justifyContent: 'center' }}>
                        <Loading size='default' />
                    </div>
                </LoadingBG>
            )}
        </Wrapper>
    )

    return (
        <>
            {(isLoading || isRefetching) && (customLoadingComponent || <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Spin indicator={<LoadingOutlined spin />} size="default" /></div>)}
            {hasNoData && !isLoading && !error && (
                <Logger
                    title='No data found'
                    subtitle="Refresh and let's see what happens!"
                    graphic={<EmptyGraphic />}
                    {...emptyLoggerOptions}
                >
                    {
                        (emptyLoggerOptions?.onPress || onRetry) && (
                            <Logger.Actions>
                                <Button onClick={emptyLoggerOptions?.onPress || onRetry}>{emptyLoggerOptions?.buttonText ?? (!!onRetry && 'Refresh')}</Button>
                            </Logger.Actions>
                        )
                    }
                </Logger>
            )}
            {error && !isLoading && !isRefetching && (
                <ErrorLogger onRetry={onRetry} />
            )}
        </>
    )
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

const LoadingBG = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    pointer-events: none;
    user-select: none;
`;
