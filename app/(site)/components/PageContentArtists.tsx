"use client";

import ArtistItem from "@/components/ArtistItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Artist } from "@/types";

interface PageContentArtistsProps {
    artist: Artist[];
}

const PageContent: React.FC<PageContentArtistsProps> = ({
    artist
}) => {
    
    if (artist.length === 0) {
        return (
            <div className="mt-4 text-neutral-400">
                Nessun artista disponibile
            </div>
        )
    }
    return ( 
        <div
            className="
                grid
                grid-cols-2
                sm:grid-cols-3
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                2xl:grid-cols-8
                gap-4
                mt-4
            "
        >
        {artist.map((item) => (
            <ArtistItem
            key={item.id}
            onClick= {() => {}}
            data={item}
            />
        ))}    
        </div>
     );
}
 
export default PageContent;