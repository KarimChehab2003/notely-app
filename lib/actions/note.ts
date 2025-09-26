"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "../supabase/supabaseServer";
import { CreateNoteSchema } from "../validation/noteSchema";

type ActionState = {
    success: boolean;
    errors?: Record<string, string[]>;
    message?: string
}

export const addNewNote = async (_prevState: ActionState, formData: FormData): Promise<ActionState> => {
    const createdFormData = Object.fromEntries(formData.entries());
    const parsed = CreateNoteSchema.safeParse(createdFormData);

    if (!parsed.success) return { success: false, errors: parsed.error.flatten().fieldErrors };


    const { title, tags, content } = parsed.data;
    const supabase = await createSupabaseServerClient();
    const { data: userInfo } = await supabase.auth.getUser();

    const { error } = await supabase.from("notes").insert([
        {
            user_id: userInfo.user?.id,
            title: title,
            tags: tags,
            content: content
        }
    ])

    if (error) return { success: false, message: error.message };

    redirect("/dashboard");
}

export const fetchUserNotes = async () => {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.from("notes").select("*").order("created_at", { ascending: false });
    if (error) throw new Error(error.message);

    return data;
}