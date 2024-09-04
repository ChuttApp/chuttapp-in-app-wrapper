import React from 'react'
import { Header, HeaderProps } from '../Header'
import { Shimmer, TransitionType } from '../Shimmer';

interface ScreenProps {
  headerOptions?: HeaderProps;
  children?: any;
  transitionType?: TransitionType;
}

export default function Screen({ headerOptions, transitionType, children }: ScreenProps) {
  return (
    <>
      <Shimmer.SmoothRender>
        <Header {...headerOptions} />
      </Shimmer.SmoothRender>
      <Shimmer.SmoothTransition type={transitionType}>
        {children}
      </Shimmer.SmoothTransition>
    </>
  )
}
