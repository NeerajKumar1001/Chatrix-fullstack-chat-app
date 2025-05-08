import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, Squirrel, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className=" bg-[#1a1a1a]   border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="  container mx-auto  px-4 h-14">
        <div className=" flex items-center justify-between h-full">
          <div className="flex items-center gap-8 justify-">
            {authUser && (
              <>
                <Link
                  to={"/profile"}
                  className={`bg-[#1a1a1a] flex gap-2 items-center`}
                >
                  <User className="size-5" />
                  <span className="hidden "></span>
                </Link>
              </>
            )}
          </div>
          <div>
            <Link
              to="/"
              className="flex items-center gap-1 hover:opacity-80  transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center p-">
                <Squirrel className="w-6 h- text-primary" />
              </div>
              <h1 className="text-lg font-bold">Chatrix</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2 ">
            <Link
              to={"/settings"}
              className={`  bg-[#1a1a1a] flex gap-2 items-center mr-2`}
            >
              <Settings className=" w-4 h-4" />
              <span className="hidden sm:inline "></span>
            </Link>
            {authUser && (
              <>
                <button
                  className=" bg-[#1a1a1a] flex gap-2 items-center"
                  onClick={logout}
                >
                  <LogOut className="size-5" />
                  <span className="hidden">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
