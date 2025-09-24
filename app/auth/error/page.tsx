function AuthErrorPage() {
    return (
        <main className="min-h-[100dvh] flex flex-col justify-center items-center px-4 bg-base-300">
            <h1 className="text-3xl font-bold mb-4">Authentication Error</h1>
            <p className="mb-4">
                Sorry, there was a problem signing you in. Please try again later or contact support.
            </p>
            <a href="/auth" className="text-info underline">
                Back to Login
            </a>
        </main>
    );
}

export default AuthErrorPage;