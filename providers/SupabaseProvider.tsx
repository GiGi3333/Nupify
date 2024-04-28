"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import { Database } from "@/types_db";



interface SupabaseProviderProps {
    children: React.ReactNode;
};

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
    children
}) => {
    const [supabaseClient] = useState(() => 
        createClientComponentClient<Database>({
            supabaseUrl: 'https://russmnyxenuitvivdvln.supabase.co',
            supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1c3Ntbnl4ZW51aXR2aXZkdmxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzMDQ0MDUsImV4cCI6MjAyODg4MDQwNX0.bcTsgpPqYQzNYdr55P0wgOT8qHrlojkJiVYGrefxAtA',
        })
    );

    return(
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    )
}

export default SupabaseProvider;