import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
export const Hero = () => {
  return <div className="bg-purple-900 text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => <div key={i} className="absolute rounded-full bg-white/20 animate-float" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 12 + 4}px`,
        height: `${Math.random() * 12 + 4}px`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 2}s`
      }} />)}
      </div>
      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center gap-2 mb-6 text-purple-200 bg-purple-800/50 w-fit px-4 py-2 rounded-full hover:bg-purple-800/70 transition-colors cursor-pointer group backdrop-blur-sm">
          <ShieldCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>100% Amazon Policy Compliant</span>
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-100 to-purple-300 bg-clip-text text-transparent">
          Remove Policy-Violating Reviews & Protect Your Amazon Rating
        </h1>
        <p className="text-xl mb-8 text-purple-100 max-w-2xl">
          Our automated system identifies and removes unfair reviews that
          violate Amazon's content policies. Restore your rating legitimately,
          without any grey-area tactics.
        </p>
        <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 backdrop-blur-sm">
          Start Protecting Your Brand
          <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
        </button>
      </div>
    </div>;
};