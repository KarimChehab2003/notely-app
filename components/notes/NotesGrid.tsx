import { getNotes } from "@/services/notesService";
import NoteItem from "./NoteItem";
import Link from "next/link";

async function NotesGrid() {
    const notes = await getNotes();
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 max-h-[600px] overflow-y-auto">
            {
                notes.length !== 0 ?
                    notes.map((note) => (
                        <li key={note.id}>
                            <NoteItem {...note} />
                        </li>
                    )) : (
                        <p className="col-span-3 text-center text-gray-500">
                            You have no notes right now. Start by <Link href="/dashboard/new" className="text-info">Creating a new note</Link>
                        </p>
                    )
            }
        </ul>
    );
}

export default NotesGrid;