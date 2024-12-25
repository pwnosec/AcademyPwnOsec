import React from 'react';
import { CheckCircle } from 'lucide-react';

interface CourseCompletionProps {
  studentName: string;
}

export function CourseCompletion({ studentName }: CourseCompletionProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Congratulations!</h1>
        <p className="text-gray-600 mb-6">
          You have completed all Training Courses and Labs. Please wait for admin review of your progress.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-700">
            Your submission is now under review. You will be notified once the review process is complete.
          </p>
        </div>
      </div>
    </div>
  );
}