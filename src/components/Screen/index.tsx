import React from 'react'
import { Header, HeaderProps } from '../Header'
import { ScreenWrapper } from './styled';
import { Shimmer } from '../Shimmer';

interface ScreenProps {
  headerOptions?: HeaderProps;
  children?: any;
}

export default function Screen({ headerOptions, children }: ScreenProps) {
  return (
    <ScreenWrapper>
      <Shimmer.SmoothRender>
        <Header {...headerOptions} />
      </Shimmer.SmoothRender>
      <Shimmer.SmoothTransition>
        {children}
      </Shimmer.SmoothTransition>
    </ScreenWrapper>
  )
}
