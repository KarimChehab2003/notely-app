import z from "zod"

export const signUpSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.email("Invalid Email"),
    password: z.string().min(6, "Password must be at least 6 characters")
});

export const loginSchema = z.object({
    email: z.email("Invalid Email"),
    password: z.string().min(6, "Password must be at least 6 characters")
})