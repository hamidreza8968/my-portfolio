import { ReactNode } from "react";

export type ButtonVariant =
    | "primary"
    | "secondary"
    | "ghost"
    | "text";

export type ButtonProps =
    | ({
    as?: "button";
    onClick?: () => void;
    href?: never;
    label: string;
    icon?: ReactNode;
    variant?: ButtonVariant;
})
    | ({
    as: "a";
    href: string;
    onClick?: never;
    label: string;
    icon?: ReactNode;
    variant?: ButtonVariant;
});