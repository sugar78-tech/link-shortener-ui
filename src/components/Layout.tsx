import { Link, Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

import DashboardIcon from "@/assets/icons/dashboardIcon.svg";
import HomeIcon from "@/assets/icons/homeIcon.svg";

export const Layout = () => {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 bg-gradient-to-b from-gray-900 to-teal-700 to-80% p-8 text-gray-100">
      <ToastContainer />
      <header className="flex w-full items-center justify-between">
        <h1 className="mb-8 text-4xl font-bold text-teal-400">
          AppCortador de URLs
        </h1>
        <nav className="flex gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-teal-400 transition-colors hover:text-teal-300"
          >
            <HomeIcon className="h-6 w-6" />
            Home
          </Link>
          <Link
            to="/dashboard"
            className="flex items-center gap-2 font-bold text-teal-400 transition-colors hover:text-teal-300"
          >
            <DashboardIcon className="h-6 w-6" />
            Dashboard
          </Link>
        </nav>
      </header>
      <Outlet />
    </main>
  );
};
