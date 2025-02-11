import React from "react";
import { SignInButton } from "@clerk/clerk-react";

const Home = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/time-organization-concept-close-up_23-2149046744.jpg?ga=GA1.1.738696290.1725114929&semt=ais_hybrid')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative flex flex-col items-center text-center text-white px-6">
        <h1 className="text-7xl font-extrabold mb-8 drop-shadow-lg ">
          Welcome to TaskWizard
        </h1>
        <p className="text-2xl max-w-3xl mb-10 opacity-90 text-grey-300">
          Organize your tasks efficiently and boost your productivity with our powerful to-do list application.
        </p>
        <SignInButton forceRedirectUrl="/dashboard" asChild>
          <button className="px-8 py-4 bg-blue-400 hover:bg-blue-600 text-black text-2xl font-semibold rounded-lg shadow-xl transition duration-300">
            Get Started
          </button>
        </SignInButton>
      </div>
    </div>
  );
};

export default Home;
