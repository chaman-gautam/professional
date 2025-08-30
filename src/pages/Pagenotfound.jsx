import Navbar from "../components/Navbar";
import { Smile } from "lucide-react";
export default function Pagenotfound() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-smoky_black text-white">
        {/* <Navbar /> */}
        <h1 className="text-white text-9xl capitalize text-center ">
          page not found
        </h1>
        <Smile className="w-20 h-20 text-amber-500 mt-4" />
        <div className="mt-6">
          <p className="text-gray-400 text-lg">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-gray-400 text-lg">
            It might have been moved or deleted.
          </p>
          <div className="mt-8 text-center">
            <a
              href="/"
              className="px-6 py-3 bg-amber-500 text-black rounded-lg hover:bg-amber-600 transition"
            >
              Go Back Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
