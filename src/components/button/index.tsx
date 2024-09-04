import React from 'react'
import { ButtonWrapper, IconButtonWrapper } from './styled'

import { ButtonProps } from './types';

export function Button({ disabled, isLoading, icon, variant = "secondary", children, ...props }: ButtonProps) {
  if (isLoading) disabled = true;
  return (
    <ButtonWrapper variant={variant} {...props}>
      {children || icon}
    </ButtonWrapper>
  )
}

export function IconButton({ rounded, className, ...props }: ButtonProps) {
  return (
    <IconButtonWrapper size={35} {...props} shape="circle" />
  )
}