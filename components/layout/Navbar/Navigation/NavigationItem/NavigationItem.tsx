import {NavigationItemProps} from "@/components/layout/Navbar/Navigation/NavigationItem/NavigationItem.types";
import Link from "next/link";

export default function NavigationItem({item, className}: NavigationItemProps) {
    if (item.active) {
        return (
            <Link href={item.targetSection}
                  className={`hover:text-gray-500 hover:underline small ${className}`}
            >
                {`0${item.order}${item.label}`}
            </Link>
        )
    } else {
        return null
    }
}