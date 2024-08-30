import React from 'react'
import { Flex, HeaderWrapper, Middle, Title } from './styled'

export interface HeaderProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  title?: React.ReactNode;
}

export function Header({ left, right, title }: HeaderProps) {
  return (
    <HeaderWrapper>
      <Flex style={{ left: 10 }}>
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
