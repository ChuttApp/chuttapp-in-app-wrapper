import styled from "styled-components";
import { ButtonProps } from "./types";
import { Button } from ".";

const gcolor = (variant: any, highlighted?: boolean) => {
    if (highlighted) return {
        bg: 'var(--dark400)',
        rip: 'var(--dark300)'
    }
    switch (variant) {
        case "secondary":
            return {
                bg: 'var(--dark500)',
                rip: 'var(--dark400)'
            }
        default:
            return {
                bg: 'var(--blue)'
            }
    }
}

export const ButtonWrapper = styled.div<ButtonProps>`
    border: 0;
    background-position: center;
    transition: all 0.8s;
    background-color: ${({ variant, highlighted }) => gcolor(variant, highlighted).bg};
    padding: 4px 12px;
    border-radius: 8px;
    font-family: medium;
    width: fit-content;
    cursor: pointer;

    &:active {
        background-color: ${({ variant, highlighted }) => gcolor(variant, highlighted).rip};
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
    ${({ shape, size }) => shape === "circle" ?
        `border-radius: 100px; width: ${size}px; height: ${size}px;` : `border-radius: 8px;`}
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
`;