import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";

const MainLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("/api/me", { withCredentials: true });
        setIsLoggedIn(true);
      } catch {
        setIsLoggedIn(false);
      }
    };
    checkAuth();
  }, []);
  return (
    <div className="bg-[#fbf9f4] dark:bg-neutral-950">
      <Outlet context={{ isLoggedIn, setIsLoggedIn }} />
    </div>
  );
};

export default MainLayout;
