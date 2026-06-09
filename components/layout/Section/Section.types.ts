export type SectionProps = {
    children: React.ReactNode;
    className?: string;
    spacing?: "sm" | "md" | "lg" | "xl";
};

export const spacingMap: Record<NonNullable<SectionProps["spacing"]>, string> = {
    sm: "py-8",
    md: "py-12",
    lg: "py-20",
    xl: "py-28",
};