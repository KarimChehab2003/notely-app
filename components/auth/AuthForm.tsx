"use client";
import { loginWithEmail, signUpWithEmail } from "@/lib/actions/auth";
import { useActionState, useState } from "react";

const initialState = { success: false, errors: {}, message: "" };

function AuthForm() {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [formState, formAction, isPending] = useActionState(isLogin ? loginWithEmail : signUpWithEmail, initialState)
    return (
        <section className="space-y-4 px-4">
            <div className="tabs tabs-box bg-base-300 space-x-2">
                <button className={`tab h-8 flex-1 ${isLogin ? "tab-active" : ""} transition-colors duration-200`} onClick={() => setIsLogin(true)}>Login</button>
                <button className={`tab h-8 flex-1 ${!isLogin ? "tab-active" : ""} transition-colors duration-200`} onClick={() => setIsLogin(false)}>Sign Up</button>
            </div>

            {/* Auth Form */}
            <form action={formAction} className="fieldset">
                {
                    !isLogin && (
                        <>
                            <label htmlFor="usernameInput">Username</label>
                            <input type="text" id="usernameInput" name="username" placeholder="Username" className="input focus:ring-0 focus:outline-none focus:border-gray-500 transition-colors duration-200 w-full" />
                            {
                                formState.errors?.username && (
                                    <p className="text-sm text-error">{formState.errors.username.join(", ")}</p>
                                )
                            }
                        </>
                    )
                }

                <label htmlFor="emailInput">Email</label>
                <input type="email" id="emailInput" name="email" placeholder="Email" className="input focus:ring-0 focus:outline-none focus:border-gray-500 transition-colors duration-200 w-full" />
                {
                    formState.errors?.email && (
                        <p className="text-sm text-error">{formState.errors.email.join(", ")}</p>
                    )
                }

                <label htmlFor="passwordInput">Password</label>
                <input type="password" id="passwordInput" name="password" placeholder="Password" className="input focus:ring-0 focus:outline-none focus:border-gray-500 transition-colors duration-200 w-full" />
                {
                    formState.errors?.password && (
                        <p className="text-sm text-error">{formState.errors.password.join(", ")}</p>
                    )
                }

                <button className="btn btn-primary mt-4 rounded-full" disabled={isPending}>{isPending ? "Loading..." : isLogin ? "Login" : "Sign Up"}</button>
            </form>
        </section>
    );
}

export default AuthForm;