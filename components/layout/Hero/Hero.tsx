"use client"
import Image from "next/image";
import InlineList from "@/components/layout/Hero/InlineList";
import Button from "@/components/ui/Button";
import {HeroProps} from "@/components/layout/Hero/Hero.types";

export default function Hero({heroData, className}: HeroProps) {
    return (
        <div className={`flex flex-col-reverse justify-between items-center gap-4 md:flex-row ${className}`}>
            <div className="flex flex-col gap-4">
                <h3 className="body-lg text-brand">{heroData.role}</h3>
                <h2 className="h1">{heroData.name}</h2>
                <p className="h3">{heroData.description}</p>
                <InlineList
                    items={heroData.skills}
                />
                <div className="flex gap-4">
                    {heroData.ctas?.map((cta) => (
                        <Button key={cta.href} as="a" href={cta.href} label={cta.label} variant={cta.variant}/>
                    ))}
                </div>
            </div>

            <Image
                src={heroData.image}
                alt={`${heroData.name} profile image`}
                width={400}
                height={400}
                priority
                className="w-full"
            />
        </div>
    );
}