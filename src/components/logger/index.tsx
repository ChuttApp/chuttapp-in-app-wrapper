import React from 'react'
import { LoggerTitle, LoggerWrapper, LoggerSubtitle, LoggerGraphic, LoggerActions } from './styled'
import { getReactChildren } from '../../utils';

export interface LoggerProps {
  title: string;
  subtitle?: React.ReactNode;
  graphic?: React.ReactNode;
  children?: any;
}

export function Logger({ graphic, title, children, subtitle }: LoggerProps) {
  const actions = getReactChildren(children, 'Actions')
  return (
    <LoggerWrapper>
      <LoggerTitle>{title}</LoggerTitle>
      <LoggerSubtitle>{subtitle}</LoggerSubtitle>
      <LoggerGraphic>
        {graphic}
      </LoggerGraphic>
      {actions}
    </LoggerWrapper>
  )
}

const Actions = ({ children }: { children: any }) => {
  return <LoggerActions>{children}</LoggerActions>
}

Actions.displayName = "Actions"
Logger.Actions = Actions;

export * from './ErrorLogger'