import React from "react";
import { useParams, Link } from "react-router-dom";
import caseStudies from "../data/casestudydata.js";

const Casestudydetail = () => {
  const { id } = useParams();
  const study = caseStudies.find((cs) => cs.id === id);

  if (!study) {
    return <p className="text-center text-red-500">Case Study not found</p>;
  }

  return (
    <section className="bg-smoky_black flex flex-col items-center justify-end px-4 pt-18 pb-4">
      <div className="py-20 max-w-[1000px] mx-auto px-6">
        <Link to="/casestudy" className="text-blue-600 hover:underline">
          ← Back to Case Studies
        </Link>

        <h2 className="text-4xl font-bold mt-6 mb-4 dark:text-white">
          {study.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          <strong>Client:</strong> {study.client} | <strong>Industry:</strong>{" "}
          {study.industry}
        </p>

        <img
          src={study.image}
          alt={study.title}
          className="rounded-lg shadow-md mb-8"
        />

        <h3 className="text-2xl font-semibold mb-3 text-orange-500">
          The Challenge
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {study.challenge}
        </p>

        <h3 className="text-2xl font-semibold mb-3 text-blue-600">
          The Solution
        </h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
          {study.solution.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold mb-3 text-green-600">
          The Results
        </h3>
        <ul className="text-gray-700 dark:text-gray-300 mb-6 space-y-2">
          {Object.entries(study.results).map(([key, value], i) => (
            <li key={i}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>

        {study.testimonial && (
          <blockquote className="p-4 italic border-l-4 border-blue-600 bg-blue-50 dark:bg-gray-700 dark:border-blue-400 rounded">
            “{study.testimonial}”
          </blockquote>
        )}
      </div>
    </section>
  );
};

export default Casestudydetail;
