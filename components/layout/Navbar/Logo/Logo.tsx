import Image from 'next/image';
import {LogoProps} from "@/components/layout/Navbar/Logo/Logo.types";

export default function Logo({logo, className}: LogoProps) {
    if (logo.variant === 'text') {
        return <p className={`body-lg ${className}`}>{logo.text}</p>;
    }

    return (
        <Image
            src={logo.image}
            alt={logo.alt ?? 'Logo'}
            width={logo.width ?? 500}
            height={logo.height ?? 500}
        />
    );
}