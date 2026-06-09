import {Logo} from "@/components/layout/Navbar/Logo/Logo.types";
import {NavigationItem} from "@/components/layout/Navbar/Navigation/NavigationItem/NavigationItem.types";

export type NavbarProps = {
    logo: Logo,
    navigationItems: NavigationItem[],
    className?: string
}