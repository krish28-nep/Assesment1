import { useAuth } from "../context/AuthContext";
import { User, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const AdminNavbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
    const { user, logout } = useAuth();
    const [modalOpen, setModalOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setModalOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="flex justify-between lg:justify-end items-center py-2 px-10 lg:py-6 shadow-md">
            <button
                className="lg:hidden p-2 rounded-md border border-neutral-dark hover:bg-neutral transition-all"
                onClick={toggleSidebar}
            >
                <Menu className="h-5 w-5" />
            </button>

            {user ? (
                <div ref={dropdownRef} className="relative flex">
                    <button
                        className="rounded-full p-2 border border-neutral-dark hover:bg-neutral transition-all cursor-pointer"
                        onClick={() => setModalOpen(!modalOpen)}
                    >
                        <User className="h-5 w-5" />
                    </button>

                    {modalOpen && (
                        <div className="absolute bg-neutral-50 top-12 right-0 bg-neutral-light border border-neutral-dark rounded-lg shadow-md py-1 min-w-[150px]">
                            <button
                                onClick={logout}
                                className="block w-full px-4 py-2 text-left hover:bg-neutral transition-all"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <Link to="/login" className="btn-primary cursor-pointer">Login</Link>
            )}
        </nav>
    );
};

export default AdminNavbar;
