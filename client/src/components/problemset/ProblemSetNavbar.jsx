import { motion } from "motion/react";
import { toast } from "sonner";
import { LogIn, User } from "lucide-react";
import { LogOut } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

const ProblemSetNavbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useOutletContext();
  const handleLogOut = async () => {
    try {
      const res = await axios.post(
        "/api/signout",
        {},
        { withCredentials: true },
      );
      setIsLoggedIn(false);
      navigate("/");
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <motion.nav className="flex justify-between items-center py-10 dark:selection:bg-cyan-400/20">
      <span
        onClick={() => {
          document.documentElement.classList.toggle("dark");
        }}
        className="cursor-pointer text-2xl font-mono"
      >
        WiseCode
      </span>
      <div className="flex gap-2">
        <div className="flex font-mono justify-center items-center gap-4 border dark:selection:bg-cyan-400/20 border-green-200 bg-green-50 dark:bg-neutral-900 dark:border-neutral-800 p-3 rounded-lg ">
          <span className="dot animate-pulse w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-xs text-neutral-500">PLATFORM IS LIVE</span>
        </div>
        {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className={
                  "px-4 py-5 rounded-lg border border-violet-500/20 bg-violet-500/5 text-neutral-400 text-sm font-medium hover:bg-violet-500/10 hover:border-neutral-600 transition-all duration-200 cursor-pointer"
                }
                variant="outline"
              >
                <UserIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* <DropdownMenuItem>
                <UserIcon />
                Profile
              </DropdownMenuItem>

              <DropdownMenuItem>
                <SettingsIcon />
                Settings
              </DropdownMenuItem> */}

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={handleLogOut} variant="destructive">
                <LogOutIcon />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="group flex items-center gap-2 px-4 py-2 rounded-lg 
  border border-violet-500/20 bg-violet-500/5 
  text-violet-400 text-sm font-medium 
  hover:bg-violet-500/10 hover:border-violet-500/40 
  transition-all duration-200 cursor-pointer"
          >
            <LogIn
              size={16}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            Login
          </button>
        )}
      </div>
    </motion.nav>
  );
};

export default ProblemSetNavbar;
