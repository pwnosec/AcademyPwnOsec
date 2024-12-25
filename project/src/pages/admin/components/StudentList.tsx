import React from 'react';
import { User, MoreVertical, CheckCircle } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { useCourseProgress } from '../../../context/CourseProgressContext';

export function StudentList() {
  const { user } = useAuth();
  const { progress } = useCourseProgress();

  // Mock student data based on auth context
  const students = [
    {
      id: '1',
      username: 'student',
      email: 'student@example.com',
      profile: {
        fullName: 'Student User',
        avatar: '',
      },
      progress: 0,
    },
    {
      id: '2',
      username: 'karyawan',
      email: 'karyawan@pwn0sec.com',
      profile: {
        fullName: 'Karyawan PwnOsec',
        avatar: 'https://i.ibb.co.com/m81jbjc/11zon-cropped-20.png',
      },
      progress: 75,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold">Active Students</h2>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {students.map((student) => (
            <div key={student.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                  {student.profile.avatar ? (
                    <img src={student.profile.avatar} alt={student.profile.fullName} className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-6 h-6 text-blue-600" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold">{student.profile.fullName || student.username}</h3>
                  <p className="text-sm text-gray-600">{student.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {student.progress}% Complete
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}