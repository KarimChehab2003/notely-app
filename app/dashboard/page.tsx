import { createSupabaseServerClient } from "@/lib/supabase/supabaseServer";
import { redirect } from "next/navigation";
import { FaPlus } from "react-icons/fa";

async function Dashboard() {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.auth.getUser();

    if (!data) redirect("/login");
    return (
        <main className="flex justify-center px-4 py-12">
            <div className="max-w-7xl w-full mx-auto">
                <h2 className="text-4xl mb-4">Welcome, {data.user?.user_metadata?.full_name ?? data.user?.user_metadata?.username}</h2>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-2xl font-bold">My Notes</p>
                        <p>4 notes found</p>
                    </div>
                    <button className="btn btn-secondary rounded-lg">
                        <FaPlus /><span>Create Note</span>
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Dashboard;