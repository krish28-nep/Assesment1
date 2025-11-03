import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Phone, MapPin, Building, ArrowLeft } from "lucide-react";
import type { User } from "./Users";

const UserDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchUser = async () => {
            try {
                setLoading(true);
                const res = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
                setUser(res.data);
            } catch (err) {
                setError("Failed to fetch user data");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    if (loading) return <div className="p-6 text-neutral-500">Loading user details...</div>;
    if (error) return <div className="p-6 text-red-500">{error}</div>;
    if (!user) return <div className="p-6 text-neutral-500">No user found</div>;

    return (
        <div className="p-6 space-y-6">
            {/* Header with Back Button */}
            <div className="flex justify-between items-center gap-4">
                <h1 className="text-2xl font-bold">User Detail</h1>
                <button
                    onClick={() => navigate("/users")}
                    className="flex items-center gap-2 btn-primary"
                >
                    <ArrowLeft size={16} /> Back
                </button>
            </div>

            <div className="grid grid-cols-1 mx-auto max-w-4xl lg:grid-cols-3 gap-6">
                {/* Profile Card */}
                <div className="rounded-lg border border-neutral-200 p-5 flex flex-col items-center text-center space-y-3">
                    <div className="w-20 h-20 rounded-full bg-(--color-primary) flex items-center justify-center text-neutral-50 text-2xl font-bold">
                        {user.name[0]}
                    </div>
                    <h2 className="font-semibold text-lg">{user.name}</h2>
                    <p className="text-neutral-500">@{user.username}</p>
                    <button className="mt-2 w-full py-2 bg-(--color-primary) text-neutral-50 rounded-md flex items-center justify-center gap-2">
                        <Phone size={16} /> Contact
                    </button>

                    <div className="grid grid-cols-2 gap-2 w-full mt-4 text-sm">
                        <div className="bg-neutral-50 p-2 rounded-md text-center border border-neutral-200">
                            <p className="text-neutral-400 text-xs">Location</p>
                            <p className="font-medium">{user.address.city}</p>
                        </div>
                        <div className="bg-neutral-50 p-2 rounded-md text-center border border-neutral-200">
                            <p className="text-neutral-400 text-xs">Company</p>
                            <p className="font-medium">{user.company.name}</p>
                        </div>
                    </div>
                </div>

                {/* About & Contact */}
                <div className="lg:col-span-2 flex flex-col space-y-4">
                    {/* About */}
                    <div className="border border-neutral-200 rounded-lg p-5">
                        <p className="font-semibold mb-2">ABOUT</p>
                        <p className="text-neutral-700 text-sm">{user.company.catchPhrase}</p>
                    </div>

                    {/* Contact Information */}
                    <div className="border border-neutral-200 rounded-lg p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <p className="font-semibold text-sm flex items-center gap-2"><Phone size={16} /> EMAIL</p>
                            <p className="text-(--color-primary) text-sm">{user.email}</p>

                            <p className="font-semibold text-sm flex items-center gap-2 mt-3"><Phone size={16} /> PHONE</p>
                            <p className="text-sm">{user.phone}</p>
                        </div>

                        <div className="space-y-2">
                            <p className="font-semibold text-sm flex items-center gap-2"><MapPin size={16} /> ADDRESS</p>
                            <p className="text-sm">{user.address.street}, {user.address.suite}</p>
                            <p className="text-sm">{user.address.city} - {user.address.zipcode}</p>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 flex items-start gap-3">
                        <div className="p-2 rounded-md bg-blue-100">
                            <Building size={20} className="text-(--color-primary)" />
                        </div>
                        <div>
                            <p className="font-semibold">Company</p>
                            <p className="font-medium">{user.company.name}</p>
                            <p className="text-neutral-600 text-sm">{user.company.bs}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
