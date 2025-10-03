import { createSupabaseServerClient } from "@/lib/supabase/supabaseServer"


export const getNotes = async (tag?: string, queryTitle?: string): Promise<Note[]> => {
    const supabase = await createSupabaseServerClient();
    let query = supabase.from("notes").select("*");

    if (tag) {
        query = query.ilike("tags", `%${tag}%`);
    }

    if (queryTitle)
        query = query.ilike("title", `%${queryTitle}%`)

    const { data, error } = await query.order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data;
}

export const getNotesCount = async (tag?: string, queryTitle?: string) => {
    const supabase = await createSupabaseServerClient();
    let query = supabase.from("notes").select("*", { count: "exact" });

    if (tag) {
        query = query.ilike("tags", `%${tag}%`);
    }

    if (queryTitle)
        query = query.ilike("title", `%${queryTitle}%`)
    const { count, error } = await query;
    if (error) throw new Error(error.message);
    return count;
}

export const getSingleNote = async (id: string): Promise<Note> => {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.from("notes").select("*").eq("id", id);
    if (error) throw new Error(error.message);
    return data[0];
}

export const getAllTags = async (): Promise<Set<string>> => {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.from("notes").select("tags");
    if (error) throw new Error(error.message);

    const arrayOfTags = data.map(({ tags }) => {
        return tags.split(" ");
    })
    const set = new Set(arrayOfTags.flat())

    return set;
}