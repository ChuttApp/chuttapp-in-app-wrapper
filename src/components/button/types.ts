import React from "react";

export interface ButtonProps {
    rounded?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
    variant?: "link" | "text" | "default" | "primary" | "bordered";
    shape?: "square" | "circle";
    className?: string;
    icon?: React.ReactNode;
    size?: number;
}