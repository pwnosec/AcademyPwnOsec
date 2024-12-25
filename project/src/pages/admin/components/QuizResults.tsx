import React from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { useCourseProgress } from '../../../context/CourseProgressContext';

export function QuizResults() {
  const { user } = useAuth();
  const { progress } = useCourseProgress();

  // Mock quiz submissions based on course progress
  const submissions = [
    {
      student: {
        name: 'Karyawan PwnOsec',
        email: 'karyawan@pwn0sec.com',
        avatar: 'https://i.ibb.co.com/m81jbjc/11zon-cropped-20.png',
      },
      course: 'SQL Injection Mastery',
      quiz: 'Module 1 Quiz',
      score: 85,
      status: 'approved',
      timestamp: '2024-03-15T10:30:00Z',
    },
    {
      student: {
        name: 'Student User',
        email: 'student@example.com',
        avatar: '',
      },
      course: 'Web Application Security',
      quiz: 'Module 2 Quiz',
      score: 75,
      status: 'pending',
      timestamp: '2024-03-15T11:45:00Z',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">Recent Quiz Submissions</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Student</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Course</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Quiz</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Score</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {submissions.map((submission, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                      {submission.student.avatar ? (
                        <img 
                          src={submission.student.avatar} 
                          alt={submission.student.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-sm font-medium text-blue-600">
                          {submission.student.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{submission.student.name}</div>
                      <div className="text-sm text-gray-500">{submission.student.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">{submission.course}</td>
                <td className="px-6 py-4">{submission.quiz}</td>
                <td className="px-6 py-4">{submission.score}%</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm ${
                      submission.status === 'approved'
                        ? 'bg-green-100 text-green-700'
                        : submission.status === 'failed'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {submission.status === 'approved' ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : submission.status === 'failed' ? (
                      <XCircle className="w-4 h-4" />
                    ) : (
                      <AlertCircle className="w-4 h-4" />
                    )}
                    {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="text-sm text-blue-600 hover:text-blue-700">Review</button>
                    {submission.status === 'pending' && (
                      <>
                        <button className="text-sm text-green-600 hover:text-green-700">
                          Approve
                        </button>
                        <button className="text-sm text-red-600 hover:text-red-700">
                          Reject
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}