import { Artist } from "@/types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import getArtists from "./getArtists";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and/or Supabase anon key not found in environment variables.');
}


const getArtistsByTitle = async (title:string): Promise<Artist[]> => {
    const supabase = createServerComponentClient({
        cookies:cookies
    });

    if(!title) {
        const allSongs = await getArtists();
        return allSongs;
    }

    const { data, error } = await supabase 
    .from('artists')
    .select('*')
    .ilike('name', `%${title}%`)
    .order('created_at', { ascending: false });

    if (error) {
        console.log(error);
    }

    return (data as any) || [];
}

export default getArtistsByTitle;