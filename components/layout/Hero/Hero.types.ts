import {StaticImageData} from "next/image";
import {ButtonVariant} from "@/components/ui/Button/Button.types";

export type HeroCTA = {
    label: string;
    href: string;
    variant?: ButtonVariant;
};

export type HeroData = {
    role: string;
    name: string;
    description: string;
    image: string | StaticImageData;
    skills: string[];
    ctas: HeroCTA[];
};

export type HeroProps = {
    heroData: HeroData,
    className?: string
}