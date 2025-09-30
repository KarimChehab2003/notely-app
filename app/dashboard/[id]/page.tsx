import { getSingleNote } from "@/services/notesService";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

type NotePageProps = {
    params: Promise<{ id: string }>
}

async function NoteDetails(props: NotePageProps) {
    const params = await props.params;
    const note = await getSingleNote(params.id);

    console.log(note)
    return (
        <main className="flex justify-center flex-1 py-12">
            <div className="sm:w-xl lg:w-4xl mx-auto px-2 space-y-4">
                <Link href="/dashboard" className="inline-flex items-center space-x-2 font-semibold text-info px-4">
                    <FaArrowLeft /> <span> Back to Dashboard</span>
                </Link>

                <div className="card border border-gray-200 rounded-2xl shadow-md">
                    <div className="card-body">
                        <h2 className="card-title text-3xl sm:text-4xl font-light my-2">{note.title}</h2>
                        <div className="flex flex-col space-y-4">
                            <ul className="inline-flex items-center space-x-2 flex-wrap">
                                {
                                    note.tags.split(" ").map((tag) => (
                                        <li key={tag} className="badge bg-base-300 rounded-full font-semibold">{tag}</li>
                                    ))
                                }
                            </ul>
                            <p className="inline-flex items-center space-x-1 text-gray-500">
                                <FaRegCalendar /> <span className="text-sm">Created: {new Date(note.created_at).toLocaleDateString()}</span>
                            </p>
                        </div>
                        <div className="divider my-2"></div>

                        <div className="max-h-96 overflow-y-auto">
                            <p className="whitespace-pre-line">{note.content}</p>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}

export default NoteDetails;