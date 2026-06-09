import Image from "next/image";
import myImage from "../../../public/assets/5969626460223901116.jpg";

export default function Hero() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-col">
                <h3>SENIOR FRONTEND DEVELOPER</h3>
                <h1>Arya Abadi</h1>
                <p>
                    Building scalable web platforms, CMS-driven architectures,
                    and design systems.
                </p>
                <div>
                    React • Next.js • TypeScript • Storyblok • Storybook
                    Accessibility • Performance • Developer Experience
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