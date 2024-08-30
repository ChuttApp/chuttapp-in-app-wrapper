import React from 'react'
import { Flex, HeaderWrapper, Middle, Title } from './styled'

export function Header() {
  return (
    <HeaderWrapper>
      <Flex style={{left: 0}}>
        left
      </Flex>
      <Middle>
        <Title>Home</Title>
      </Middle>
      <Flex style={{right: 0}}>
        right
      </Flex>
    </HeaderWrapper>
  )
}
