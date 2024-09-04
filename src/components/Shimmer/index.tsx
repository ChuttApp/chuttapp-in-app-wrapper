import React from 'react';
import { Flex, ShimmerWrapper, SmoothRender, SmoothTransition } from './styled';

interface ShimmerProps {
  animate?: boolean;
  children?: React.ReactNode;
  height?: string;
  width?: string;
  backgroundHeight?: string;
  dark?: boolean;
  long?: boolean;
  className?: string;
  color?: string;
  radius?: string | number;
}

export type TransitionType = 'OPACITY' | 'TRANSLATE_X';

export function Shimmer({
  animate = true,
  children,
  height = '100%',
  width = '100%',
  backgroundHeight,
  className,
  dark,
  long,
  color,
  radius,
}: ShimmerProps) {
  return (
    <ShimmerWrapper
      className={className}
      $height={height}
      $width={width}
      $animate={animate}
      $backgroundHeight={backgroundHeight}
      $dark={dark}
      $long={long}
      $color={color}
      style={{borderRadius: radius}}
    >
      {children}
    </ShimmerWrapper>
  );
}

Shimmer.Flex = Flex;
Shimmer.SmoothRender = SmoothRender;
Shimmer.SmoothTransition = SmoothTransition
