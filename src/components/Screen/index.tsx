import React from 'react'
import { Header, HeaderProps } from '../Header'

interface ScreenProps {
  headerOptions?: HeaderProps;
}

export default function Screen({ headerOptions}: ScreenProps) {
  return (
    <>
      <Header {...headerOptions} />
    </>
  )
}
