import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}


const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const { user } = useAuth();
  const isAdmin = user?.role === "ADMIN";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(res.data)
        setUsers(res.data);
      } catch (error) {
        console.error("Data retrieval failed", error);
      }
    };

    fetchUsers();
  }, []);

  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;
  const currentUsers = users.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handleDelete = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);

    toast.success("User removed successfully.");
  };

  return (
    <div className="overflow-x-auto p-5">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>

      <table className="w-full border-collapse text-left border rounded-xl p-4">
        <thead className="bg-neutral-light border-b border-neutral-dark">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Company</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id} className="border-b hover:bg-neutral-light transition">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.company?.name}</td>
              <td className="p-3 flex justify-center gap-3">
                <button
                  className="px-3 py-1 rounded-md border border-(--color-primary) text-(--color-primary) hover:bg-(--color-primary-light)"
                >
                  <Link to={`/users/${user.id}`}>View</Link>
                </button>
                {isAdmin && <button
                  className="px-3 py-1 rounded-md border border-red-500 text-red-500 hover:bg-red-100"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>}
              </td>
            </tr>
          ))}

          {currentUsers.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center py-6 text-neural-500">
                No Users Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-end items-center gap-3">
        <button
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded-md disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        <span className="font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded-md disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;
