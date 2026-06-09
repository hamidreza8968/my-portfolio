import { cn } from "@/lib/cn";
import {ContainerProps, sizeMap} from "@/components/layout/Container/Container.types";

export default function Container({
                              children,
                              className,
                              size = "lg",
                              padding = true,
                          }: ContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto w-full",
                sizeMap[size],
                padding && "px-4 sm:px-6 lg:px-8",
                className
            )}
        >
            {children}
        </div>
    );
}