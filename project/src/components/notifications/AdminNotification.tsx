import React from 'react';
import { Bell, CheckCircle, Clock } from 'lucide-react';
import { useNotifications } from '../../hooks/useNotifications';

export function AdminNotification() {
  const { notifications, markAsRead } = useNotifications();

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Course Completion Notifications</h2>
        <Bell className="w-5 h-5 text-gray-500" />
      </div>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg border ${
              notification.read ? 'bg-gray-50' : 'bg-blue-50 border-blue-100'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium">{notification.studentName}</p>
                <p className="text-sm text-gray-600">
                  Completed all courses and labs
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">
                    {notification.timestamp}
                  </span>
                </div>
              </div>
              {!notification.read && (
                <button
                  onClick={() => markAsRead(notification.id)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Mark as read
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}