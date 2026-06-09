export type ContainerProps = {
    children: React.ReactNode;
    className?: string;
    size?: "sm" | "md" | "lg" | "xl" | "full";
    padding?: boolean;
};

export const sizeMap: Record<NonNullable<ContainerProps["size"]>, string> = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
};