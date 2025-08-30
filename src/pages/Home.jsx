import Leadership from "../components/Leadership";
import "../index.css";
import Herosection from "../components/Herosection";
import Services from "../components/Services";
import { Star, ArrowDownToDot, Dot } from "lucide-react";
import Aboutme from "../components/Aboutme";
import Contactform from "../components/Contactform";
export default function Home() {
  return (
    <div className="min-h-screen bg-smoky_black">
      <main>
        <div className="absolute inset-0 overflow-hidden">
          {/* Falling stars */}
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="absolute  text-white rounded-full animate-fall"
              style={{
                top: `${Math.random() * -100}%`, // start above screen
                left: `${Math.random() * 100}%`, // random horizontal
                animationDuration: `${3 + Math.random() * 5}s`, // random speed
                animationDelay: `${Math.random() * 5}s`, // random delay
              }}
            >
              <Dot size={32} />
            </span>
          ))}
        </div>

        <Herosection />
        <Aboutme />
        <Leadership />
        <Services />
        {/* <Contactform /> */}
      </main>
    </div>
  );
}
