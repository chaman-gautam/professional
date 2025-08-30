import React from "react";
import { Link } from "react-router-dom";

const CaseStudyCard = ({ study }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition p-6  md:max-w-[380px]">
      <img src={study.image} alt={study.title} className="rounded-lg mb-4" />
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
        {study.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{study.industry}</p>
      <p className="text-gray-700 dark:text-gray-400 mb-4 line-clamp-3">
        {study.challenge}
      </p>
      <Link
        to={`/casestudydetail/${study.id}`}
        className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
      >
        Read Full Story →
      </Link>
    </div>
  );
};

export default CaseStudyCard;
