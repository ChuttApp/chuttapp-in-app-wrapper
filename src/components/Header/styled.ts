import styled from "styled-components";

export const HeaderWrapper = styled.div<{$top: number}>`
    background: var(--dark500);
    width: 100%;
    position: relative;
    ${({$top}) => `padding-top: ${$top}px`};
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: var(--headerHeight);
`;

export const Middle = styled.div`
`;

export const Title = styled.div`
    font-family: bold;
`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    position: absolute;
`;