import { IconProps, IconSize } from "./Icon.types";
import { iconRegistry } from "./iconRegistry";

const iconSizes: Record<IconSize, number> = {
    sm: 16,
    md: 20,
    lg: 24,
};

export default function Icon({
                                 name,
                                 size = "md",
                                 className = "",
                             }: IconProps) {
    const SvgIcon = iconRegistry[name];

    if (!SvgIcon) return null;

    return (
        <SvgIcon
            width={iconSizes[size]}
            height={iconSizes[size]}
            className={className}
            aria-hidden="true"
        />
    );
}