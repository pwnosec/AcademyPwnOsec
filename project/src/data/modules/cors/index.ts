import { CourseModule } from '../../../types/course';
import { corsLevel1Modules } from './level1';
import { corsLevel2Modules } from './level2';
import { corsLevel3Modules } from './level3';

// Combine all CORS modules
export const corsModules: CourseModule[] = [
  ...corsLevel1Modules,
  ...corsLevel2Modules,
  ...corsLevel3Modules,
];