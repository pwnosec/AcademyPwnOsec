import React from 'react';
import { Check } from 'lucide-react';

export function PricingCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">All-Access Membership</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">$29.99</span>
        <span className="text-gray-600">/month</span>
      </div>
      <ul className="space-y-3 mb-8">
        {[
          'Access to all courses',
          'Interactive learning environments',
          'Practice labs & exercises',
          'Course completion certificates',
          'Community access',
        ].map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
        Start Learning Now
      </button>
    </div>
  );
}