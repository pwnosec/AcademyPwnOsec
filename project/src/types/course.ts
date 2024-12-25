export interface Course {
  id: string;
  title: string;
  duration: string;
  students: number;
  lessons: number;
  image: string;
  description: string;
  objectives: string[];
  prerequisites: string[];
}

export interface CourseModule {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'lab' | 'quiz';
  status: 'locked' | 'available' | 'completed';
  description: string;
  videoUrl?: string;
  labInstructions?: string;
  questions?: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}