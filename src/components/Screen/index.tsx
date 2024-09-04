import React from 'react'
import { Header, HeaderProps } from '../Header'
import { ScreenWrapper } from './styled';
import { Shimmer, TransitionType } from '../Shimmer';

interface ScreenProps {
  headerOptions?: HeaderProps;
  children?: any;
  transitionType?: TransitionType;
}

export default function Screen({ headerOptions, transitionType, children }: ScreenProps) {
  return (
    <ScreenWrapper>
      <Shimmer.SmoothRender>
        <Header {...headerOptions} />
      </Shimmer.SmoothRender>
      <Shimmer.SmoothTransition type={transitionType}>
        {children}
      </Shimmer.SmoothTransition>
    </ScreenWrapper>
  )
}
