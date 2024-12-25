import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

interface Notification {
  id: string;
  type: 'course_completion' | 'review_complete';
  title: string;
  message: string;
  studentName?: string;
  timestamp: string;
  read: boolean;
}

export function useNotifications() {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // In a real app, this would fetch notifications from an API
    if (user?.role === 'admin') {
      setNotifications([
        {
          id: '1',
          type: 'course_completion',
          title: 'Course Completion',
          message: 'Student has completed all courses',
          studentName: 'John Doe',
          timestamp: '2 minutes ago',
          read: false,
        },
      ]);
    } else {
      setNotifications([
        {
          id: '1',
          type: 'review_complete',
          title: 'Review Complete',
          message: 'Your course completion has been reviewed and approved!',
          timestamp: '1 minute ago',
          read: false,
        },
      ]);
    }
  }, [user]);

  const markAsRead = (notificationId: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  return { notifications, markAsRead };
}