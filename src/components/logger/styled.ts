import styled from "styled-components";

export const LoggerWrapper = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
`;

export const LoggerTitle = styled.div`
    font-family: bold;
    font-size: var(--fontRegular);
`;

export const LoggerSubtitle = styled.div`
    font-size: var(--fontRegular);
    color: var(--gray100);
    max-width: 400px;
    text-align: center;
`;

export const LoggerGraphic = styled.div`
    margin-top: 18px;
`;

export const LoggerActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--padding);
  
`;