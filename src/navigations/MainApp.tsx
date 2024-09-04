import React from 'react'
import { AppNavigation } from './AppNavigation'
import styled from 'styled-components'
import { IconAccounts, IconHome } from '../components/icons';
import { accountRoutes, shoesRoutes } from '../utils/routes';
import { TabBar } from '@chuttapp/in-app-ui';

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
            to: shoesRoutes.home,
            label: "Home",
            icon: (props) => <IconHome {...props} />,
          },
          {
            name: 'Account',
            label: "Account",
            to: accountRoutes.accountScreen,
            icon: (props) => <IconAccounts {...props} />,
          }
        ]}
      />
    </Main>
  )
}
