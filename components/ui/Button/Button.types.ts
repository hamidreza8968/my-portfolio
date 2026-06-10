export type ButtonVariant =
    | "primary"
    | "secondary"
    | "ghost"
    | "text";

export type ButtonProps = {
    label: string;
    onClick?: () => void;
    variant?: ButtonVariant;
};