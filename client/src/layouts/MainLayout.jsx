import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="bg-[#fbf9f4] dark:bg-neutral-950">
      <Outlet context={{ isLoggedIn, setIsLoggedIn }} />
    </div>
  );
};

export default MainLayout;
