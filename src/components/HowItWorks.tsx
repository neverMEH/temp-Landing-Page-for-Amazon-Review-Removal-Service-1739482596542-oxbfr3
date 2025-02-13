import React from "react";
import { Scan, ShieldCheck, TrendingUp } from "lucide-react";
export const HowItWorks = () => {
  const steps = [{
    icon: <Scan className="w-12 h-12 text-purple-600" />,
    title: "Smart Detection",
    description: "Our AI system scans your reviews to identify those violating Amazon's content policies"
  }, {
    icon: <ShieldCheck className="w-12 h-12 text-purple-600" />,
    title: "Compliant Removal",
    description: "We submit removal requests through Amazon's official channels, backed by policy documentation"
  }, {
    icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
    title: "Rating Recovery",
    description: "Watch your rating improve as policy-violating reviews are removed properly"
  }];
  return <div className="bg-purple-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-purple-900">
          How Spoiled Vine Works
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our automated system achieves 85% accuracy in identifying policy
          violations
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => <div key={index} className="text-center">
              <div className="flex justify-center mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-purple-900">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>)}
        </div>
      </div>
    </div>;
};