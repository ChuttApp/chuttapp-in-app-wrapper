import styled from "styled-components";
import { ButtonProps } from "./types";
import { Button } from ".";

export const ButtonWrapper = styled.div<ButtonProps>`
    border: 0;
    background-position: center;
    transition: all 0.8s;
    background-color: var(--dark400);

    &:active {
        background-color: var(--dark500);
        background-size: 100%;
        transition: all 0s;
    }

    @keyframes ripple {
    from {
        opacity: 1;
        transform: scale(0);
    }
    to {
        opacity: 0;
        transform: scale(3);
    }
}
`;

export const IconButtonWrapper = styled(Button)`
    ${({shape, size}) => shape === "circle" ? 
    `border-radius: 100px; width: ${size}px; height: ${size}px;`: `border-radius: 8px;`}
    display: flex;
    justify-content: center;
    align-items: center;
`;