import AuthForm from "@/components/auth/AuthForm";
import GoogleLoginButton from "@/components/auth/GoogleLoginButton";

function AuthPage() {
    return (
        <main className="min-h-[100dvh] flex justify-center items-center px-4 bg-base-300">
            <div className="max-w-md w-full bg-base-200 p-4 rounded-box shadow-md py-6 space-y-2">

                <h1 className="text-4xl sm:text-5xl font-bold text-center">Notely</h1>
                <p className="text-center text-lg text-base-content/60 mb-4">The repo for your notes.</p>

                <div className="px-4">
                    <GoogleLoginButton />
                </div>

                <div className="divider my-4 px-4">OR</div>

                <AuthForm />
            </div>
        </main>
    );
}

export default AuthPage;