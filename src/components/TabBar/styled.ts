import styled from "styled-components";

export const TabBarWrapper = styled.div<{ $bottom: number }>`
    position: fixed;
    bottom: 0;
    background: var(--dark500);
    width: 100%;
    ${({$bottom}) => $bottom ? `padding-bottom: ${$bottom}px;` : ''}
`;

export const Content = styled.div`
    background: var(--dark400);
    width: 100%;
    height: 50px;
`;