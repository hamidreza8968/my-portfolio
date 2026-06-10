// import { StoryblokComponents } from "@/components/storyblok";
//
// export default function StoryblokRenderer({ blok }: any) {
//     if (!blok || !blok.component) return null;
//
//     const Component = StoryblokComponents[blok.component];
//
//     if (!Component) {
//         console.warn(`No component found for: ${blok.component}`);
//         return null;
//     }
//
//     return <Component blok={blok} />;
// }