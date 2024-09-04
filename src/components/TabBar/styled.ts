import styled from "styled-components";

export const TabBarWrapper = styled.div<{ $bottom: number }>`
    position: fixed;
    bottom: 0;
    background: var(--dark500);
    left: 0;
    right: 0;
    padding: 8px 12px;
    ${({$bottom}) => $bottom ? `padding-bottom: ${$bottom}px;` : ''}
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const TabItemWrapper = styled.div`
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2px;
`;

export const TabItemLabel = styled.div`
   font-family: regular;
   font-size: var(--p4);
   /* color: var(--secondaryColor); */
`;