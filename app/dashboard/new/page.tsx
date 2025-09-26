import CreateNoteForm from "@/components/notes/CreateNoteForm";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

function NewNotePage() {
    return (
        <main className="flex justify-center items-center px-4">
            <div className="max-w-7xl w-full mx-auto py-8">
                <Link href="/dashboard" className="inline-flex items-center space-x-2 font-medium rounded-lg mb-2 text-info">
                    <FaArrowLeft /> <span>Back To Dashboard</span>
                </Link>
                <h2 className="text-4xl sm:text-5xl font-bold mb-8">Create New Note</h2>
                <CreateNoteForm />
            </div>
        </main>
    );
}

export default NewNotePage;