export interface User {
  id: string;
  username: string;
  role: 'student' | 'admin';
  email: string;
  profile?: {
    fullName?: string;
    bio?: string;
    avatar?: string;
    phoneNumber?: string;
    location?: string;
  };
}

export interface StudentProgress {
  userId: string;
  courseId: string;
  moduleId: string;
  completed: boolean;
  quizAnswers?: {
    questionId: string;
    selectedAnswer: number;
    isCorrect: boolean;
  }[];
  status: 'pending' | 'approved' | 'failed';
  feedback?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}