import z from "zod";

export const CreateNoteSchema = z.object({
    title: z.string().min(3, "Minimum title length is 3 characters."),
    tags: z.string().optional(),
    content: z.string().min(5, "Minimum note content is 5 characters")
})