import { IconName } from "./iconRegistry";

export type IconSize = "sm" | "md" | "lg";

export type IconProps = {
    name: IconName;
    size?: IconSize;
    className?: string;
};