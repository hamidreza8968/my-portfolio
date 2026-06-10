"use client"
import Image from "next/image";
import myImage from "../../../public/assets/5969626460223901116.jpg";
import InlineList from "@/components/layout/Hero/InlineList";
import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-col gap-4">
                <h3 className="body-lg text-accent">SENIOR FRONTEND DEVELOPER</h3>
                <h2 className="h1">Arya Abadi</h2>
                <p className="h3">
                    Building scalable web platforms, CMS-driven architectures,
                    and design systems.
                </p>
                <InlineList
                    items={[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "Storyblok",
                        "Storybook",
                        "Accessibility",
                        "Performance",
                        "Developer Experience",
                    ]}
                />
                <div className="flex gap-4">
                    <Button label="View My Work" onClick={() => console.log("Go To My Work")}/>
                    <Button label="Download CV" variant="secondary" onClick={() => console.log("Download CV")}/>
                </div>
            </div>

            <Image
                src={myImage}
                alt="my image"
                width={400}
                height={400}
                priority
            />
        </div>
    );
}