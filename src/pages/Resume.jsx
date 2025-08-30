import { div } from "framer-motion/m";
import React from "react";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="bg-smoky_black min-h-screen text-white pt-32 mx-auto items-center justify-center flex flex-col">
      <div className="flex justify-center items-center h-full flex-col gap-6 max-w-[1200px] mx-auto px-6    ">
        <h1 className="text-4xl font-bold">Resume Page</h1>
      </div>
      <Link
        to="/aboutme"
        className="inline-block mt-5 mb-5  bg-selective_yellow text-center text-smoky_black font-semibold px-6 py-3 rounded hover:bg-yellow-600 transition "
      >
        Go Back to About Me
      </Link>
    </div>
  );
}
