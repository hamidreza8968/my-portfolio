import {
    ArrowRightIcon,
    ArrowDownTrayIcon,
    EnvelopeIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline";

export const iconRegistry = {
    "arrow-right": ArrowRightIcon,
    download: ArrowDownTrayIcon,
    email: EnvelopeIcon,
    phone: PhoneIcon,
} as const;

export type IconName = keyof typeof iconRegistry;