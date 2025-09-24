"use server";

import { createSupabaseServerClient } from "@/lib/supabase/supabaseServer";
import { loginSchema, signUpSchema } from "@/lib/validation/authSchemas";
import { redirect } from "next/navigation";
import { createClient } from "../supabase/supabaseClient";

type ActionState = {
    success: boolean;
    errors?: Record<string, string[]>;
    message?: string;
}


export const signUpWithEmail = async (_prevState: ActionState, formData: FormData): Promise<ActionState> => {
    const data = Object.fromEntries(formData.entries());
    const parsed = signUpSchema.safeParse(data);
    if (!parsed.success) return { success: false, errors: parsed.error.flatten().fieldErrors }

    const { email, password, username } = parsed.data;
    const supabase = await createSupabaseServerClient();

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { username } },
    })

    if (error) return { success: false, message: error.message };

    redirect("/dashboard");
}

export const loginWithEmail = async (_prevState: ActionState, formData: FormData): Promise<ActionState> => {
    const data = Object.fromEntries(formData.entries());
    const parsed = loginSchema.safeParse(data);
    if (!parsed.success) return { success: false, errors: parsed.error.flatten().fieldErrors }

    const { email, password } = parsed.data;
    const supabase = await createSupabaseServerClient();

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { success: false, message: error.message };

    redirect("/dashboard");
}

export const logout = async () => {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.signOut();
    if (error) return { success: false, message: error.message };

    redirect("/auth");
}
