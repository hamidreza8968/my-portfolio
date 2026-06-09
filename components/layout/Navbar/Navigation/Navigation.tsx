import { NavigationProps } from "@/components/layout/Navbar/Navigation/Navigation.types";
import NavigationItem from "@/components/layout/Navbar/Navigation/NavigationItem";

export default function Navigation({ items, className }: NavigationProps) {
    return (
        <ul className={`flex justify-between items-center gap-6 ${className}`}>
            {items.map((item, index) => (
                <li key={item.id}>
                    <NavigationItem item={item} />
                </li>
            ))}
        </ul>
    );
}