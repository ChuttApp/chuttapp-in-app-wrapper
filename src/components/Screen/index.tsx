import React from 'react'
import { Header, HeaderProps } from '../Header'

interface ScreenProps {
  headerOptions?: HeaderProps;
  children?: any;
}

export default function Screen({ headerOptions, children}: ScreenProps) {
  return (
    <>
      <Header {...headerOptions} />
      {children}
    </>
  )
}
