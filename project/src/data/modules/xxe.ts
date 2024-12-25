import { CourseModule } from '../../types/course';
import { xxeLevel1Modules } from './xxe/level1';
import { xxeLevel2Modules } from './xxe/level2';
import { xxeLevel3Modules } from './xxe/level3';

// Combine all XXE modules
export const xxeModules: CourseModule[] = [
  ...xxeLevel1Modules,
  ...xxeLevel2Modules,
  ...xxeLevel3Modules,
];