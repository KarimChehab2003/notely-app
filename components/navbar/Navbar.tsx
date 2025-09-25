import { FiEdit3 } from "react-icons/fi";
import Avatar from "./Avatar";
import Link from "next/link";
import { logout } from "@/lib/actions/auth";

async function Navbar() {
    return (
        <header className="bg-base-100 shadow-sm">
            <div className="navbar max-w-7xl mx-auto">
                <div className="flex-1 flex items-center space-x-2 text-xl">
                    <FiEdit3 />
                    <Link href="/dashboard">Notely</Link>
                </div>
                <button onClick={logout} className="btn btn-secondary btn-outline mx-2">Logout</button>
                <Avatar />

            </div>
        </header>
    );
}

export default Navbar;