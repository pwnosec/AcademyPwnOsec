import { CourseModule } from '../../types/course';
import { accessControlLevel1Modules } from './accessControl/level1';
import { accessControlLevel2Modules } from './accessControl/level2';
import { accessControlLevel3Modules } from './accessControl/level3';

// Combine all Access Control modules
export const accessControlModules: CourseModule[] = [
  ...accessControlLevel1Modules,
  ...accessControlLevel2Modules,
  ...accessControlLevel3Modules,
];