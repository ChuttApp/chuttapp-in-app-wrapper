import React from 'react'
import { Flex, HeaderWrapper, Middle, Title } from './styled'
import { IconButton } from '../button';
import { IconBack } from '../icons';
import { useAppStyles, useNav } from '../../utils';

export interface HeaderProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  title?: React.ReactNode;
  showBackButton?: boolean;
}

export function Header({ left, right, showBackButton, title }: HeaderProps) {
  const { goBack } = useNav();
  const { safeArea } = useAppStyles();
  
  return (
    <HeaderWrapper $top={safeArea?.top || 0}>
      <Flex style={{ left: 10 }}>
        {showBackButton && <IconButton onClick={goBack} highlighted icon={<IconBack size={24} />} />}
        {left}
      </Flex>
      <Middle>
        {typeof title === "string" ? <Title>{title}</Title> : title}
      </Middle>
      <Flex style={{ right: 10 }}>
        {right}
      </Flex>
    </HeaderWrapper>
  )
}
