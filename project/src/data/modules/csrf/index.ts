import { CourseModule } from '../../../types/course';
import { csrfLevel1Modules } from './level1';
import { csrfLevel2Modules } from './level2';
import { csrfLevel3Modules } from './level3';

// Combine all CSRF modules
export const csrfModules: CourseModule[] = [
  ...csrfLevel1Modules,
  ...csrfLevel2Modules,
  ...csrfLevel3Modules,
];