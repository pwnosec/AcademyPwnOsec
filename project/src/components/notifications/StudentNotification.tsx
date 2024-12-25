import React from 'react';
import { Bell, CheckCircle, XCircle } from 'lucide-react';
import { useNotifications } from '../../hooks/useNotifications';

export function StudentNotification() {
  const { notifications, markAsRead } = useNotifications();

  return (
    <div className="fixed bottom-4 right-4 max-w-sm w-full">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`bg-white rounded-lg shadow-lg p-4 mb-2 transform transition-all ${
            notification.read ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          }`}
        >
          <div className="flex items-start gap-4">
            {notification.type === 'review_complete' ? (
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            ) : (
              <Bell className="w-6 h-6 text-blue-500 flex-shrink-0" />
            )}
            <div className="flex-grow">
              <p className="font-medium">{notification.title}</p>
              <p className="text-sm text-gray-600">{notification.message}</p>
            </div>
            <button
              onClick={() => markAsRead(notification.id)}
              className="text-gray-400 hover:text-gray-600"
            >
              <XCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}