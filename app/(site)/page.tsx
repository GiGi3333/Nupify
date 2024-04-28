import getSongs from "@/actions/getSongs";
import Header from "@/components/header";
import ListItem from "@/components/ListItem";
import PageContent from "./components/PageContent";
import PageContentRosa from "./components/PageContentRosa";
import getSongsRosa from "@/actions/getSongsRosa";
import PageContentArtists from "./components/PageContentArtists";
import getArtists from "@/actions/getArtists";
import getLikedSongs from "@/actions/getLikedSongs";

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();
  const songsRosa = await getSongsRosa();
  const Artist = await getArtists();

  return (
    <div
      className="
      bg-neutral-900
      rounded-lg
      h-full
      w-full
      overflow-hidden
      overflow-y-auto
      overflow-x-auto

    "
    >
      <Header>
        <div className="mb-2">
          <h1
            className="
              text-white
              text-3xl
              font-semibold

            "
          >
            Buongiorno
          </h1>
          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            2xl:grid-cols-4
            gap-3
            mt-4
          "
          >
            <ListItem
              image="/images/mipiacecanzoni.jpg"
              name="Canzoni che ti piacciono"
              href="liked"
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Brani degli artisti emergenti</h1>
        </div>
        <PageContent songs={songs} />
      </div>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">
            <span className="text-gradient">Rap in rosa</span>
          </h1>
        </div>
        <PageContentRosa songsRosa={songsRosa} />
      </div>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Artisti top del momento</h1>
        </div>
        <PageContentArtists artist={Artist} />
      </div>
    </div>
  );
}
