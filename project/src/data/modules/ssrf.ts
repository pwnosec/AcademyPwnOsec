import { CourseModule } from '../../types/course';
import { ssrfLevel1Modules } from './ssrf/level1';
import { ssrfLevel2Modules } from './ssrf/level2';
import { ssrfLevel3Modules } from './ssrf/level3';

// Combine all SSRF modules
export const ssrfModules: CourseModule[] = [
  ...ssrfLevel1Modules,
  ...ssrfLevel2Modules,
  ...ssrfLevel3Modules,
];