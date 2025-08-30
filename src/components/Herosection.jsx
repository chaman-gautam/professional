import { useState, useEffect } from "react";
import { ArrowDown, Contact } from "lucide-react";
import { Link } from "react-router-dom";
const words = [
  "Founder",
  "CEO",
  "Business Dev Manager",
  "Sales Director",
  "Project Manager",
];

export default function HeroSection() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout;
    if (!isDeleting && letterIndex < currentWord.length) {
      // Typing effect
      timeout = setTimeout(() => {
        setText((prev) => prev + currentWord[letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 100);
    } else if (isDeleting && letterIndex > 0) {
      // Deleting effect
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setLetterIndex((prev) => prev - 1);
      }, 80);
    } else if (!isDeleting && letterIndex === currentWord.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && letterIndex === 0) {
      // Move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, wordIndex]);

  return (
    <section className="flex flex-col relative  items-center pt-16  justify-center  space-y-4 md:pt-32 h-screen overflow-hidden ">
      {/* Floating Blobs */}
      {/* <div className="absolute w-272 h-72 bg-rosewood rounded-full blur-3xl opacity-40 animate-blob"></div> */}
      {/* <div className="absolute w-72 h-72 bg-selective_yellow rounded-full blur-3xl opacity-40 animate-blob-delay2 "></div> */}
      {/* <div className="absolute w-400 h-100 bg-amber-950 rounded-full blur-3xl opacity-40 animate-blob-delay4 "></div> */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-smoky_black via-rosewood to-princeton_orange"></div> */}
      {/* <div className="absolute w-96 h-96 bg-amber-300 opacity-30 rounded-full blur-3xl animate-pulse -top-20 -left-20"></div> */}
      <div className="absolute w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl animate-ping -bottom-10 -right-10"></div>
      <div className="absolute w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl animate-ping -bottom-10 -left-10"></div>

      {/* portfolio image */}

      {/* <div className="md:hidden lg:hidden ">
        <img
          src="https://placehold.co/600x400?text=Retail+Growth"
          alt=""
          className="h-72 w-60 rounded shadow-lg  object-cover object-center"
        /> */}
      {/* <h1 className="text-white ">hii there</h1> */}
      {/* </div> */}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-bold mb-7 capitalize 
                 text-gray-900 dark:text-gray-100 
                 drop-shadow-lg line-height[1.5] leading-tight"
        >
          Bridging the gap between vision and execution
        </h2>

        {/* Typing text */}
        <h2 className="text-lg sm:text-xl w-2/3 md:text-2xl font-mono m-auto tracking-wide">
          <span className="text-gray-700 dark:text-gray-300">{"As a "}</span>
          <span className="text-amber-500 font-semibold">{text}</span>
          <span className="animate-blink text-amber-500">|</span>
          <span className="text-gray-700 dark:text-gray-300 ">
            , I specialize in transforming innovative ideas into successful,
            measurable results.
          </span>
        </h2>

        {/* Tagline */}
        <p
          className="mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto 
                text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          Crafting strategies, leading teams, and delivering impactful results
          across industries.
        </p>
        {/* Call to action */}
        <div className="mt-8 flex flex-col md:flex-row lg:flex-row justify-center gap-4">
          <Link
            to="/Contact"
            className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-black font-bold shadow-lg hover:shadow-amber-500/40 transition-all duration-300"
          >
            Start A Conversion
          </Link>
          <Link
            to="/Casestudy"
            className="px-6 py-3 rounded-full border border-amber-400 hover:bg-amber-400/20 text-amber-300 font-bold shadow-lg transition-all duration-300"
          >
            View Case Studies
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0  left-1/2 cursor-pointer transform -translate-x-1/2 flex flex-col items-center ">
        <span className="text-sm mb-2 text-purple-600 font-bold">scroll</span>
        <ArrowDown className="h-12 w-5 text-white animate-bounce rounded-full font-bold shadow-sm" />
      </div>
    </section>
  );
}

// import { useEffect, useState } from "react";

// export default function HeroSectionWheel() {
//   const roles = [
//     "Founder",
//     "CEO",
//     "Business Development Manager",
//     "Sales Director",
//     "Project Manager",
//   ];

//   const [selectedRole, setSelectedRole] = useState("");
//   const [rotation, setRotation] = useState(0);
//   const [isSpinning, setIsSpinning] = useState(false);

//   const spinWheel = () => {
//     if (isSpinning) return;
//     setIsSpinning(true);

//     // Pick a random role index
//     const randomIndex = Math.floor(Math.random() * roles.length);

//     // Each segment angle
//     const segmentAngle = 360 / roles.length;

//     // Final rotation to land on the role
//     const finalRotation =
//       360 * 5 + // 5 full spins
//       (360 - randomIndex * segmentAngle - segmentAngle / 2); // center the selected

//     setRotation(finalRotation);

//     // After spin ends
//     setTimeout(() => {
//       setSelectedRole(roles[randomIndex]);
//       setIsSpinning(false);
//     }, 2000); // match with CSS animation duration
//   };

//   useEffect(() => {
//     spinWheel();
//     const interval = setInterval(spinWheel, 3000); // spin every 8s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
//       {/* Wheel */}
//       <div
//         className={`w-72 h-72 rounded-full border-[10px] border-white relative`}
//         style={{
//           transition: "transform 5s cubic-bezier(0.17, 0.67, 0.83, 0.67)",
//           transform: `rotate(${rotation}deg)`,
//         }}
//       >
//         {roles.map((role, i) => {
//           const segmentAngle = 360 / roles.length;
//           return (
//             <div
//               key={i}
//               className="absolute w-1/2 h-1/2 origin-bottom-right flex items-center justify-center text-white font-semibold text-xs"
//               style={{
//                 background: i % 2 === 0 ? "#e85d04" : "#ffba08",
//                 transform: `rotate(${i * segmentAngle}deg) skewY(${
//                   90 - segmentAngle
//                 }deg)`,
//               }}
//             >
//               <span
//                 style={{
//                   transform: `skewY(-${90 - segmentAngle}deg) rotate(${
//                     segmentAngle / 2
//                   }deg)`,
//                 }}
//               >
//                 {role}
//               </span>
//             </div>
//           );
//         })}
//       </div>

//       {/* Pointer */}
//       <div className="absolute top-[calc(50%-180px)] w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-transparent border-b-white"></div>

//       {/* Selected Role Text */}
//       <h1 className="mt-8 text-4xl font-extrabold text-white">
//         {selectedRole && (
//           <>
//             Turning <span className="text-selective_yellow">Vision</span> into{" "}
//             <span className="text-persimmon">Execution</span> as{" "}
//             <span className="text-engineering_orange">{selectedRole}</span>
//           </>
//         )}
//       </h1>
//     </section>
//   );
// }
