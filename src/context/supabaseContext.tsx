import { createContext, useContext, ReactNode } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";

const SupabaseContext = createContext<SupabaseClient | undefined>(undefined)

export const SupabaseProvider = ({ children }: { children: ReactNode }) => {
    return (
        <SupabaseContext.Provider value={supabase}>
            {children}
        </SupabaseContext.Provider>
    )
}

export const useSupabase = () => {
    const client = useContext(SupabaseContext)
    if (!client) {
        throw new Error('useSupabase must be used within a SupabaseProvider')
    }
    return client
}