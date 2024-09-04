import styled from "styled-components";

export const HeaderWrapper = styled.div<{$top: number}>`
    height: ${({$top}) => `calc(var(--headerHeight) + ${$top}px)`};
    background: var(--dark500);
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
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