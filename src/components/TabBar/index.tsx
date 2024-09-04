import React, { useState } from 'react'
import { Content, TabBarWrapper, TabItemLabel, TabItemWrapper } from './styled'
import { useAppStyles } from '../../utils'

interface TabItemProps {
    name: string;
    isActive?: boolean;
    label?: React.ReactNode;
    icon?: (props: { size: number; color: string; active?: boolean }) => React.ReactNode;
    iconSize?: number;
    color?: string;
    onPress?: () => void;
}

interface TabBarProps {
    tabs: Omit<TabItemProps, 'isActive'>[];
    iconSize?: number;
}

export function TabBar({ tabs, iconSize: tbIconSize }: TabBarProps) {
    const { safeArea } = useAppStyles();
    const [activeTab, setActiveTab] = useState<string>(tabs[0].name);

    return (
        <TabBarWrapper $bottom={safeArea?.bottom || 0}>
            <Content>
                {tabs.map(({ icon, name, iconSize, label }, index) => (
                    <TabItem
                        name={name}
                        key={index}
                        icon={icon}
                        isActive={activeTab === name}
                        label={label}
                        iconSize={iconSize || tbIconSize}
                        onPress={() => setActiveTab(name)}
                    />
                ))}
            </Content>
        </TabBarWrapper>
    )
}

function TabItem({ isActive, icon, iconSize = 30, color, label, onPress, }: TabItemProps) {
    return (
        <TabItemWrapper onClick={onPress}>
            {icon?.({ size: iconSize, color: color || 'var(--color)', active: isActive })}
            <TabItemLabel>{label}</TabItemLabel>
        </TabItemWrapper>
    )
}