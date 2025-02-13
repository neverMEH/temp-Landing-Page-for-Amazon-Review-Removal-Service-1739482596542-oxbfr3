import React from "react";
import { Star, Quote } from "lucide-react";
export const Testimonials = () => {
  const testimonials = [{
    quote: "Spoiled Vine helped us remove 23 policy-violating reviews in the first month. Our rating went from 4.1 to 4.6!",
    author: "Electronics Seller",
    stats: "Rating increased by 0.5 stars"
  }, {
    quote: "Their automated system caught policy violations we didn't even know existed. Completely legitimate process and amazing results.",
    author: "Health & Wellness Brand",
    stats: "42 reviews removed"
  }, {
    quote: "We tried other services that cost 3x more with worse results. Spoiled Vine's approach is both effective and compliant.",
    author: "Home Goods Manufacturer",
    stats: "Saved $12,000 annually"
  }];
  return <div className="bg-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute transform -rotate-45 left-0 top-0 w-full h-full">
          {[...Array(10)].map((_, i) => <div key={i} className="absolute border-t border-purple-900" style={{
          top: `${i * 100}px`,
          left: 0,
          right: 0
        }} />)}
        </div>
      </div>
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl font-bold text-center mb-4 text-purple-900">
          Trusted by Amazon Sellers
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Join hundreds of sellers who've restored their ratings legitimately
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative group">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-200 group-hover:text-purple-300 transition-colors" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-purple-500 text-purple-500 group-hover:scale-110 transition-transform" style={{
              transitionDelay: `${i * 50}ms`
            }} />)}
              </div>
              <p className="text-gray-700 mb-4 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-purple-200 pt-4">
                <p className="font-semibold text-purple-900">
                  {testimonial.author}
                </p>
                <p className="text-purple-600 text-sm">{testimonial.stats}</p>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};