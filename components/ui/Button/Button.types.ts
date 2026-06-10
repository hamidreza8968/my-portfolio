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
    variant?: ButtonVariant;
})
    | ({
    as: "a";
    href: string;
    onClick?: never;
    label: string;
    variant?: ButtonVariant;
});