import { getNotes } from "@/services/notesService";
import NoteItem from "./NoteItem";
import Link from "next/link";

type PageProps = {
    searchParams: Promise<{ [tag: string]: string }>;
}

async function NotesGrid({ searchParams }: PageProps) {
    const params = await searchParams;
    const notes = await getNotes(params.tag, params.q);
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 max-h-[600px] overflow-y-auto">
            {
                notes.length !== 0 ?
                    notes.map((note) => (
                        <li key={note.id}>
                            <NoteItem {...note} />
                        </li>
                    )) : (
                        <p className="col-span-3 text-center text-gray-500 my-8">
                            No notes found. Adjust the search/filter criteria or start by <Link href="/dashboard/new" className="text-info">Creating a new note</Link>
                        </p>
                    )
            }
        </ul>
    );
}

export default NotesGrid;