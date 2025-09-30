"use client";
import { redirect } from "next/navigation";
import { FaRegCalendar } from "react-icons/fa";

function NoteItem(props: Note) {

    const redirectToNoteDetails = () => {
        redirect(`/dashboard/${props.id}`)
    }

    return (
        <article className="card border border-base-200 rounded-xl max-w-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer" onClick={redirectToNoteDetails}>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <ul className="space-x-2">
                    {
                        props.tags.split(" ").map((tag) => (
                            <li key={tag} className="badge bg-base-300 rounded-full font-semibold">{tag}</li>
                        ))
                    }
                </ul>
                <p className="line-clamp-2 text-gray-500 mt-4 mb-2">{props.content}</p>
                <p className="inline-flex justify-end items-center space-x-1 text-gray-500">
                    <FaRegCalendar /> <span className="text-sm">{new Date(props.created_at).toLocaleDateString()}</span>
                </p>
            </div>
        </article>
    );
}

export default NoteItem;