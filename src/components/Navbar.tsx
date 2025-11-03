import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { User, X, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const navLinks = ["Home", "About us", "Services", "News"];
  const { user, logout } = useAuth();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <nav className="flex justify-between items-center py-5 px-6 lg:px-10 bg-white relative">
      <span className="font-semibold text-3xl leading-[100%] custom-drop-shadow">
        <span className="text-(--color-primary) font-bold">Awww</span>
        <span>some</span>
        <span className="text-(--color-primary) font-bold">.</span>
      </span>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-14 items-center">
        {navLinks.map((link) => (
          <a key={link} href="#" className="hover:text-(--color-primary) transition-colors">
            {link}
          </a>
        ))}

        {user ? (
          <div ref={dropdownRef} className="relative">
            <button
              className="rounded-full p-2 border border-neutral-dark hover:bg-neutral transition-all cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <User className="h-6 w-6" />
            </button>

            {dropdownOpen && (
              <div className="absolute top-12 right-0 bg-neutral-light border border-neutral-dark rounded-lg shadow-md py-1 min-w-[150px]">
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
          <Link to="/login" className="btn-primary hover:scale-105 transition-transform duration-200">
            Login
          </Link>
        )}
      </div>

      {/* Mobile Navigation Trigger */}
      <div className="md:hidden flex items-center gap-4">
        {user && (
          <div ref={dropdownRef} className="relative">
            <button
              className="rounded-full p-2 border border-neutral-dark hover:bg-neutral transition-all cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <User className="h-6 w-6" />
            </button>

            {dropdownOpen && (
              <div className="absolute top-12 right-0 bg-neutral-light border border-neutral-dark rounded-lg shadow-md py-1 min-w-[150px]">
                <button
                  onClick={logout}
                  className="block w-full px-4 py-2 text-left hover:bg-neutral transition-all"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

        <button onClick={() => setMobileMenuOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Drawer With Slide Transition */}
      <div
        className={`fixed inset-0 z-50 bg-opacity-50 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        <div
          className={`relative items-center justify-center h-full w-full bg-neutral-50 shadow-lg p-6 flex flex-col gap-6 transition-transform duration-300
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>

          {navLinks.map((link) => (
            <a key={link} href="#" className="text-lg hover:text-(--color-primary) transition-colors">
              {link}
            </a>
          ))}

          {user ? <button onClick={logout} className="btn-primary">
            Logout
          </button> : (
            <Link to="/login" className="btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
