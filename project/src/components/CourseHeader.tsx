import React from 'react';
import { Clock, Users, BookOpen, ArrowLeft } from 'lucide-react';
import { Course } from '../types/course';
import { Link } from 'react-router-dom';

interface CourseHeaderProps {
  course: Course;
}

export function CourseHeader({ course }: CourseHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-12">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-white mb-6 hover:text-blue-200">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Courses
        </Link>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl mb-6">{course.description}</p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{course.students} students</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>{course.lessons} lessons</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/3">
            <img 
              src={course.image} 
              alt={course.title}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}