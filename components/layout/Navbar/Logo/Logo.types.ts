export type Logo =
    | {
    variant: 'text';
    text: string;
}
    | {
    variant: 'image';
    image: string;
    alt?: string;
    width?: number;
    height?: number;
};


export type LogoProps = {
    logo: Logo,
    className?: string
}