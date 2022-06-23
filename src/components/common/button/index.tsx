import React from "react";
import "./button.css";

interface IbuttonProps {
    buttonText: string;
    action?: () => void;
    isLoading?: boolean;
    bgColor?: string;
    maxWidth?: number;
    textColor?: string;
    disabled?: boolean;
}

export const Button = ({ buttonText, action, isLoading, bgColor, maxWidth, textColor = "#000", disabled }: IbuttonProps) => {
    return (
        <button onClick={action} disabled={disabled} style={{ maxWidth: maxWidth, backgroundColor: bgColor, color: textColor }}>
            {buttonText}
        </button>
    );
};
