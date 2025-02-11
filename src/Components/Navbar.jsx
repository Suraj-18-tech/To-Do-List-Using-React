import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { user } = useUser(); 

  return (
    <nav className="w-full bg-pink-200 shadow-lg shadow-orange-800/50 p-4 flex justify-between items-center transition duration-300 hover:shadow-xl hover:shadow-blue-400/50 hover:bg-pink-300">
      <h1 className="text-3xl font-extrabold text-black drop-shadow-lg transition duration-300 hover:drop-shadow-2xl hover:text-gray-900">
      TaskWizard
      </h1>
      <div className="flex items-center gap-4 transition duration-300">
        {user && (
          <span className="text-lg font-semibold text-gray-900">{user.fullName}</span>
        )}
        <div className="scale-125 hover:scale-150 transition-transform duration-300">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
