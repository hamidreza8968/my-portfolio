import {cn} from "@/lib/cn";
import {GridProps} from "@/components/layout/Grid/Grid.types";

export default function Grid({
                                 children,
                                 className,
                             }: GridProps) {
    return (
        <div className={cn("grid gap-6", className)}>
            {children}
        </div>
    );
}