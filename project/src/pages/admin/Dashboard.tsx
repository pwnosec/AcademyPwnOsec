import React from 'react';
import { Users, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { StudentList } from './components/StudentList';
import { CourseProgress } from './components/CourseProgress';
import { QuizResults } from './components/QuizResults';

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold">Total Students</h3>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <BookOpen className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="text-lg font-semibold">Active Courses</h3>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
              <div>
                <h3 className="text-lg font-semibold">Completed</h3>
                <p className="text-2xl font-bold">45</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <XCircle className="w-8 h-8 text-red-600" />
              <div>
                <h3 className="text-lg font-semibold">Pending Review</h3>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <StudentList />
          <CourseProgress />
        </div>

        <div className="mt-8">
          <QuizResults />
        </div>
      </div>
    </div>
  );
}