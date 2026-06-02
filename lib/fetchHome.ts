import { storyblokApi } from "./storyblok";

export async function fetchHome() {
    const { data } = await storyblokApi.get("cdn/stories/home", {
        version: "draft",
    });

    return data;
}