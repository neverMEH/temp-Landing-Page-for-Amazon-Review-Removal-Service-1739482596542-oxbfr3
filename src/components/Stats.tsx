import React, { useEffect, useState } from "react";
import { Wine, Users, Star } from "lucide-react";
const AnimatedNumber = ({
  end,
  duration = 2000
}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime = null;
    const animate = currentTime => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);
  return <span>{count.toLocaleString()}</span>;
};
export const Stats = () => {
  const stats = [{
    icon: <Star className="w-8 h-8 text-purple-600" />,
    number: 11437,
    label: "Reviews Removed"
  }, {
    icon: <Wine className="w-8 h-8 text-purple-600" />,
    number: 27,
    label: "Years Experience"
  }, {
    icon: <Users className="w-8 h-8 text-purple-600" />,
    number: 389,
    label: "Satisfied Clients"
  }];
  return <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden -translate-y-full">
        <div className="absolute inset-0 bg-purple-900">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-20 rotate-180">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-purple-900"></path>
          </svg>
          {[...Array(10)].map((_, i) => <div key={i} className="absolute rounded-full bg-white/10 animate-float" style={{
          left: `${Math.random() * 100}%`,
          bottom: `${Math.random() * 100}%`,
          width: `${Math.random() * 8 + 2}px`,
          height: `${Math.random() * 8 + 2}px`,
          animationDuration: `${Math.random() * 2 + 1}s`,
          animationDelay: `${Math.random() * 1}s`
        }} />)}
        </div>
      </div>
      <div className="bg-purple-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => <div key={i} className="absolute rounded-full bg-white/20 animate-float" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 10 + 3}px`,
          height: `${Math.random() * 10 + 3}px`,
          animationDuration: `${Math.random() * 3 + 2}s`,
          animationDelay: `${Math.random() * 2}s`
        }} />)}
        </div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, index) => <div key={index} className="text-center group hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-purple-800/50 group-hover:bg-purple-800/70 transition-colors">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-100 to-purple-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  <AnimatedNumber end={stat.number} />
                  {stat.number >= 1000 ? "+" : ""}
                </div>
                <div className="text-purple-200 group-hover:text-purple-100 transition-colors">
                  {stat.label}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};