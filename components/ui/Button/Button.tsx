import { ButtonProps } from "./Button.types";
import { buttonBase, buttonVariants } from "./button.variants";

export default function Button({
                                   label,
                                   onClick,
                                   variant = "primary",
                               }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`${buttonBase} ${buttonVariants[variant]}`}
        >
            {label}
        </button>
    );
}