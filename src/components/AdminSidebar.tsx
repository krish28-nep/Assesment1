import { ChartArea, LayoutDashboard, UserCircle, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const sideBarItems = [
  { name: "DashBoard", route: "/dashboard", icon: <LayoutDashboard size={16} /> },
  { name: "User", route: "/users", icon: <Users size={16} /> },
  { name: "Chart", route: "/chart", icon: <ChartArea size={16} /> },
  { name: "Profile", route: "/profile", icon: <UserCircle size={16} /> },
];

const SideAdminBar = ({ isOpen }: { isOpen: boolean }) => {
  const { pathname } = useLocation();

  return (
    <div className={`bg-neutral-light shadow-neutral h-screen p-4 shadow-md transition-all duration-300
      ${isOpen ? "w-64" : "w-0 overflow-hidden"}`}>
      <span className="font-semibold text-3xl leading-[100%] custom-drop-shadow block">
        <span className="text-(--color-primary) font-bold">Awww</span>some<span className="text-(--color-primary) font-bold">.</span>
      </span>

      <ul className="space-y-2 mt-6">
        {sideBarItems.map((item, index) => {
          const isActive = pathname.includes(item.route);
          return (
            <li key={index}>
              <Link
                to={item.route}
                className={`flex items-center gap-2 rounded-md p-4 font-medium transition-colors ${isActive
                    ? "bg-(--color-primary-light) border-(--color-primary) border"
                    : "hover:bg-secondary-light"
                  }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideAdminBar;
