import { Song, SongsRosa } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModal from "./use.AuthModal";
import { useUser } from "./useUser";

const useOnPlay = (songs: Song[]) => {
    const player = usePlayer();
    const authModal = useAuthModal();
    const { user } = useUser();

    const onPlay = (id: string) => {
        if (!user) {
            return authModal.onOpen();
        }

        player.setId(id);

        // Controlla che songs sia un array e che non sia vuoto
        if (Array.isArray(songs) && songs.length > 0) {
            player.setIds(songs.map((song) => song.id));
        }
    };

    return onPlay;
};

export default useOnPlay;
