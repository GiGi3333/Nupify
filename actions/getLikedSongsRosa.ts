import { SongsRosa } from "@/types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and/or Supabase anon key not found in environment variables.');
}


const getLikedSongs = async (): Promise<SongsRosa[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    if (sessionError || !session) {
        console.error('Error fetching session:', sessionError);
        return [];
    }

    const { data, error } = await supabase
        .from('likedrosa_songs')
        .select('*, rap_rosa_songs(*)')
        .eq('user_id', session?.user?.id)
        

    if (error) {
        console.error('Error fetching liked songs:', error);
        return [];
    }

    if (!data) {
        return [];
    }

    // Assume che 'songs' sia la proprietà corretta per accedere ai dati della canzone
    return data.map((item) => item.songs);
}



export default getLikedSongs;