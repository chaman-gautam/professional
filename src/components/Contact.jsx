import ContactCard from "./ContactCard";
import Contactform from "./Contactform";
import { useState } from "react";
import axios from "axios";
export default function Contact() {
  const links = [
    { platform: "Instagram", username: "@yourhandle", link: "#" },
    { platform: "Facebook", username: "your.fb.id", link: "#" },
    { platform: "Twitter", username: "@yourtwitter", link: "#" },
    {
      platform: "Linkedin",
      username: "linkedin.com/in/yourprofile",
      link: "#",
    },
  ];

  return (
    <div
      className="bg-smoky_black flex flex-col items-center justify-end  pt-44 pb-8 pl-5 pr-5 "
      id="contact"
    >
      {/* Intro text */}
      <div className="text-white max-w-[1200px] mx-auto flex flex-col h-auto justify-end ">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-amber-400">
          Let's Connect!🙋🏻‍♂️
        </h2>
        <p className="text-lg opacity-90 mb-6 leading-relaxed">
          Whether you're a business owner, an investor, a fellow trader, or
          someone curious about market opportunities, I'd love to connect. Every
          conversation is an opportunity to learn, grow, exchange ideas, share
          insights, explore potential collaborations, and innovate together.
        </p>

        <ul className="text-lg mb-6">
          <p className="text-lg font-semibold mb-2">
            Feel free to reach out if you're looking to:
          </p>
          <ul className="pl-6 sm:pl-12 list-disc opacity-70 space-y-2">
            <li>Boost your sales performance through proven strategies</li>
            <li>Discuss investment or sales partnerships</li>
            <li>Strategize and execute business growth plans</li>
            <li>Develop and expand high-value client relationships</li>
            <li>Collaborate on innovative projects from concept to delivery</li>
            <li>Identify and capture new market opportunities</li>
            <li>Optimize sales pipelines and improve team performance</li>
            <li>Lead cross-functional initiatives for measurable results</li>
          </ul>
        </ul>

        <p className="text-lg opacity-90 leading-relaxed">
          I believe strong results come from genuine conversations, and I'm
          always open to working with driven individuals and organizations who
          value trust, strategy, and measurable outcomes.
        </p>
      </div>

      {/* Links + Form */}
      <div className="text-white max-w-[1200px] w-full mt-10">
        <div className="flex flex-col items-center lg:flex-row lg:items-start justify-center gap-10">
          {/* Contact cards */}
          <div className="flex flex-wrap gap-4 justify-center  ">
            {links.map((linka, index) => (
              <ContactCard
                key={index}
                platform={linka.platform}
                username={linka.username}
                link={linka.link}
              />
            ))}
          </div>

          {/* Contact form */}
          <Contactform />
        </div>
      </div>

      {/* Closing line */}
      <div className="mt-10 text-center">
        <h2 className="text-white text-lg opacity-70">
          Looking forward to connecting with you!
        </h2>
      </div>
    </div>
  );
}
