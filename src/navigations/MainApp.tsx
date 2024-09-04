import React from 'react'
import { AppNavigation } from './AppNavigation'
import { TabBar } from '../components/TabBar'
import styled from 'styled-components'
import { IconAccounts, IconHome } from '../components/icons';

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
      <TabBar
        iconSize={25}
        tabs={[
          {
            name: 'Home',
            label: "Home",
            icon: (props) => <IconHome {...props} />,
          },
          {
            name: 'Home',
            label: "Home",
            icon: (props) => <IconHome {...props} />,
          },
          {
            name: 'Home',
            label: "Home",
            icon: (props) => <IconHome {...props} />,
          },
          {
            name: 'Account',
            label: "Account",
            icon: (props) => <IconAccounts {...props} />,
          }
        ]}
      />
    </Main>
  )
}
