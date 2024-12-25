import { CourseModule } from '../../types/course';
import { sqlInjectionLevel1Modules } from './sqlInjection/level1';
import { sqlInjectionLevel2Modules } from './sqlInjection/level2';
import { sqlInjectionLevel3Modules } from './sqlInjection/level3';

// Combine all SQL Injection modules
export const sqlInjectionModules: CourseModule[] = [
  ...sqlInjectionLevel1Modules,
  ...sqlInjectionLevel2Modules,
  ...sqlInjectionLevel3Modules,
];