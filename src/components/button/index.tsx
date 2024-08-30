import React from 'react'
import { ButtonWrapper } from './styled'

import { ButtonProps as BP } from 'antd';

interface ButtonProps extends BP {
  rounded?: boolean;
  isLoading?: boolean;
}

export function Button({ disabled, isLoading, ...props }: ButtonProps) {
  if (isLoading) disabled = true;
  return (
    <ButtonWrapper {...props} />
  )
}

export function IconButton({ rounded, className, ...props }: ButtonProps) {
  return (
    <ButtonWrapper {...props} shape="circle" />
  )
}