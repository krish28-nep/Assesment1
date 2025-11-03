import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import type { User } from "../../pages/Users";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Barchart = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);
      } catch (error) {
        console.error("Data retrieval failed", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Compute labels (cities) and counts
  const cityCounts: Record<string, number> = {};
  users.forEach(user => {
    cityCounts[user.address.city] = (cityCounts[user.address.city] || 0) + 1;
  });

  const labels = Object.keys(cityCounts);
  const counts = Object.values(cityCounts);

  const backgroundColors = [
    "rgba(99, 102, 241, 0.5)",
    "rgba(34, 197, 94, 0.5)",
    "rgba(239, 68, 68, 0.5)",
    "rgba(234, 179, 8, 0.5)",
    "rgba(59, 130, 246, 0.5)",
    "rgba(168, 85, 247, 0.5)",
    "rgba(16, 185, 129, 0.5)",
    "rgba(245, 158, 11, 0.5)",
    "rgba(239, 68, 68, 0.5)",
    "rgba(37, 99, 235, 0.5)",
  ];

  const hoverColors = backgroundColors.map(color => color.replace("0.5", "0.8"));

  const usersByCity = {
    labels,
    datasets: [
      {
        label: "Users",
        data: counts,
        backgroundColor: backgroundColors,
        borderColor: hoverColors,
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: { ticks: { color: "rgba(100, 100, 100, 0.8)" } },
      y: { ticks: { color: "rgba(100, 100, 100, 0.8)" } },
    },
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-neutral-900 ">
          Users by City
        </h3>
        <p className="text-sm text-neutral-500 ">
          Number of users residing in each city
        </p>
      </div>

      <div className="h-[350px]">
        {loading ? <div>Loading ....</div> : <Bar data={usersByCity} options={barChartOptions} />}
      </div>
    </div>
  );
};

export default Barchart;
