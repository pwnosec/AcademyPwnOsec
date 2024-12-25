import React from 'react';
import { Users, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { StudentList } from './components/StudentList';
import { CourseProgress } from './components/CourseProgress';
import { QuizResults } from './components/QuizResults';
import { AdminNotification } from '../../components/notifications/AdminNotification';
import { useAuth } from '../../context/AuthContext';
import { useCourseProgress } from '../../context/CourseProgressContext';
import { courses } from '../../data/courses';

export function AdminDashboard() {
  const { user } = useAuth();
  const { progress, isAllCoursesCompleted, pendingReview } = useCourseProgress();

  // Calculate total students (from auth context mock data)
  const totalStudents = 2; // student and karyawan accounts

  // Calculate active courses
  const activeCourses = courses.length;

  // Calculate completed courses (students who completed all courses)
  const completedStudents = 1; // For demo, showing 1 completed student

  // Calculate pending reviews
  const pendingReviews = pendingReview ? 1 : 0;

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
                <p className="text-2xl font-bold">{totalStudents}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <BookOpen className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="text-lg font-semibold">Active Courses</h3>
                <p className="text-2xl font-bold">{activeCourses}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
              <div>
                <h3 className="text-lg font-semibold">Completed</h3>
                <p className="text-2xl font-bold">{completedStudents}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <XCircle className="w-8 h-8 text-red-600" />
              <div>
                <h3 className="text-lg font-semibold">Pending Review</h3>
                <p className="text-2xl font-bold">{pendingReviews}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Completion Notifications */}
        <div className="mb-8">
          <AdminNotification />
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