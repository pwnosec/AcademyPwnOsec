import { CourseModule } from '../../types/course';
import { commandInjectionLevel1Modules } from './commandInjection/level1';
import { commandInjectionLevel2Modules } from './commandInjection/level2';
import { commandInjectionLevel3Modules } from './commandInjection/level3';

// Combine all Command Injection modules
export const commandInjectionModules: CourseModule[] = [
  ...commandInjectionLevel1Modules,
  ...commandInjectionLevel2Modules,
  ...commandInjectionLevel3Modules,
];