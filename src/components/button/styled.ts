import { Button } from 'antd';
import styled from "styled-components";

export const ButtonWrapper = styled(Button)`
    text-transform: none !important;
    padding: 2px 12px !important;
    &.MuiButton-tertiary {
        border: 1px solid var(--borderColor500);
        padding: 2px 16px;
        font-family: medium;
        border-radius: var(--radiusRegular);
        &:hover {
            opacity: 0.8;
        }
    }
    &.MuiButton-contained {
        background: var(--blue);
    }
    .MuiButton-startIcon{
        margin-right: 6px;
    }
    &.Mui-disabled {
        color: unset !important;
        opacity: 0.3;
    }
    &.MuiButton-contained.Mui-disabled {
        background: var(--blue);
    }
`;

export const IconButtonWrapper = styled(Button)`
    &.rounded {
        background: var(--dark600);
        border-radius: var(--radiusMedium);

        &:hover {
            background: var(--dark400);
        }
    }
    &.active-link {
        background: var(--dark400) !important;
        color: var(--color);
    }
`;