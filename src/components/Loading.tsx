import { Spin, SpinProps } from 'antd'
import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';

export default function Loading(props: SpinProps) {
  return (
    <Spin style={{ color: 'var(--color)', display: 'flex' }} indicator={<LoadingOutlined spin />} size="small" {...props} />
  )
}
