import React from "react";

export interface ButtonProps {
    rounded?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
    variant?: "link" | "text" | "default" | "primary" | "tertiary" | "secondary";
    shape?: "square" | "circle";
    className?: string;
    icon?: React.ReactNode;
    size?: number;
    children?: any;
    highlighted?: boolean;
    onClick?: () => void;
}