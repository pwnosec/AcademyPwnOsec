import { CourseModule } from '../../../types/course';
import { jwtLevel1Modules } from './level1';
import { jwtLevel2Modules } from './level2';
import { jwtLevel3Modules } from './level3';

// Combine all JWT modules
export const jwtModules: CourseModule[] = [
  ...jwtLevel1Modules,
  ...jwtLevel2Modules,
  ...jwtLevel3Modules,
];