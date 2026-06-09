export function Heading({
                            level = "h1",
                            children,
                        }: {
    level?: "h1" | "h2" | "h3";
    children: React.ReactNode;
}) {
    const Tag = level;

    const styles = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
    };

    return <Tag className={styles[level]}>{children}</Tag>;
}