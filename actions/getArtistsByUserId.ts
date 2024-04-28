import { Artist } from "@/types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and/or Supabase anon key not found in environment variables.');
}


const getArtistByUserId = async (): Promise<Artist[]> => {
    const supabase = createServerComponentClient({
        cookies:cookies
    });

    const { data: sessionData, 
        error: sessionError 
    } = await supabase.auth.getSession();

    if (sessionError) {
        console.log(sessionError.message);
        return [];
    }

    const { data, error} = await supabase
    .from('artists')
    .select('*')
    .eq('user_id', sessionData.session?.user.id)
    .order('created_at', {ascending:false});

    if (error) {
        console.log(error.message);
    }

    return (data as any) || [];
};

export default getArtistByUserId;