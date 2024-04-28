import { Song } from "@/types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and/or Supabase anon key not found in environment variables.');
}


const getSongs = async (): Promise<Song[]> => {
    const supabase = createServerComponentClient({
        cookies:cookies
    })

    const { data, error } = await supabase 
    .from('songs')
    .select('*')
    .order('created_at', { ascending: false });

    if (error) {
        console.log(error);
    }

    return (data as any) || [];
}

export default getSongs;