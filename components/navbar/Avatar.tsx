import { createSupabaseServerClient } from "@/lib/supabase/supabaseServer";
import Image from "next/image";

async function Avatar() {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.auth.getUser();

    const name = data.user?.user_metadata?.full_name || data.user?.user_metadata?.username;
    const initial = name.charAt(0).toUpperCase();
    return (
        <div className="flex-none">
            <div className="avatar cursor-pointer">
                <div className="w-10 rounded-full">
                    {data.user?.user_metadata?.avatar_url ? (
                        <Image
                            src={data.user?.user_metadata?.avatar_url}
                            alt="Profile pic"
                            width={40}
                            height={40}
                            className="object-cover"
                        />
                    ) : (
                        <span className="w-full h-full flex items-center justify-center bg-base-300">{initial}</span>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Avatar;