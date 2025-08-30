import { Link } from "react-router-dom";

export default function Singlepage({ children }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-smoky_black  text-white pt-32">
      <main className="max-w-[1200px] mx-auto pb-6 space-y-6 ">
        <Link
          to="/"
          className="block mt-5 bg-selective_yellow text-center text-smoky_black font-semibold px-6 py-3 rounded hover:bg-yellow-600 transition "
        >
          Go Back Home
        </Link>
        {children}
      </main>
    </section>
  );
}
