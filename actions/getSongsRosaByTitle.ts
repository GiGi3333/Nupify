import { SongsRosa } from "@/types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import getSongsRosa from "./getSongsRosa";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and/or Supabase anon key not found in environment variables.');
}


const getSongsRosaByTitle = async (title:string): Promise<SongsRosa[]> => {
    const supabase = createServerComponentClient({
        cookies:cookies
    });

    if(!title) {
        const allSongs = await getSongsRosa();
        return allSongs;
    }

    const { data, error } = await supabase 
    .from('rap_rosa_songs')
    .select('*')
    .ilike('title', `%${title}%`)
    .order('created_at', { ascending: false });

    if (error) {
        console.log(error);
    }

    return (data as any) || [];
}

export default getSongsRosaByTitle;