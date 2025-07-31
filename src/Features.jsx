import React from "react";
import online from "./images/icon-online.svg";
import budgeting from "./images/icon-budgeting.svg";
import boarding from "./images/icon-onboarding.svg";
import api from "./images/icon-api.svg";
const featuresData = [
  {
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    imgSrc: online, // add your image url here
    imgAlt: "Online Banking Icon",
  },
  {
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    imgSrc: budgeting,
    imgAlt: "Simple Budgeting Icon",
  },
  {
    title: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    imgSrc: boarding,
    imgAlt: "Fast Onboarding Icon",
  },
  {
    title: "  Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    imgSrc: api,
    imgAlt: "api Icon",
  },
  // You had two "Fast Onboarding" entries; I combined into one here.
];

function FeatureCard({ title, description, imgSrc, imgAlt }) {
  return (
    <div className="  flex flex-col items-center lg:items-start gap-10 px-5 sm:px-10 lg:px-5 ">
      <img className="w-20 h-20" src={imgSrc} alt={imgAlt} />
      <h2 className="text-xl  font-semibold">{title}</h2>
      <p className="text-neutral-500">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <div
      id="features"
      className="bg-neutral-100 py-10 p-10 lg:px-35 lg:pt-25 lg:pb-10 lg:h-screen flex flex-col gap-20"
    >
      <div className="flex flex-col    gap-20">
        <h1 className=" text-left  text-5xl lg:text-5xl font-semibold">
          Why choose Digitalbank?
        </h1>
        <p className="text-xl text-neutral-500">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      {/* features */}
      <div className="flex  py-5 flex-col lg:flex-row gap-15">
        {featuresData.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </div>
  );
}
