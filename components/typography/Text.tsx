export function Text({
                         size = "body",
                         children,
                     }: {
    size?: "body" | "body-lg" | "small";
    children: React.ReactNode;
}) {
    return <p className={size}>{children}</p>;
}