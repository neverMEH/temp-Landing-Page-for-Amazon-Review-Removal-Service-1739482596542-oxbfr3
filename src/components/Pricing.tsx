import React from "react";
import { Check, MessageSquare } from "lucide-react";
const PricingTier = ({
  tier,
  price,
  reviews,
  success,
  features,
  popular = false,
  isEnterprise = false
}) => <div className={`p-6 rounded-xl ${popular ? "border-2 border-purple-500 bg-gradient-to-br from-purple-50 to-white" : "border border-gray-200 hover:border-purple-300"} relative group transition-all transform hover:-translate-y-2 hover:shadow-xl duration-300 ease-out`}>
    {popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm shadow-lg animate-pulse">
        Most Popular
      </span>}
    <h3 className="text-2xl font-bold text-purple-900 mb-2">{tier}</h3>
    <div className="mb-4">
      {isEnterprise ? <div className="text-xl text-purple-600 font-medium">
          Custom Pricing
        </div> : <>
          <span className="text-4xl font-bold text-purple-900">${price}</span>
          <span className="text-gray-600">
            {tier === "Pay Per Performance" ? " credit" : "/month"}
          </span>
        </>}
    </div>
    <div className="space-y-4 mb-6">
      {reviews && <p className="text-gray-600">Reviews Processed: {reviews}/month</p>}
      {success && <p className="text-gray-600">Expected Success: {success}</p>}
      {tier === "Pay Per Performance" && <p className="text-sm text-purple-600">$150 per successful removal</p>}
    </div>
    <ul className="space-y-3">
      {features.map((feature, index) => <li key={index} className="flex items-start gap-2 group/item">
          <Check className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
          <span className="text-gray-600">{feature}</span>
        </li>)}
    </ul>
  </div>;
export const Pricing = () => {
  return <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-purple-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose the perfect plan for your business. All plans include our core
          review removal service.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PricingTier tier="Pay Per Performance" price="750" success="7 removals included" features={["Pay per successful removal", "Basic review monitoring", "Manual review processing", "Basic reporting", "Unused credits roll over"]} />
          <PricingTier tier="Growth" price="3,500" reviews="500" success="75 removals (15%)" features={["Dedicated account manager", "Priority processing", "Monthly reporting", "Advanced review monitoring", "Detailed success tracking"]} popular={true} />
          <PricingTier tier="Professional" price="12,500" reviews="2,500" success="375 removals (15%)" features={["Advanced analytics", "Custom reporting", "Bulk processing", "Priority support", "Strategic consulting"]} />
          <PricingTier tier="Enterprise" reviews="5,000+" success="750+ removals (15%)" features={["Custom solutions", "White-label options", "24/7 dedicated support", "Custom integrations", "Quarterly strategy reviews"]} isEnterprise={true} />
        </div>
      </div>
    </div>;
};