import { ButtonProps } from "./Button.types";
import { buttonBase, buttonVariants } from "./button.variants";
import Link from "next/link";

export default function Button(props: ButtonProps) {
    const { label, variant = "primary" } = props;

    const className = `${buttonBase} ${buttonVariants[variant]}`;

    if (props.as === "a") {
        return (
            <Link href={props.href} className={className}>
                {label}
            </Link>
        );
    }

    return (
        <button onClick={props.onClick} className={className}>
            {label}
        </button>
    );
}