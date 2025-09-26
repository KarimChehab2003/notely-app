"use client";

import { addNewNote } from "@/lib/actions/note";
import Link from "next/link";
import { useActionState, useState } from "react";

const initialState = {
    success: false,
    errors: {},
    message: ""
}

function CreateNoteForm() {
    const [noteContent, setNoteContent] = useState<string>("");
    const [formState, formAction, isPending] = useActionState(addNewNote, initialState);

    return (
        <form action={formAction} className="border border-gray-300 rounded-xl shadow-md p-4">
            <fieldset className="fieldset space-y-2">

                <div className="flex flex-col space-y-1">
                    <label htmlFor="titleInput" className="font-bold text-base">Title</label>
                    <input type="text" id="titleInput" name="title" placeholder="Note title..." className="input focus:ring-0 focus:outline-none focus:border-gray-500 transition-colors duration-200 w-full rounded-lg" />
                    {formState.errors?.title && (
                        <p className="text-error">{formState.errors?.title}</p>
                    )}
                </div>

                <div className="flex flex-col space-y-1">
                    <label htmlFor="tagsInput" className="font-bold text-base">Tags</label>
                    <input type="text" id="tagsInput" name="tags" placeholder="Add a tag..." className="input focus:ring-0 focus:outline-none focus:border-gray-500 transition-colors duration-200 w-full rounded-lg" />
                    <p className="text-sm text-gray-400">Separate tags with spaces e.g. <span className="italic">react</span> <span className="italic">web-dev</span> <span className="italic">frontend-dev</span></p>
                    {formState.errors?.tags && (
                        <p className="text-error">{formState.errors?.tags}</p>
                    )}
                </div>

                <div className="flex flex-col space-y-1">
                    <label htmlFor="contentInput" className="font-bold text-base">Content</label>
                    <textarea
                        id="contentInput"
                        name="content"
                        placeholder="Write your note's content here..."
                        maxLength={3000}
                        onChange={(e) => setNoteContent(e.target.value)}
                        className="input focus:ring-0 focus:outline-none focus:border-gray-500 transition-colors duration-200 w-full rounded-lg h-[40dvh] text-wrap pt-1"
                    />
                    <p className={`${noteContent.length === 3000 ? "text-error" : "text-gray-400"}`}>{noteContent.length} characters.</p>
                    {formState.errors?.content && (
                        <p className="text-error">{formState.errors?.content}</p>
                    )}
                </div>
            </fieldset>
            <div className="flex justify-end items-center space-x-4">
                <Link href="/dashboard" className="btn btn-outline rounded-lg">Cancel</Link>
                <button type="submit" className="btn btn-accent rounded-lg">{isPending ? "Pending..." : "Submit"}</button>
            </div>
        </form>
    );
}

export default CreateNoteForm;