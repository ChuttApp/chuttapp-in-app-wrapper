import React from 'react'
import { AppNavigation } from './AppNavigation'
import { TabBar } from '../components/TabBar'
import styled from 'styled-components'

const Main = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

export function MainApp() {
  return (
    <Main>
      <AppNavigation />
      <TabBar />
    </Main>
  )
}
