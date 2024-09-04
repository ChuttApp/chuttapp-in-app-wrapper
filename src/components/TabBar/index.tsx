import React from 'react'
import { Content, TabBarWrapper } from './styled'
import { useAppStyles } from '../../utils'

export function TabBar() {
    const { safeArea } = useAppStyles()
    return (
        <TabBarWrapper $bottom={safeArea?.bottom || 0}>
            <Content>
                Tabs
            </Content>
        </TabBarWrapper>
    )
}
