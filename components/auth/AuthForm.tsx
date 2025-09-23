"use client";

import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

function AuthForm() {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    return (
        <section className="space-y-4 px-4">

            <div className="tabs tabs-box bg-base-300 space-x-2">
                <button className={`tab h-8 flex-1 ${isLogin ? "tab-active" : ""} transition-colors duration-200`} onClick={() => setIsLogin(true)}>Login</button>
                <button className={`tab h-8 flex-1 ${!isLogin ? "tab-active" : ""} transition-colors duration-200`} onClick={() => setIsLogin(false)}>Sign Up</button>
            </div>

            <button className="btn btn-secondary rounded-full inline-flex items-center w-full my-2 text-secondary-content">
                <FaGoogle />
                <span className="font-bold">{isLogin ? "Login" : "Sign In"} With Google</span>
            </button>

            <div className="divider my-4">OR</div>

            <form className="fieldset">
                {
                    !isLogin && (
                        <>
                            <label htmlFor="">Username</label>
                            <input type="text" id="usernameInput" placeholder="Username" className="input focus:ring-0 focus:outline-none focus:border-gray-500 transition-colors duration-200 w-full" />
                        </>
                    )
                }

                <label htmlFor="">Email</label>
                <input type="email" id="emailInput" placeholder="Email" className="input focus:ring-0 focus:outline-none focus:border-gray-500 transition-colors duration-200 w-full" />

                <label htmlFor="">Password</label>
                <input type="password" id="passwordInput" placeholder="Password" className="input focus:ring-0 focus:outline-none focus:border-gray-500 transition-colors duration-200 w-full" />

                <button className="btn btn-primary mt-4 rounded-full">{isLogin ? "Login" : "Sign Up"}</button>
            </form>
        </section>
    );
}

export default AuthForm;