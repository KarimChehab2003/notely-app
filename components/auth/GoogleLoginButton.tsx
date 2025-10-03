"use client";

import { FaGoogle } from "react-icons/fa";
import { createClient } from "@/lib/supabase/supabaseClient";

export default function GoogleLoginButton() {

    const handleGoogleLogin = async () => {
        const supabase = createClient();

        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: "https://notely-app-psi.vercel.app/auth/v1/callback",
            },
        });

        if (error) {
            console.error(error.message);
            return;
        }
    };

    return (
        <button onClick={handleGoogleLogin} className="btn btn-secondary rounded-full inline-flex items-center w-full my-2 text-secondary-content">
            <FaGoogle />
            <span className="font-bold">Sign In With Google</span>
        </button>
    );
}
