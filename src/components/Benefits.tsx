import React from "react";
import { TrendingUp, DollarSign, Target, Zap, Search, BarChart } from "lucide-react";
export const Benefits = () => {
  const benefits = [{
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Higher Click-Through",
    description: "Improve your listing's appeal to potential customers"
  }, {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Increased Sales",
    description: "Better ratings lead directly to more conversions"
  }, {
    icon: <Target className="w-6 h-6" />,
    title: "Lower ACoS",
    description: "Improved ROAS for your advertising spend"
  }, {
    icon: <Zap className="w-6 h-6" />,
    title: "Better Placements",
    description: "Enhanced positions for sponsored products"
  }, {
    icon: <Search className="w-6 h-6" />,
    title: "Improved Ranking",
    description: "Better organic ranking for your products"
  }, {
    icon: <BarChart className="w-6 h-6" />,
    title: "Higher Conversion",
    description: "Turn more browsers into buyers"
  }];
  return <div className="bg-purple-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-purple-900">
          Benefits of Review Management
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Watch your business flourish with proper review management
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>)}
        </div>
      </div>
    </div>;
};