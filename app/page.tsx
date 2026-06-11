import Navbar from "@/components/layout/Navbar";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Hero from "@/components/layout/Hero";
import myImage from "@/public/assets/5969626460223901116.jpg";
import {HeroData} from "@/components/layout/Hero/Hero.types";


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
];

const heroData: HeroData = {
    role: "Senior Frontend Developer",
    name: "Arya Abadi",
    description:
        "Building scalable web platforms, CMS-driven architectures, and design systems.",
    image: myImage,
    skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Storyblok",
        "Storybook",
        "Accessibility",
        "Performance",
        "Developer Experience",
    ],
    ctas: [
        {
            label: "View My Work",
            href: "#work",
            variant: "primary",
            icon: "arrow-right",
        },
        {
            label: "Download CV",
            href: "/cv.pdf",
            variant: "secondary",
            icon: "download",
        },
    ]
};


export default async function Home() {

    return (
        <div>
            <Navbar logo={{variant: 'text', text: "AA"}} navigationItems={navigationItems} />

            <main>
                <Section>
                    <Container>
                        <Hero heroData={heroData}/>
                    </Container>
                </Section>
            </main>
        </div>
    );
}