import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/supabaseServer";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    const next = url.searchParams.get("next") ?? "/dashboard";
    const origin = url.origin;

    if (!code) {
        return NextResponse.redirect(`${origin}/auth/error`);
    }

    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
        console.error("Error exchanging auth code:", error.message);
        return NextResponse.redirect(`${origin}/auth/error`);
    }

    return NextResponse.redirect(`${origin}${next}`);
}
