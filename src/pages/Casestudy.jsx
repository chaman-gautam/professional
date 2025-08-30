import React from "react";
import caseStudies from "../data/casestudydata.js";
import CaseStudyCard from "../components/Casestudycard.jsx";

const Casestudy = () => {
  return (
    <section className=" bg-smoky_black flex flex-col items-center justify-end px-4 pt-18 pb-4">
      <div className="py-20 max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold dark:text-white">
            Case Studies & Success Stories
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Explore real examples of how strategy, innovation, and execution
            helped businesses grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 ">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={i} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Casestudy;
