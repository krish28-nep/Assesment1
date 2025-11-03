import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { user, updateUser } = useAuth();

  const [email, setEmail] = useState(user?.email || "");
  const [role, setRole] = useState(user?.role || "VIEWER");
  const [password, setPassword] = useState("password123"); // default/mock password

  const isAdmin = role === "ADMIN";

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setRole(user.role);
    }
  }, [user]);

  const handleSave = () => {
    if (!isAdmin) return;
    updateUser({ email, role }); // update context + localStorage
    toast.success(`Profile updated successfully.`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Profile</h2>

      <div className="mb-4">
        <label className="block text-gray-500 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!isAdmin} // only editable for Admin
          className="w-full p-2 border rounded-md text-gray-900 bg-gray-100"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-500 mb-1">Role</label>
        <input
          type="text"
          value={role}
          disabled
          className="w-full p-2 border rounded-md text-gray-900 bg-gray-100"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-500 mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={!isAdmin}
          className="w-full p-2 border rounded-md text-gray-900 bg-gray-100"
        />
      </div>

      {isAdmin && (
        <button
          onClick={handleSave}
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Save
        </button>
      )}
    </div>
  );
};

export default ProfilePage;
