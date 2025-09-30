import Navbar from "@/components/navbar/Navbar";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Navbar />
            <div className="flex flex-col flex-1">
                {children}
            </div>
        </div>
    );
}

export default Layout;