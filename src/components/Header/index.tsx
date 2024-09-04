import React from 'react'
import { Flex, HeaderWrapper, Middle, Title } from './styled'
import { IconButton } from '../button';
import { IconBack } from '../icons';

export interface HeaderProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  title?: React.ReactNode;
  showBackButton?: boolean;
}

export function Header({ left, right, showBackButton, title }: HeaderProps) {
  return (
    <HeaderWrapper>
      <Flex style={{ left: 10 }}>
        {showBackButton && <IconButton icon={<IconBack />} />}
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
