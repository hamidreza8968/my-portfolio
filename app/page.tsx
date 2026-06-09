import Navbar from "@/components/layout/Navbar";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Hero from "@/components/layout/Hero";


const navigationItems = [
    {
        id: "item01",
        label: "Impact",
        targetSection: "impact",
        active: true,
        order: 1
    },
    {
        id: "item02",
        label: "Architecture",
        targetSection: "architecture",
        active: true,
        order: 2
    },
    {
        id: "item03",
        label: "Experience",
        targetSection: "experience",
        active: true,
        order: 3
    },
    {
        id: "item04",
        label: "Stack",
        targetSection: "stack",
        active: true,
        order: 4
    },
    {
        id: "item05",
        label: "Contact",
        targetSection: "contact",
        active: true,
        order: 5
    }
]

export default async function Home() {

    return (
        <div>
            <Navbar logo={{variant: 'text', text: "AA"}} navigationItems={navigationItems} className='bg-blue-500'/>

            <main>
                <Section className="bg-gray-300">
                    <Container>
                        <Hero/>
                    </Container>
                </Section>
            </main>
        </div>
    );
}