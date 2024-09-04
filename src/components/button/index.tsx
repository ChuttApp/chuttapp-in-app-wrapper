import React from 'react'
import { ButtonWrapper, IconButtonWrapper } from './styled'

import { ButtonProps } from './types';

export function Button({ disabled, isLoading, icon, ...props }: ButtonProps) {
  if (isLoading) disabled = true;
  return (
    <ButtonWrapper {...props}>
      {icon}
    </ButtonWrapper>
  )
}

export function IconButton({ rounded, className, ...props }: ButtonProps) {
  return (
    <IconButtonWrapper size={35} {...props} shape="circle" />
  )
}