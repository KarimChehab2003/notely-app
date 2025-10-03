import SearchAndFilter from "@/components/dashboard/SearchAndFilter";
import NotesGrid from "@/components/notes/NotesGrid";
import NotesGridSkeleton from "@/components/notes/NotesGridSkeleton";
import { createSupabaseServerClient } from "@/lib/supabase/supabaseServer";
import { getNotesCount } from "@/services/notesService";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { FaPlus } from "react-icons/fa";

type PageProps = {
    searchParams: Promise<{ [tag: string]: string }>;
}

async function Dashboard({ searchParams }: PageProps) {
    const params = await searchParams;
    const supabase = await createSupabaseServerClient();
    const { data: userInfo } = await supabase.auth.getUser();

    if (!userInfo) redirect("/login");

    const notesTotal = await getNotesCount(params.tag, params.q);
    return (
        <main className="flex justify-center px-4 py-12">
            <div className="max-w-7xl w-full mx-auto">
                <h2 className="text-4xl mb-4">Welcome, {userInfo.user?.user_metadata?.full_name ?? userInfo.user?.user_metadata?.username}</h2>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-2xl font-bold">My Notes</p>
                        <p>{notesTotal ?? 0} notes found</p>
                    </div>
                    <Link href="/dashboard/new" className="btn btn-secondary rounded-lg">
                        <FaPlus /><span>Create Note</span>
                    </Link>
                </div>

                <SearchAndFilter searchParams={searchParams} />

                <Suspense fallback={<NotesGridSkeleton />}>
                    <NotesGrid searchParams={searchParams} />
                </Suspense>
            </div>
        </main>
    );
}

export default Dashboard;