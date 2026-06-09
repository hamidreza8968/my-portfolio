import {cn} from "@/lib/cn";
import {SectionProps, spacingMap} from "@/components/layout/Section/Section.types";

export default function Section({
                            children,
                            className,
                            spacing = "lg",
                        }: SectionProps) {
    return (
        <section className={cn(spacingMap[spacing], className)}>
            {children}
        </section>
    );
}