import { fetchHome } from "@/lib/fetchHome";
import StoryblokRenderer from "@/components/StoryblokRenderer";

export default async function Home() {
  const data = await fetchHome();
  const componentsArray = data?.story?.content?.body || [];

  return (
      <main>
        {componentsArray.map((blok: any) => (
            <StoryblokRenderer
                key={blok._uid}
                blok={blok}
            />
        ))}
      </main>
  );
}