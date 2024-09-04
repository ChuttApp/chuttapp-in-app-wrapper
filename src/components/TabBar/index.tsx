import React, { useMemo, useState } from 'react'
import { Content, TabBarWrapper, TabItemLabel, TabItemWrapper } from './styled'
import { useAppStyles } from '../../utils'

interface TabItemProps {
    name: string;
    isActive?: boolean;
    label?: React.ReactNode;
    iconSize?: number;
    color?: string;
    activeColor?: string;
    icon?: (props: { size: number; color: string; active?: boolean }) => React.ReactNode;
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
            <Content style={tabs.length < 3 ? {justifyContent: "space-around"} : undefined}>
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

function TabItem({ isActive, activeColor = "var(--blue)", icon, iconSize = 30, color, label, onPress, }: TabItemProps) {
    const COLOR = useMemo(() => {
        if(isActive) return activeColor;
        return color || 'var(--color)';
    }, [activeColor, color, isActive])
    return (
        <TabItemWrapper onClick={onPress}>
            {icon?.({ size: iconSize, color: COLOR, active: isActive })}
            <TabItemLabel style={{color: COLOR}}>{label}</TabItemLabel>
        </TabItemWrapper>
    )
}