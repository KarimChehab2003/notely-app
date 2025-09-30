import { createSupabaseServerClient } from "@/lib/supabase/supabaseServer"


export const getNotes = async (): Promise<Note[]> => {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.from("notes").select("*").order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data;
}

export const getNotesCount = async () => {
    const supabase = await createSupabaseServerClient();
    const { count, error } = await supabase.from("notes").select("*", { count: "exact" });
    if (error) throw new Error(error.message);
    return count;
}

export const getSingleNote = async (id: string): Promise<Note> => {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.from("notes").select("*").eq("id", id);
    if (error) throw new Error(error.message);
    return data[0];
}