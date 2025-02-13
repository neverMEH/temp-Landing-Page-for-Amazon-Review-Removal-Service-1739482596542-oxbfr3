import React from "react";
import { Shield, Clock, Award, Users } from "lucide-react";
export const Features = () => {
  const features = [{
    icon: <Shield className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />,
    title: "Policy-Compliant Removal",
    description: "We only target reviews that explicitly violate Amazon's content guidelines"
  }, {
    icon: <Clock className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />,
    title: "85% Detection Accuracy",
    description: "Our AI system precisely identifies policy violations with proven reliability"
  }, {
    icon: <Award className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />,
    title: "Automated Excellence",
    description: "Advanced system that identifies policy violations with high confidence"
  }, {
    icon: <Users className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />,
    title: "Cost-Effective",
    description: "Up to 70% more affordable than traditional review management services"
  }];
  return <div className="bg-white py-20 px-4 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-32 h-full opacity-5">
        <div className="h-full w-full bg-repeat-y" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='200' viewBox='0 0 100 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 100c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15zm0-50c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15zm0 100c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15z' fill='%23000000' fill-opacity='1'/%3E%3C/svg%3E")`
      }} />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl font-bold text-center mb-4 text-purple-900">
          Why Choose Spoiled Vine?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Like a fine wine, we help your brand mature and improve with age
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="p-6 rounded-lg bg-white border border-purple-100 hover:border-purple-300 transition-all transform hover:-translate-y-2 hover:shadow-xl group cursor-pointer duration-300 ease-out">
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2 text-purple-900 group-hover:text-purple-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </div>;
};