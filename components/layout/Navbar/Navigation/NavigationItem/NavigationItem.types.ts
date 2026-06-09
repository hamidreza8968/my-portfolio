export type NavigationItem = {
    id: string;
    label: string;
    targetSection: string;
    order: number;
    active: boolean;
    icon?: string;
    badge?: string;
};

export type NavigationItemProps = {
    item: NavigationItem,
    className?: string
}