import {ButtonProps} from "./Button.types";
import {buttonBase, buttonVariants} from "./button.variants";
import Link from "next/link";

export default function Button(props: ButtonProps) {
    const {label, variant = "primary", icon} = props;

    const className = `${buttonBase} ${buttonVariants[variant]}`;

    const content = (
        <>
            <span>{label}</span>

            {icon && (
                <span className="inline-flex items-center">
                {icon}
            </span>
            )}
        </>
    );

    if (props.as === "a") {
        return (
            <Link href={props.href} className={className}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={props.onClick} className={className}>
            {content}
        </button>
    );
}