import Logo from "@/components/layout/Navbar/Logo";
import Container from "@/components/layout/Container";
import Navigation from "@/components/layout/Navbar/Navigation";
import {NavbarProps} from "@/components/layout/Navbar/Navbar.types";

export default function Navbar({logo, navigationItems, className}: NavbarProps) {
    return (
        <header className={`py-8 ${className}`}>
            <Container>
                <div className="flex justify-between items-center">
                    <Logo logo={logo}/>
                    <Navigation items={navigationItems}/>
                </div>
            </Container>
        </header>
    );
}