import { useEffect, useState } from "react";
import axios from "axios";
import type { User } from "./Users";

const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;

  // Compute unique counts
  const totalUsers = users.length;
  const totalCompanies = new Set(users.map(u => u.company.name)).size;
  const totalCities = new Set(users.map(u => u.address.city)).size;
  const totalWebsites = new Set(users.map(u => u.website)).size;

  const cardData = [
    { title: "Total Users", value: totalUsers },
    { title: "Companies", value: totalCompanies },
    { title: "Cities", value: totalCities },
    { title: "Websites", value: totalWebsites },
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center"
        >
          <p className=" text-sm">{card.title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
