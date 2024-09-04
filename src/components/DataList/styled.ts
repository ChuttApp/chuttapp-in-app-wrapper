import styled from "styled-components";

export const DataListContent = styled.div<{$top: number; $bottom: number}>`
width: 100%;
height: ${({$bottom, $top}) => `calc(100vh - var(--headerHeight) - 66px - ${$top}px - ${$bottom}px)`};
overflow: auto;
`;