import { Artist, Song, SongsRosa } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

type MediaItem = Song | SongsRosa | Artist;

const useLoadImage = (mediaItem: MediaItem) => {
    const supabaseClient = useSupabaseClient();

    if (!mediaItem || !mediaItem.image_path) {
        return null;
    }

    const { data: imageData } = supabaseClient
        .storage
        .from('images')
        .getPublicUrl(mediaItem.image_path);

    return imageData?.publicUrl || null;
};

export default useLoadImage;
