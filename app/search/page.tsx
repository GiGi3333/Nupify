import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "./components/SearchContent";
import getSongsRosaByTitle from "@/actions/getSongsRosaByTitle";
import getArtistByUserId from "@/actions/getArtistsByUserId";

interface SearchProps {
    searchParams: {
        title: string;
    }
};

export const revalidate= 0;

const Search = async ({ searchParams }: SearchProps) => {
    const songs = await getSongsByTitle(searchParams.title);
    const songsRosa = await getSongsRosaByTitle(searchParams.title);
    const Artist = await getArtistByUserId(searchParams.title);

    return (
        <div
            className="
                bg-neutral-900
                rounded-lg
                h-full
                w-full
                overflow-hidden
                overflow-y-auto

            "
        >
            <Header className="from-bg-neutral-900">
                <div className="mb-2 flex flex-col gap-y-6">
                    <h1 className="text-white text-3xl font-semibold">
                        Ricerca
                    </h1>
                    <SearchInput />
                </div>
            </Header>
            <SearchContent songs={[...songs, ...songsRosa, ...Artist]} />
        </div>
    )
};

export default Search;