import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [{
    question: "Why should I use Spoiled Vine?",
    answer: "We offer an AI-driven solution that automatically detects and removes policy-violating reviews through Amazon's official channels. With over 30 years of experience, we've perfected the process of legitimate review management."
  }, {
    question: "Is this a black hat service?",
    answer: "No. We operate 100% within Amazon's Terms of Service, focusing only on reviews that explicitly violate Amazon's content policies."
  }, {
    question: "Do you need access to my account?",
    answer: "Minimal access is required to gather basic listing information. We maintain strict security protocols to protect your data."
  }, {
    question: "Is there any risk to my account?",
    answer: "No. We operate fully within Amazon's guidelines, using only approved methods for review management."
  }, {
    question: "How many reviews can you remove?",
    answer: "Success rates vary by case, but we maintain a high success rate for reviews that violate Amazon's policies. We'll provide a detailed assessment during your consultation."
  }];
  return <div className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-purple-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => <div key={index} className="border border-purple-100 rounded-lg overflow-hidden">
              <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-purple-50 transition-colors" onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
                <span className="font-semibold text-purple-900">
                  {faq.question}
                </span>
                {openIndex === index ? <ChevronUp className="w-5 h-5 text-purple-600" /> : <ChevronDown className="w-5 h-5 text-purple-600" />}
              </button>
              {openIndex === index && <div className="px-6 py-4 bg-purple-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>}
            </div>)}
        </div>
      </div>
    </div>;
};