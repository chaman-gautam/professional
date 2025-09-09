import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aboutme from "./components/Aboutme";
import Pagenotfound from "./pages/Pagenotfound";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CaseStudies from "./pages/Casestudy";
import CaseStudyDetail from "./pages/Casestudydetail1";

import Leadership from "./components/Leadership";
import Professionalroles from "./components/Services";
import Singlepage from "./pages/Singlepage";
import Resume from "./pages/Resume";
export default function App() {
  return (
    <BrowserRouter>
      {/* navbar  */}
      <div className="flex items-center justify-center sticky top-0 z-50 ">
        <Navbar />
      </div>
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path="/" element={<Home />} />

        {/* <Route path="/Aboutme" element={<Aboutme />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/aboutme"
          element={
            <Singlepage>
              <Aboutme />
            </Singlepage>
          }
        />
        <Route path="/casestudy" element={<CaseStudies />} />
        <Route
          path="/professionalroles"
          element={
            <Singlepage>
              <Professionalroles />
            </Singlepage>
          }
        />
        <Route
          path="/leadership"
          element={
            <Singlepage>
              <Leadership />
            </Singlepage>
          }
        />
        <Route
          path="/Ceostrategy"
          element={
            <Singlepage>
              <Leadership />
            </Singlepage>
          }
        />
        <Route path="/resume" element={<Resume />} />
        <Route
          path="/Founderjourney"
          element={
            <Singlepage>
              <Leadership />
            </Singlepage>
          }
        />

        <Route path="/casestudydetail/:id" element={<CaseStudyDetail />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

// import { BrowserRouter, Route, Routes } from "react-router-dom";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={<h1 className="text-blue-600">Hello inline</h1>}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }
