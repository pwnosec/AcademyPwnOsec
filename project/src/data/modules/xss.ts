import { CourseModule } from '../../types/course';
import { xssLevel1Modules } from './xss/level1';
import { xssLevel2Modules } from './xss/level2';
import { xssLevel3Modules } from './xss/level3';

// Combine all XSS modules
export const xssModules: CourseModule[] = [
  ...xssLevel1Modules,
  ...xssLevel2Modules,
  ...xssLevel3Modules,
];