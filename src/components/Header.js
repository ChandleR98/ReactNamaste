import { useContext, useEffect, useState } from "react";
import { LOGO } from "../utils/MockData";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const logo = new URL("../assets/logoFood.png", import.meta.url).href;
  const [btn, setBtn] = useState("Log in");
  const online = useOnlineStatus();
  const user=useContext(UserContext);
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // 🔥 single source of truth
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="sticky top-0 z-50 
                    flex items-center justify-between 
                    bg-white dark:bg-gray-900 
                    shadow-md dark:shadow-gray-900/40 
                    px-6 py-3 
                    transition-colors duration-300">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img className="w-12 h-12 object-contain" alt="logo" src={logo} />
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          Food App
        </h1>
      </div>

      {/* Nav Links */}
      <ul className="flex items-center gap-8 text-gray-700 dark:text-gray-300 font-medium">
        <li>{online ? "🟢" : "🔴"}</li>

        <li className="hover:text-blue-500 transition">
          <Link to="/">Home</Link>
        </li>

        <li className="hover:text-blue-500 transition">
          <Link to="/contact">Contact</Link>
        </li>

        <li className="hover:text-blue-500 transition">
          <Link to="/about">About</Link>
        </li>

        <li className="hover:text-blue-500 transition cursor-pointer">
          🛒 Cart
        </li>
         <li className="hover:text-blue-500 transition cursor-pointer">
          UserName-{user?.userName}
        </li>
      </ul>

      {/* Right Controls */}
      <div className="flex items-center gap-4">

        {/* 🌙 Dark Mode Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-2 rounded-lg 
                     bg-gray-200 dark:bg-gray-700 
                     hover:scale-95 transition"
        >
          {dark ? "☀️" : "🌙"}
        </button>

        {/* Login Button */}
        <button
          className="bg-blue-500 text-white px-5 py-2 rounded-lg 
                     hover:bg-blue-600 active:scale-95 
                     transition shadow-sm"
          onClick={() => {
            btn === "Log in" ? setBtn("Log Out")  : setBtn("Log in") ; 
            btn === "Log in" ? user.setUserInfo("Koushik Majumder")  : user.setUserInfo("You're logged out") ; 

          
          }}
        >
          {btn}
        </button>

      </div>
    </div>
  );
};

export default Header;