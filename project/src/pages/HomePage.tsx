import React from 'react';
import { Shield, Database, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CourseCard } from '../components/CourseCard';
import { PricingCard } from '../components/PricingCard';
import { Curriculum } from '../components/Curriculum';
import { courses } from '../data/courses';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Master Cybersecurity</h1>
            <p className="text-xl mb-8">Join PwnOsec Academy's comprehensive training program and become an expert in cybersecurity.</p>
            <div className="flex justify-center gap-8 mb-12">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6" />
                <span>Industry-leading curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-6 h-6" />
                <span>Hands-on labs</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6" />
                <span>Certification included</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => (
            <Link key={course.id} to={`/course/${course.id}`}>
              <CourseCard {...course} />
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Curriculum />
          <div>
            <div className="sticky top-8">
              <PricingCard />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Users className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <h3 className="text-3xl font-bold mb-2">5,000+</h3>
              <p className="text-gray-600">Active Students</p>
            </div>
            <div>
              <Award className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div>
              <Shield className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <h3 className="text-3xl font-bold mb-2">100+</h3>
              <p className="text-gray-600">Practice Labs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}