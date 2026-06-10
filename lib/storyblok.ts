import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";

storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN!,
    use: [apiPlugin],
    components: {},
});

export const storyblokApi = getStoryblokApi();
