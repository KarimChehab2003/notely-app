import { createSupabaseServerClient } from "@/lib/supabase/supabaseServer";
import { redirect } from "next/navigation";
import { logout } from "../../lib/actions/auth";

async function Dashboard() {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.auth.getUser();

    if (!data) redirect("/login");
    return (
        <main>
            <div>Welcome, {data.user?.email}</div>
            <button onClick={logout} className="btn btn-secondary">logout</button>
        </main>
    );
}

export default Dashboard;