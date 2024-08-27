import styled from 'styled-components';

interface ShimmerWrapperProps {
  $animate: boolean;
  $width: string;
  $height: string;
  $backgroundHeight?: string;
  $dark?: boolean;
  $long?: boolean;
  $color?: string;
}

const color = 'var(--dark500)';
const xc = (color: string) => `linear-gradient(to right, ${color} 0%, var(--dark300) 20%, ${color} 40%, ${color} 100%)`

export const ShimmerWrapper = styled.div<ShimmerWrapperProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  animation: ${({ $animate }) =>
    $animate ? 'shimmer 1.6s infinite linear' : 'unset !important'};
  background: ${({ $color }) => $color || color};
  background-image: ${({ $color }) => $color ? xc($color) : xc(color)};
  background-repeat: no-repeat;
  position: relative;
  border-radius: 4px;
  @keyframes shimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
  @keyframes long-shimmer {
    0% {
      background-position: -800px 0;
    }
    100% {
      background-position: 800px 0;
    }
  }

  ${({ $long }) =>
    $long ? `animation: long-shimmer 1.6s infinite linear;` : ''}

  background-size: 800px
    ${({ $backgroundHeight }) => $backgroundHeight || '104px'};
  background-repeat: no-repeat;
`;

export const Flex = styled.div<{
  $gap?: string;
  $column?: boolean;
  $padding?: string;
}>`
  display: flex;
  align-items: ${({ $column }) => ($column ? 'flex-start' : 'center')};
  ${({ $gap }) => ($gap ? `gap: ${$gap};` : '')}
  ${({ $padding }) => ($padding ? `padding: ${$padding};` : '')}
  ${({ $column }) => ($column ? `flex-direction: column;` : '')}
`;

export const SmoothRender = styled.div`
  width: 100%;
  animation: fadeIn ease 0.4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const SmoothTransition= styled.div`
  width: 100%;
  animation: comein ease 0.3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes comein {
    0% {
      opacity: 0;
      transform: translateX(100px);
      /* scale: 1.2; */
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
      /* scale: 1; */
    }
  }
`;