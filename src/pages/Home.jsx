import Leadership from "../components/Leadership";
import "../index.css";
import Herosection from "../components/Herosection";
import Services from "../components/Services";
// import { Star, ArrowDownToDot, Dot } from "lucide-react";
import Aboutme from "../components/Aboutme";
// import Contactform from "../components/Contactform";
export default function Home() {
  return (
    <div className="min-h-screen bg-smoky_black">
      <main>
        <Herosection />
        <Aboutme />
        <Leadership />
        <Services />
        {/* <Contactform /> */}
      </main>
    </div>
  );
}
