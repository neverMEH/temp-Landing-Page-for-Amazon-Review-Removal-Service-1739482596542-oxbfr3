import React from "react";
import { Calendar, Search, FileCheck } from "lucide-react";
export const DetailedProcess = () => {
  const timeline = [{
    day: "Day 1",
    title: "Data Gathering",
    icon: <Calendar />,
    description: "After connecting Spoiled Vine, our software automatically pulls all your ASINs, BSR, star ratings, and review counts."
  }, {
    day: "Day 2",
    title: "Violation Detection",
    icon: <Search />,
    description: "Our proprietary AI system determines which reviews violate Amazon's T&C and can therefore be challenged."
  }, {
    day: "Day 3",
    title: "Case Filing Begins",
    icon: <FileCheck />,
    description: "Our expert team starts submitting cases for review removal through Amazon's official channels."
  }];
  return <div className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-purple-900">
          Our Refined Process
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Like aging fine wine, we've perfected our process over years of
          experience
        </p>
        <div className="space-y-12 relative">
          {/* Vertical line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-purple-200 hidden md:block" />
          {timeline.map((step, index) => <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center gap-8 relative`}>
              <div className="flex-1 text-center md:text-left">
                <div className="text-purple-600 font-bold mb-2">{step.day}</div>
                <h3 className="text-xl font-semibold mb-2 text-purple-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 z-10">
                {step.icon}
              </div>
              <div className="flex-1" />
            </div>)}
        </div>
      </div>
    </div>;
};